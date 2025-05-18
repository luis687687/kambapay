"use client";
// components/FloatingParticles.js
import { useEffect, useRef } from 'react';

interface FloatingParticlesProps {
  particleCount?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  speed?: number;
}



export function FloatingParticles({ 
  particleCount = 30,
  colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  minSize = 1,
  maxSize = 5,
  speed = 2 
} : FloatingParticlesProps) {
  const svgRef = useRef(null);

  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden pointer-events-none">
      <svg 
        ref={svgRef} 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        {[...Array(particleCount)].map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const duration = Math.random() * (20 - 10) + 10;
          const delay = Math.random() * 5;
          const size = Math.random() * (maxSize - minSize) + minSize;
          const color = colors[Math.floor(Math.random() * colors.length)];

          return (
            <circle
              key={i}
              cx={startX}
              cy={startY}
              r={size}
              fill={color}
              opacity="1"
            >
              {/* Animação horizontal */}
              <animate
                attributeName="cx"
                values={`${startX}; ${startX + (Math.random() * 30 - 15)}; ${startX}`}
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              {/* Animação vertical */}
              <animate
                attributeName="cy"
                values={`${startY}; ${startY + (Math.random() * 20 - 10)}; ${startY}`}
                dur={`${duration * 1.3}s`}
                begin={`${delay * 1.5}s`}
                repeatCount="indefinite"
              />
              {/* Animação de opacidade */}
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur={`${duration * 0.7}s`}
                begin={`${delay * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>
    </div>
  );
};