import React, { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { VideoCallProps } from '../types';
import './styles.css';

export const VideoCall: React.FC<VideoCallProps> = ({
  userId,
  receiverId,
  serverUrl,
  userName = 'You',
  receiverName = 'User',
  onCallStarted,
  onCallEnded,
  onError
}) => {
  const [isInCall, setIsInCall] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const localStream = useRef<MediaStream | null>(null);

  // Initialize socket connection
  useEffect(() => {
    const newSocket = io(serverUrl);
    
    newSocket.on("connect", () => {
      newSocket.emit("register", userId);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [serverUrl, userId]);

  // Handle incoming WebRTC signaling
  useEffect(() => {
    if (!socket) return;

    socket.on("offer", async ({ from, offer }) => {
      try {
        await handleOffer(offer);
        const answer = await createAnswer();
        socket.emit("answer", { to: from, answer });
        setIsInCall(true);
      } catch (err) {
        onError?.(err as Error);
      }
    });

    socket.on("answer", async ({ answer }) => {
      try {
        if (peerConnection.current) {
          await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
        }
      } catch (err) {
        onError?.(err as Error);
      }
    });

    socket.on("ice-candidate", async ({ candidate }) => {
      try {
        if (peerConnection.current) {
          await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
        }
      } catch (err) {
        onError?.(err as Error);
      }
    });

    socket.on("end-call", () => {
      handleEndCall();
    });

    return () => {
      socket.off("offer");
      socket.off("answer");
      socket.off("ice-candidate");
      socket.off("end-call");
    };
  }, [socket, onError]);

  const initializePeerConnection = () => {
    peerConnection.current = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
    });

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket?.emit("ice-candidate", { 
          to: receiverId, 
          candidate: event.candidate 
        });
      }
    };

    peerConnection.current.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    if (localStream.current) {
      localStream.current.getTracks().forEach(track => {
        if (peerConnection.current) {
          peerConnection.current.addTrack(track, localStream.current!);
        }
      });
    }
  };

  const handleStartCall = async () => {
    try {
      // Get local media stream
      localStream.current = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = localStream.current;
      }

      // Initialize WebRTC
      initializePeerConnection();

      // Create and send offer
      const offer = await peerConnection.current!.createOffer();
      await peerConnection.current!.setLocalDescription(offer);
      
      socket?.emit("offer", { to: receiverId, offer });
      setIsInCall(true);
      onCallStarted?.();
    } catch (err) {
      onError?.(err as Error);
    }
  };

  const handleOffer = async (offer: RTCSessionDescriptionInit) => {
    try {
      localStream.current = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = localStream.current;
      }

      initializePeerConnection();
      await peerConnection.current!.setRemoteDescription(new RTCSessionDescription(offer));
    } catch (err) {
      throw err;
    }
  };

  const createAnswer = async () => {
    try {
      const answer = await peerConnection.current!.createAnswer();
      await peerConnection.current!.setLocalDescription(answer);
      return answer;
    } catch (err) {
      throw err;
    }
  };

  const handleEndCall = () => {
    if (localStream.current) {
      localStream.current.getTracks().forEach(track => track.stop());
    }

    if (peerConnection.current) {
      peerConnection.current.close();
    }

    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null;
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }

    socket?.emit("end-call", { to: receiverId });
    setIsInCall(false);
    onCallEnded?.();
  };

  return (
    <div className="video-container">
      <div className="video-header">
        <h3>{isInCall ? `In call with ${receiverName}` : 'Video Call'}</h3>
      </div>
      
      <div className="video-grid">
        <div className="video-wrapper">
          <video ref={localVideoRef} autoPlay playsInline muted />
          <span className="video-label">{userName}</span>
        </div>
        <div className="video-wrapper">
          <video ref={remoteVideoRef} autoPlay playsInline />
          <span className="video-label">{receiverName}</span>
        </div>
      </div>

      <div className="video-controls">
        <button 
          onClick={handleStartCall} 
          disabled={isInCall}
          className="call-button start"
        >
          Start Call
        </button>
        <button 
          onClick={handleEndCall}
          disabled={!isInCall}
          className="call-button end"
        >
          End Call
        </button>
      </div>
    </div>
  );
};