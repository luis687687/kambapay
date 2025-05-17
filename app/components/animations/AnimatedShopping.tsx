// components/AnimatedShopping.js
export function AnimatedShopping() {
  return (
    <svg className="w-full h-auto max-w-md" viewBox="0 0 400 300" fill="none">
      {/* Fundo do carrinho (estático) */}
      <path 
        d="M100 200L50 50H350L300 200H100Z" 
        fill="#f3f4f6" 
        stroke="#d1d5db" 
        strokeWidth="2"
      />
      
      {/* Rodas do carrinho (animadas) */}
      <circle cx="120" cy="220" r="20" fill="#e5e7eb">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 120 220"
          to="360 120 220"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="280" cy="220" r="20" fill="#e5e7eb">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="360 280 220"
          to="0 280 220"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Pacotes que "entram" no carrinho */}
      <rect x="400" y="150" width="40" height="40" fill="#3b82f6" rx="4">
        <animate
          attributeName="x"
          values="400; 300; 250; 200; 150; 100; -50"
          keyTimes="0; 0.1; 0.2; 0.3; 0.4; 0.5; 1"
          dur="8s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="450" y="130" width="50" height="60" fill="#60a5fa" rx="4">
        <animate
          attributeName="x"
          values="450; 350; 300; 250; 200; 150; -50"
          keyTimes="0; 0.2; 0.3; 0.4; 0.5; 0.6; 1"
          dur="10s"
          repeatCount="indefinite"
          begin="1s"
        />
      </rect>
      <rect x="500" y="140" width="30" height="50" fill="#93c5fd" rx="4">
        <animate
          attributeName="x"
          values="500; 400; 350; 300; 250; 200; -50"
          keyTimes="0; 0.3; 0.4; 0.5; 0.6; 0.7; 1"
          dur="12s"
          repeatCount="indefinite"
          begin="2s"
        />
      </rect>
    </svg>
  )
}