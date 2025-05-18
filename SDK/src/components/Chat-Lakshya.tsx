import React, { useEffect, useState, useRef, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import type { Message, ChatProps } from '../types';
import { AuthService } from '../services/AuthService';
import './styles.css';

export const Chat: React.FC<ChatProps> = ({
  apiKey,
  userId,
  receiverId,
  serverUrl,
  userName = 'You',
  receiverName = 'User',
  userAvatar,
  receiverAvatar,
  onSendMessage,
  onMessageReceived,
  onTyping,
  onError,
  customStyles,
  enableFileSharing = false,
  maxFileSize = 5 * 1024 * 1024,
  allowedFileTypes = ['*/*'],
  onFileUploadProgress,
  ...props
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [hasNotificationPermission, setHasNotificationPermission] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const processedMessages = useRef(new Set<string>());
  const authService = useRef(AuthService.getInstance());
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.parentElement!.scrollTop = messagesEndRef.current.parentElement!.scrollHeight;
    }
  }, []);

  // Initialize notification permission
  useEffect(() => {
    const requestNotificationPermission = async () => {
      if ('Notification' in window) {
        try {
          const permission = await Notification.requestPermission();
          setHasNotificationPermission(permission === 'granted');
        } catch (error) {
          console.error('Error requesting notification permission:', error);
        }
      }
    };
    requestNotificationPermission();
  }, []);

  const showNotification = useCallback((title: string, body: string) => {
    if (!hasNotificationPermission || !document.hidden) return;

    try {
      new Notification(title, {
        body,
        icon: receiverAvatar,
        tag: 'chat-message',
        requireInteraction: false
      });
    } catch (error) {
      console.error('Error showing notification:', error);
    }
  }, [hasNotificationPermission, receiverAvatar]);

  // Socket connection and message handling
  useEffect(() => {
    if (!serverUrl || !userId || !receiverId) {
      onError?.(new Error('Missing required props: serverUrl, userId, or receiverId'));
      return;
    }

    const initializeChat = async () => {
      const newSocket = io(serverUrl, {
        query: { userId },
        auth: apiKey ? { apiKey } : {},
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
      });

      newSocket.on('connect', () => {
        setIsConnected(true);
      });

      newSocket.on('disconnect', () => {
        setIsConnected(false);
      });

      newSocket.on('message', async (message: Message) => {
        if (!processedMessages.current.has(message.id)) {
          processedMessages.current.add(message.id);
          setMessages(prev => [...prev, message]);
          onMessageReceived?.(message);
          scrollToBottom();
          await authService.current.trackUsage('messagesReceived', 1, serverUrl);

          // Show notification for new messages
          if (message.senderId === receiverId) {
            showNotification(
              `New message from ${receiverName}`,
              message.type === 'text' ? message.content : `Sent you a ${message.type}`
            );

            newSocket.emit('message_delivered', {
              messageId: message.id,
              senderId: message.senderId,
              receiverId: userId
            });
          }
        }
      });

      // Fetch message history
      try {
        const headers: HeadersInit = {};
        if (apiKey) {
          headers['Authorization'] = `Bearer ${apiKey}`;
        }
        
        const response = await fetch(`${serverUrl}/chat/history/${userId}/${receiverId}`, { headers });
        if (!response.ok) {
          throw new Error(`Failed to fetch message history: ${response.status}`);
        }
        
        const data = await response.json();
        if (Array.isArray(data)) {
          setMessages(data);
          data.forEach((msg: Message) => {
            processedMessages.current.add(msg.id);
          });
          scrollToBottom();
        }
      } catch (error) {
        onError?.(error as Error);
      }

      setSocket(newSocket);
    };

    initializeChat();

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [userId, receiverId, serverUrl, onMessageReceived, onError, scrollToBottom, apiKey, showNotification, receiverName]);

  const handleTyping = useCallback(() => {
    if (socket?.connected) {
      socket.emit('typing', { receiverId, isTyping: true });
      onTyping?.(true);

      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }

      typingTimeoutRef.current = setTimeout(() => {
        socket.emit('typing', { receiverId, isTyping: false });
        onTyping?.(false);
      }, 1000);
    }
  }, [socket, receiverId, onTyping]);

  const handleSendMessage = useCallback(async () => {
    if (!inputMessage.trim()) return;

    const message: Message = {
      id: `${userId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content: inputMessage.trim(),
      senderId: userId,
      receiverId,
      timestamp: Date.now(),
      status: 'sent',
      type: 'text'
    };

    try {
      // Add message locally first for immediate feedback
      setMessages(prev => [...prev, message]);
      processedMessages.current.add(message.id);
      scrollToBottom();
      
      // Emit message to server if connected
      if (socket?.connected) {
        socket.emit('send_message', message);
        await authService.current.trackUsage('messagesSent', 1, serverUrl);
      } else {
        console.log('Socket not connected - message stored locally only');
      }
      
      setInputMessage('');
      onSendMessage?.(message);
    } catch (error) {
      // Remove message if send failed
      setMessages(prev => prev.filter(msg => msg.id !== message.id));
      processedMessages.current.delete(message.id);
      onError?.(error as Error);
    }
  }, [inputMessage, socket, userId, receiverId, onSendMessage, onError, scrollToBottom, serverUrl]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size
    if (file.size > maxFileSize) {
      onError?.(new Error(`File size exceeds maximum limit of ${maxFileSize / (1024 * 1024)}MB`));
      return;
    }

    // Validate file type
    if (!allowedFileTypes.includes('*/*') && 
        !allowedFileTypes.some(type => {
          const [category, ext] = type.split('/');
          return ext === '*' ? 
            file.type.startsWith(category) : 
            file.type === type;
        })) {
      onError?.(new Error('File type not allowed'));
      return;
    }

    setSelectedFile(file);
  }, [maxFileSize, allowedFileTypes, onError]);

  const uploadFile = useCallback(async (file: File): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const xhr = new XMLHttpRequest();
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable && onFileUploadProgress) {
          const progress = (event.loaded / event.total) * 100;
          onFileUploadProgress(progress);
        }
      };

      const uploadPromise = new Promise<string>((resolve, reject) => {
        xhr.onload = () => {
          if (xhr.status === 200) {
            try {
              const response = JSON.parse(xhr.responseText);
              resolve(response.fileUrl);
            } catch (error) {
              reject(new Error('Invalid response from server'));
            }
          } else {
            reject(new Error(`Upload failed with status: ${xhr.status}`));
          }
        };
        xhr.onerror = () => reject(new Error('Network error during upload'));
      });

      xhr.open('POST', `${serverUrl}/upload`);
      if (apiKey) {
        xhr.setRequestHeader('Authorization', `Bearer ${apiKey}`);
      }
      xhr.send(formData);

      return await uploadPromise;
    } catch (error) {
      console.error('File upload error:', error);
      throw error;
    }
  }, [serverUrl, apiKey]);

  const handleSendFile = useCallback(async () => {
    if (!selectedFile) return;

    try {
      const fileUrl = await uploadFile(selectedFile);
      
      const message: Message = {
        id: `${userId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: selectedFile.name,
        senderId: userId,
        receiverId,
        timestamp: Date.now(),
        status: 'sent',
        type: selectedFile.type.startsWith('image/') ? 'image' : 'file',
        fileName: selectedFile.name,
        fileUrl
      };

      setMessages(prev => [...prev, message]);
      processedMessages.current.add(message.id);
      scrollToBottom();
      
      if (socket?.connected) {
        socket.emit('send_message', message);
        await authService.current.trackUsage('messagesSent', 1, serverUrl);
      }
      
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      onSendMessage?.(message);
    } catch (error) {
      onError?.(error as Error);
    }
  }, [selectedFile, uploadFile, userId, receiverId, socket, serverUrl, onSendMessage, onError, scrollToBottom]);

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const renderFilePreview = () => {
    if (!selectedFile) return null;

    return (
      <div className="chat-sdk-file-preview">
        <div className="chat-sdk-file-icon">
          {selectedFile.type.startsWith('image/') ? '🖼️' : '📎'}
        </div>
        <div className="chat-sdk-file-name">{selectedFile.name}</div>
        <div className="chat-sdk-file-size">
          {Math.round(selectedFile.size / 1024)}KB
        </div>
        <button className="chat-sdk-send-button" onClick={handleSendFile}>
          Send
        </button>
      </div>
    );
  };

  const renderMessage = (message: Message) => {
    if (message.type === 'file' || message.type === 'image') {
      return (
        <div className="chat-sdk-file-message" onClick={() => window.open(message.fileUrl, '_blank')}>
          <div className="chat-sdk-file-icon">
            {message.type === 'image' ? '🖼️' : '📎'}
          </div>
          <div className="chat-sdk-file-name">{message.fileName}</div>
        </div>
      );
    }
    return <p>{message.content}</p>;
  };

  return (
    <div className="chat-sdk-container" style={customStyles?.container}>
      <div className="chat-sdk-header" style={customStyles?.header}>
        <div className="chat-sdk-user-info">
          {receiverAvatar && (
            <img 
              src={receiverAvatar} 
              alt={receiverName} 
              className="chat-sdk-avatar"
            />
          )}
          <div className="chat-sdk-user-details">
            <h3>{receiverName}</h3>
            <div className="chat-sdk-status-wrapper">
              {!isConnected && <span className="chat-sdk-connection-status">connecting...</span>}
              {isTyping && <span className="chat-sdk-typing">typing...</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="chat-sdk-messages" style={customStyles?.messageList}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-sdk-message ${
              message.senderId === userId ? 'chat-sdk-sent' : 'chat-sdk-received'
            }`}
            style={
              message.senderId === userId
                ? customStyles?.messageBubble?.sent
                : customStyles?.messageBubble?.received
            }
          >
            <div className="chat-sdk-message-content">
              {renderMessage(message)}
              <div className="chat-sdk-message-meta">
                <time>{formatTime(message.timestamp)}</time>
                {message.senderId === userId && (
                  <span className={`chat-sdk-status chat-sdk-${message.status}`} />
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {selectedFile && renderFilePreview()}

      <div className="chat-sdk-input-area" style={customStyles?.inputArea}>
        {enableFileSharing && (
          <>
            <input
              type="file"
              ref={fileInputRef}
              className="chat-sdk-file-input"
              onChange={handleFileSelect}
              accept={allowedFileTypes.join(',')}
            />
            <button
              className="chat-sdk-attachment-button"
              onClick={() => fileInputRef.current?.click()}
              title="Attach file"
            >
              📎
            </button>
          </>
        )}
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => {
            setInputMessage(e.target.value);
            handleTyping();
          }}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type a message..."
          className="chat-sdk-input"
        />
        <button 
          onClick={handleSendMessage}
          className="chat-sdk-send-button"
          style={customStyles?.button}
          disabled={!inputMessage.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
};