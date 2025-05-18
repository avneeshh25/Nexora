import { io, Socket } from 'socket.io-client';
import 'webrtc-adapter';

export interface VideoCallConfig {
  userId: string;
  serverUrl: string; // Make this required since io() needs it
  onCallEnded?: () => void;
  onCallReceived?: (callerId: string) => void; // This is used but was missing
}

export class VideoService {
  private socket: Socket | null = null;
  private peerConnection: RTCPeerConnection | null = null;
  private config: VideoCallConfig;
  private localStream: MediaStream | null = null;
  private remoteStream: MediaStream | null = null;

  constructor(config: VideoCallConfig) {
    this.config = config;
    this.initialize();
  }

  private initialize() {
    this.socket = io(this.config.serverUrl);
    
    this.socket.on('connect', () => {
      this.socket?.emit('register', this.config.userId);
    });

    this.socket.on('call-received', (callerId: string) => {
      this.config.onCallReceived?.(callerId);
    });

    this.socket.on('call-ended', () => {
      this.endCall();
      this.config.onCallEnded?.();
    });

    this.socket.on('offer', async ({ offer, callerId }) => {
      await this.handleOffer(offer, callerId);
    });

    this.socket.on('answer', async ({ answer }) => {
      await this.handleAnswer(answer);
    });

    this.socket.on('ice-candidate', async ({ candidate }) => {
      await this.handleIceCandidate(candidate);
    });
  }

  private async setupPeerConnection() {
    this.peerConnection = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    });

    this.peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        this.socket?.emit('ice-candidate', { candidate: event.candidate });
      }
    };

    this.peerConnection.ontrack = (event) => {
      this.remoteStream = event.streams[0];
    };

    if (this.localStream) {
      this.localStream.getTracks().forEach(track => {
        this.peerConnection?.addTrack(track, this.localStream!);
      });
    }
  }

  public async startCall(receiverId: string): Promise<void> {
    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      await this.setupPeerConnection();
      const offer = await this.peerConnection!.createOffer();
      await this.peerConnection!.setLocalDescription(offer);

      this.socket?.emit('call-user', {
        receiverId,
        offer
      });
    } catch (error) {
      console.error('Error starting call:', error);
      throw error;
    }
  }

  private async handleOffer(offer: RTCSessionDescriptionInit, callerId: string) {
    try {
      await this.setupPeerConnection();
      await this.peerConnection!.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await this.peerConnection!.createAnswer();
      await this.peerConnection!.setLocalDescription(answer);

      this.socket?.emit('answer', {
        callerId,
        answer
      });
    } catch (error) {
      console.error('Error handling offer:', error);
    }
  }

  private async handleAnswer(answer: RTCSessionDescriptionInit) {
    try {
      await this.peerConnection?.setRemoteDescription(new RTCSessionDescription(answer));
    } catch (error) {
      console.error('Error handling answer:', error);
    }
  }

  private async handleIceCandidate(candidate: RTCIceCandidateInit) {
    try {
      await this.peerConnection?.addIceCandidate(new RTCIceCandidate(candidate));
    } catch (error) {
      console.error('Error handling ICE candidate:', error);
    }
  }

  public endCall(): void {
    this.localStream?.getTracks().forEach(track => track.stop());
    this.peerConnection?.close();
    this.socket?.emit('end-call');
    this.localStream = null;
    this.remoteStream = null;
    this.peerConnection = null;
  }

  public getLocalStream(): MediaStream | null {
    return this.localStream;
  }

  public getRemoteStream(): MediaStream | null {
    return this.remoteStream;
  }

  public disconnect(): void {
    this.endCall();
    this.socket?.disconnect();
    this.socket = null;
  }
}