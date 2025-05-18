export interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  timestamp: number;
}

export interface ChatConfig {
  userId: string;
  serverUrl: string;
  onMessageReceived?: (message: Message) => void;
}

export interface VideoCallConfig {
  userId: string;
  serverUrl: string;
  onCallReceived?: (callerId: string) => void;
  onCallEnded?: () => void;
}