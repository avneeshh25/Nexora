export interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  timestamp: number;
  status?: 'sent' | 'delivered' | 'read';
  type?: 'text' | 'image' | 'file';
  fileName?: string;
  fileUrl?: string;
}

export interface NotificationConfig {
  enable?: boolean;
  sound?: boolean;
  notifyOnNewMessage?: boolean;
  notifyOnCall?: boolean;
  notifyOnMissedCall?: boolean;
  customSound?: string;
}

export interface ChatConfig {
  apiKey?: string; // Made optional
  userId: string;
  serverUrl: string;
  onMessageReceived?: (message: Message) => void;
  notificationConfig?: NotificationConfig;
}

export interface ChatProps {
  apiKey?: string; // Made optional
  userId: string;
  receiverId: string;
  serverUrl: string;
  userName?: string;
  receiverName?: string;
  userAvatar?: string;
  receiverAvatar?: string;
  onSendMessage?: (message: Message) => void;
  onMessageReceived?: (message: Message) => void;
  onTyping?: (isTyping: boolean) => void;
  onError?: (error: Error) => void;
  customStyles?: ChatCustomStyles;
  enableFileSharing?: boolean;
  maxFileSize?: number; // in bytes, default 5MB
  allowedFileTypes?: string[]; // e.g. ['image/*', 'application/pdf']
  onFileUploadProgress?: (progress: number) => void;
  notificationConfig?: NotificationConfig;
}

export interface ChatCustomStyles {
  container?: React.CSSProperties;
  header?: React.CSSProperties;
  messageList?: React.CSSProperties;
  messageBubble?: {
    sent?: React.CSSProperties;
    received?: React.CSSProperties;
  };
  inputArea?: React.CSSProperties;
  button?: React.CSSProperties;
}

export interface VideoCallConfig {
  apiKey?: string; // Made optional
  userId: string;
  serverUrl: string;
  onCallReceived?: (callerId: string) => void;
  onCallEnded?: () => void;
  notificationConfig?: NotificationConfig;
}

export interface VideoCallProps {
  apiKey?: string; // Made optional
  userId: string;
  receiverId: string;
  serverUrl: string;
  userName?: string;
  receiverName?: string;
  userAvatar?: string;
  receiverAvatar?: string;
  onCallReceived?: (callerId: string) => void;
  onCallEnded?: () => void;
  onCallStarted?: () => void;
  onError?: (error: Error) => void;
  notificationConfig?: NotificationConfig;
}

export interface UsageStats {
  messagesSent: number;
  messagesReceived: number;
  callsDuration: number;
  callsInitiated: number;
  callsReceived: number;
}