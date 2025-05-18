import React, { useEffect, useState } from 'react';
import { ChatService } from '../services/ChatService';
import { Message } from '../types';
import './styles.css';
import { withApiKeyVerification } from './withApiKeyVerification';

export interface ChatProps {
  userId: string;
  receiverId: string;
  apiKey: string;
  serverUrl: string;
  onMessageReceived?: (message: Message) => void;
}

const ChatComponent: React.FC<ChatProps> = ({ 
  userId, 
  receiverId, 
  apiKey, 
  serverUrl,
  onMessageReceived 
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [chatService, setChatService] = useState<ChatService | null>(null);

  useEffect(() => {
    if (!userId) {
      console.error("Chat component requires a userId");
      return;
    }

    const service = new ChatService({
      userId,
      serverUrl,
      onMessageReceived: (message) => {
        setMessages(prev => [...prev, message]);
        if (onMessageReceived) {
          onMessageReceived(message);
        }
      }
    });

    setChatService(service);

    return () => {
      service.disconnect();
    };
  }, [userId, serverUrl, onMessageReceived]);

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

export const Chat = ChatComponent;