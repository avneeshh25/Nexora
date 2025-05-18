import React, { useEffect, useRef, useState } from 'react';
import { VideoService } from '../services/VideoService';
import { withApiKeyVerification } from './withApiKeyVerification';
import './styles.css';

export interface VideoCallProps {
  userId: string;
  receiverId: string;
  apiKey: string;
  serverUrl: string;
  onCallReceived?: (callerId: string) => void;
  onCallEnded?: () => void;
  roomId?: string;
}

const VideoCallComponent: React.FC<VideoCallProps> = ({
  userId,
  receiverId,
  apiKey,
  serverUrl,
  onCallReceived,
  onCallEnded,
  roomId
}) => {
  const [videoService, setVideoService] = useState<VideoService | null>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Create the service with all required properties
    const service = new VideoService({
      userId,
      serverUrl, // This is now guaranteed to be a string
      onCallEnded: () => {
        if (onCallEnded) onCallEnded();
      }
    });

    setVideoService(service);

    return () => {
      service.disconnect();
    };
  }, [userId, serverUrl, onCallEnded]);

  useEffect(() => {
    const attachStreams = () => {
      if (videoService) {
        const localStream = videoService.getLocalStream();
        const remoteStream = videoService.getRemoteStream();

        if (localVideoRef.current && localStream) {
          localVideoRef.current.srcObject = localStream;
        }

        if (remoteVideoRef.current && remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream;
        }
      }
    };

    attachStreams();
  }, [videoService]);

  const handleStartCall = async () => {
    try {
      // Add null check for receiverId
      if (!receiverId) {
        console.error("Cannot start call: receiverId is required");
        return;
      }
      
      await videoService?.startCall(receiverId);
    } catch (error) {
      console.error('Error starting call:', error);
    }
  };

  const handleEndCall = () => {
    videoService?.endCall();
  };

  return (
    <div className="video-call-container">
      <div className="video-grid">
        <div className="video-wrapper local">
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
          />
          <span>You</span>
        </div>
        <div className="video-wrapper remote">
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
          />
          <span>Remote User</span>
        </div>
      </div>
      <div className="controls">
        <button onClick={handleStartCall}>Start Call</button>
        <button onClick={handleEndCall}>End Call</button>
      </div>
    </div>
  );
};

export const VideoCall = VideoCallComponent;