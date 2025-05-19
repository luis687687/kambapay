// components/Loading.tsx
"use client";
import { useEffect, useState } from 'react';

export function Loading({
  fullScreen = true,
  loadingText = "Carregando...",
  showProgress = false
}: {
  fullScreen?: boolean;
  loadingText?: string;
  showProgress?: boolean;
}) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (showProgress) {
      const interval = setInterval(() => {
        setProgress(prev => (prev >= 100 ? 0 : prev + 10));
      }, 300);
      return () => clearInterval(interval);
    }
  }, [showProgress]);

  useEffect(() => {
    return () => setIsVisible(false);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${fullScreen ? 'fixed inset-0' : 'relative'} flex items-center justify-center bg-white/90 backdrop-blur-sm transition-opacity duration-300 z-50`}>
      <div className="flex flex-col items-center gap-4">
        {/* Spinner com gradiente e animação */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-purple-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin [border-top-color:oklch(55.55%_0.257_275.75)] [border-bottom-color:oklch(76.45%_0.185_272.77)]"></div>
        </div>

        {/* Texto e barra de progresso */}
        <div className="text-center space-y-3">
          <span className="text-lg font-medium text-gray-700 animate-pulse">
            {loadingText}
          </span>
          
          {showProgress && (
            <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>

        {/* Efeito de partículas */}
        <div className="absolute flex gap-1 -translate-y-8">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 bg-purple-400 rounded-full opacity-0 animate-float"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animationFillMode: 'forwards' 
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}