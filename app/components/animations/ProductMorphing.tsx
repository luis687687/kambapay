"use client"
// components/ProductMorphing.js
import { useEffect, useRef, useState } from 'react';

export function ProductMorphing() {
  const svgRef = useRef(null);
  const [currentProduct, setCurrentProduct] = useState(0);

  // Produtos e seus paths SVG
  const products = [
    {
      name: "Smartphone",
      path: "M100 50H300V250H100V50ZM125 75V100H150V75H125ZM175 75V100H200V75H175ZM225 75V100H250V75H225ZM125 225V200H150V225H125ZM175 225V200H200V225H175ZM225 225V200H250V225H225Z",
      color: "#3b82f6"
    },
    {
      name: "Notebook",
      path: "M50 150L200 50L350 150V250H50V150ZM150 175V200H250V175H150Z",
      color: "#10b981"
    },
    {
      name: "Smartwatch",
      path: "M200 100C145 100 100 145 100 200C100 255 145 300 200 300C255 300 300 255 300 200C300 145 255 100 200 100ZM200 125C240 125 275 160 275 200C275 240 240 275 200 275C160 275 125 240 125 200C125 160 160 125 200 125Z",
      color: "#f59e0b"
    },
    {
      name: "Fones de Ouvido",
      path: "M100 200C100 160 130 130 170 130C180 130 190 132 200 135V265C190 268 180 270 170 270C130 270 100 240 100 200ZM300 200C300 160 270 130 230 130C220 130 210 132 200 135V265C210 268 220 270 230 270C270 270 300 240 300 200Z",
      color: "#ef4444"
    },
    {
      name: "Tablet",
      path: "M75 75H325V275H75V75ZM100 100V125H150V100H100ZM175 100V125H225V100H175ZM275 100V125H300V100H275ZM100 250V225H150V250H100ZM175 250V225H225V250H175ZM275 250V225H300V250H275Z",
      color: "#8b5cf6"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <svg 
        ref={svgRef} 
        viewBox="0 0 400 400" 
        className="w-full h-auto"
      >
        {/* Elemento principal que fará o morphing */}
        <path
          d={products[currentProduct].path}
          fill={products[currentProduct].color}
          fillOpacity="0.8"
        >
          <animate
            attributeName="d"
            values={products.map(p => p.path).join(';')}
            keyTimes={products.map((_, i) => i/(products.length-1)).join(';')}
            dur={`${products.length * 4}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
          />
          <animate
            attributeName="fill"
            values={products.map(p => p.color).join(';')}
            keyTimes={products.map((_, i) => i/(products.length-1)).join(';')}
            dur={`${products.length * 4}s`}
            repeatCount="indefinite"
          />
        </path>

        {/* Efeito de "gosma" - partículas que se movem */}
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 400}
            cy={Math.random() * 400}
            r={Math.random() * 5 + 2}
            fill={products[currentProduct].color}
            fillOpacity="0.6"
          >
            <animate
              attributeName="cx"
              values={`${Math.random() * 400}; ${Math.random() * 400}`}
              dur={`${Math.random() * 3 + 2}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values={`${Math.random() * 400}; ${Math.random() * 400}`}
              dur={`${Math.random() * 4 + 3}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values={`${Math.random() * 3 + 1}; ${Math.random() * 5 + 2}`}
              dur={`${Math.random() * 2 + 1}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Texto com o nome do produto atual */}
        <text
          x="200"
          y="350"
          textAnchor="middle"
          fontSize="24"
          fill="#333"
          fontWeight="bold"
        >
          {products[currentProduct].name}
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.9;1"
            dur={`${products.length * 4}s`}
            repeatCount="indefinite"
          />
        </text>
      </svg>
    </div>
  );
}