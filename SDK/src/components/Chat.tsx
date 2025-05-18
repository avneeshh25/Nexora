import React, { useEffect, useState } from 'react';
import { ChatService } from '../services/ChatService';
import { Message } from '../types';
import './styles.css';

export interface ChatProps {
  userId: string; // Make required to match ChatConfig
  threadId?: string;
  receiverId: string;
  serverUrl: string;
}

export const Chat: React.FC<ChatProps> = ({ userId, threadId, receiverId, serverUrl }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [chatService, setChatService] = useState<ChatService | null>(null);

  useEffect(() => {
    if (!userId) {
      console.error("Chat component requires a userId");
      return;
    }

    const service = new ChatService({
      userId, // This is now guaranteed to be a string
      serverUrl,
      onMessageReceived: (message) => {
        setMessages(prev => [...prev, message]);
      }
    });

    setChatService(service);

    return () => {
      service.disconnect();
    };
  }, [userId, serverUrl]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !chatService) return;

    try {
      await chatService.sendMessage(receiverId, inputMessage);
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.senderId === userId ? 'sent' : 'received'}`}
          >
            <p>{message.content}</p>
            <small>{new Date(message.timestamp).toLocaleTimeString()}</small>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};