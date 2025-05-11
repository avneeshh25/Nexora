'use client';
import React, { useRef, useEffect, useState } from 'react';

export default function AudioVisualExperience({ 
  className = '', 
  density = 100,
  enableSound = true,
  interactionRadius = 100
}) {
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const particlesRef = useRef([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const isMouseDownRef = useRef(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
  // Initialize audio context
  useEffect(() => {
    if (!enableSound) return;
    
    // Create audio context
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContextRef.current = new AudioContext();
    
    // Create analyzer
    analyserRef.current = audioContextRef.current.createAnalyser();
    analyserRef.current.fftSize = 256;
    
    // Create oscillator for interaction sound
    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(220, audioContextRef.current.currentTime);
    
    gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
    
    oscillator.connect(gainNode);
    gainNode.connect(analyserRef.current);
    analyserRef.current.connect(audioContextRef.current.destination);
    
    oscillator.start();
    
    // Store for cleanup
    return () => {
      if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
      }
      if (gainNode) gainNode.disconnect();
      if (analyserRef.current) analyserRef.current.disconnect();
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
    };
  }, [enableSound]);
  
  // Initialize canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    // Initialize particles function before use
    const initParticles = () => {
      const particles = [];
      const particleCount = density;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `hsla(${Math.random() * 60 + 240}, 80%, 60%, 0.5)`,
          velocity: { x: Math.random() * 0.5 - 0.25, y: Math.random() * 0.5 - 0.25 },
          originalRadius: Math.random() * 2 + 1
        });
      }
      particlesRef.current = particles;
    };

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      // Re-initialize particles when canvas size changes
      initParticles();
    };
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Mouse interaction handlers
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePositionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    
    const handleMouseDown = () => {
      isMouseDownRef.current = true;
      
      // Start audio context on user interaction
      if (enableSound && audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume().then(() => {
          setIsAudioPlaying(true);
        });
      }
    };
    
    const handleMouseUp = () => {
      isMouseDownRef.current = false;
    };
    
    // Touch event handlers
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mousePositionRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        };
      }
    };
    
    const handleTouchStart = (e) => {
      isMouseDownRef.current = true;
      handleTouchMove(e);
      
      // Start audio context on user interaction
      if (enableSound && audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume().then(() => {
          setIsAudioPlaying(true);
        });
      }
    };
    
    const handleTouchEnd = () => {
      isMouseDownRef.current = false;
    };
    
    // Add event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [density, enableSound, interactionRadius]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`w-full h-full ${className}`}
      style={{ touchAction: 'none' }} // Prevent touch scrolling on mobile
    />
  );
}