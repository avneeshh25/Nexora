# Chat and Video Calling SDK

A React-based SDK for implementing 1:1 chat and video calling functionality in your applications.

## Installation

```bash
npm install chat-video-sdk
```

## Features

- 1:1 Real-time chat messaging
- 1:1 Video calling with WebRTC
- React components for easy integration
- TypeScript support
- Customizable UI

## Prerequisites

- React 17.0.0 or higher
- A WebSocket/Socket.IO server for signaling

## Usage

### Chat Component

```tsx
import { Chat } from 'chat-video-sdk';

function App() {
  return (
    <Chat
      userId="user1"
      receiverId="user2"
      serverUrl="https://your-signaling-server.com"
    />
  );
}
```

### Video Call Component

```tsx
import { VideoCall } from 'chat-video-sdk';

function App() {
  return (
    <VideoCall
      userId="user1"
      receiverId="user2"
      serverUrl="https://your-signaling-server.com"
      onCallEnded={() => console.log('Call ended')}
    />
  );
}
```

## Advanced Usage

You can also use the services directly for more custom implementations:

```tsx
import { ChatService, VideoService } from 'chat-video-sdk';

// Initialize chat service
const chatService = new ChatService({
  userId: 'user1',
  serverUrl: 'https://your-signaling-server.com',
  onMessageReceived: (message) => {
    console.log('New message:', message);
  }
});

// Initialize video service
const videoService = new VideoService({
  userId: 'user1',
  serverUrl: 'https://your-signaling-server.com',
  onCallReceived: (callerId) => {
    console.log('Incoming call from:', callerId);
  }
});
```

## Server Requirements

You'll need a signaling server that supports:
- WebSocket/Socket.IO connections
- User registration/authentication
- Message relaying
- WebRTC signaling (offer/answer/ICE candidates)

## License

MIT