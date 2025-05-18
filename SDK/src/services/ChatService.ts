import { io, Socket } from 'socket.io-client';
import { Message, ChatConfig } from '../types';

export class ChatService {
  private socket: Socket | null = null;
  private config: ChatConfig;

  constructor(config: ChatConfig) {
    this.config = config;
    this.initialize();
  }

  private initialize() {
    this.socket = io(this.config.serverUrl);
    
    this.socket.on('connect', () => {
      this.socket?.emit('register', this.config.userId);
    });

    this.socket.on('message', (message: Message) => {
      this.config.onMessageReceived?.(message);
    });
  }

  public async sendMessage(receiverId: string, content: string): Promise<void> {
    if (!this.socket?.connected) {
      throw new Error('Not connected to chat server');
    }

    const message: Message = {
      id: Math.random().toString(36).substr(2, 9),
      content,
      senderId: this.config.userId,
      receiverId,
      timestamp: Date.now()
    };

    this.socket.emit('send_message', message);
  }

  public disconnect(): void {
    this.socket?.disconnect();
    this.socket = null;
  }
}