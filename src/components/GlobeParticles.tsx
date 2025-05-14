
import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
}

const GlobeParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles
    const particles: Particle[] = [];
    const particleCount = 800;
    const radius = Math.min(canvas.width, canvas.height) * 0.35;
    const colors = ['#0a4b8c', '#05b2dc', '#2176ff', '#ffffff'];
    
    for (let i = 0; i < particleCount; i++) {
      // Distribute particles in a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      particles.push({
        x,
        y,
        z,
        size: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    // Animation variables
    let angle = 0;
    const rotationSpeed = 0.003;
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Sort particles by z-index for depth effect
      const sortedParticles = [...particles].sort((a, b) => a.z - b.z);
      
      // Render particles
      sortedParticles.forEach(particle => {
        // Apply rotation to x and z coordinates
        const rotX = particle.x * Math.cos(angle) - particle.z * Math.sin(angle);
        const rotZ = particle.z * Math.cos(angle) + particle.x * Math.sin(angle);
        
        // Project 3D point to 2D surface with perspective
        const perspective = 800;
        const depth = perspective / (perspective - rotZ);
        
        const projectedX = canvas.width / 2 + rotX * depth;
        const projectedY = canvas.height / 2 + particle.y * depth;
        
        // Calculate opacity based on z position
        const opacity = (rotZ + radius) / (radius * 2);
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, particle.size * depth, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      
      // Update rotation angle
      angle += rotationSpeed;
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full absolute inset-0 z-0 opacity-80"
      style={{ background: 'transparent' }}
    />
  );
};

export default GlobeParticles;
