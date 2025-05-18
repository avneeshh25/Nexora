import React from 'react';
import { ApiKeyProvider } from './context/AppContext';
import { Chat as ChatComponent, ChatProps } from './components/Chat';
import { VideoCall as VideoCallComponent, VideoCallProps } from './components/VideoCall';

// Define interface for components that need API key
export interface WithApiKeyProps {
  apiKey: string;
}

// Update wrapper to accept and pass apiKey
function withApiKeyProvider<P extends object>(Component: React.ComponentType<P>): 
  React.FC<P & WithApiKeyProps> {
  return function Wrapper(props: P & WithApiKeyProps) {
    const { apiKey, ...componentProps } = props;
    return (
      <ApiKeyProvider apiKey={apiKey}>
        <Component {...componentProps as unknown as P} />
      </ApiKeyProvider>
    );
  };
}

// Export the wrapped components with their proper types
export const Chat: React.FC<ChatProps & WithApiKeyProps> = withApiKeyProvider(ChatComponent);
export const VideoCall: React.FC<VideoCallProps & WithApiKeyProps> = withApiKeyProvider(VideoCallComponent);

// Re-export the props types so consumers can use them
export type { ChatProps } from './components/Chat';
export type { VideoCallProps } from './components/VideoCall';

export { ChatService } from './services/ChatService';
export { VideoService } from './services/VideoService';
export * from './types';