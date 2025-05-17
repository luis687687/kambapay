// components/SmokeOverlay.js
import React from 'react';

interface SmokeOverlayInterface {
  height?:string, opacity?:number, flip?:boolean
}
export const SmokeOverlay = ({
  height = '200px', // Altura padrão do efeito
  opacity = 0.8,    // Opacidade máxima do efeito
  flip = false      // Inverter a direção (para cima)
} : SmokeOverlayInterface) => {
  return (
    <div 
      className={`absolute inset-x-0 pointer-events-none ${flip ? 'top-0' : 'bottom-0'}`}
      style={{
        height,
        background: `linear-gradient(${flip ? 'to bottom' : 'to top'}, 
          rgba(255,255,255,${opacity}) 0%, 
          rgba(255,255,255,${opacity * 0.8}) 30%, 
          rgba(255,255,255,${opacity * 0.5}) 60%, 
          rgba(255,255,255,0) 100%)`,
        maskImage: `radial-gradient(ellipse at center, 
          black ${flip ? '0%' : '100%'}, 
          transparent ${flip ? '70%' : '30%'})`,
        WebkitMaskImage: `radial-gradient(ellipse at center, 
          black ${flip ? '0%' : '100%'}, 
          transparent ${flip ? '70%' : '30%'})`,
        zIndex: 10
      }}
    />
  );
};