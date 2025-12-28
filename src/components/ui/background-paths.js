"use client";

export const BackgroundPaths = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 102, 85, 0.4)" />
              <stop offset="50%" stopColor="rgba(34, 197, 94, 0.4)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
            </linearGradient>
          </defs>
          
          <path
            d="M0,200 Q250,100 500,200 T1000,200"
            stroke="url(#path-gradient)"
            strokeWidth="4"
            fill="none"
            opacity="0.8"
          >
            <animate
              attributeName="d"
              values="M0,200 Q250,100 500,200 T1000,200;M0,250 Q250,150 500,250 T1000,250;M0,200 Q250,100 500,200 T1000,200"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          
          <path
            d="M0,400 Q250,300 500,400 T1000,400"
            stroke="url(#path-gradient)"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              values="M0,400 Q250,300 500,400 T1000,400;M0,350 Q250,250 500,350 T1000,350;M0,400 Q250,300 500,400 T1000,400"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          
          <path
            d="M0,600 Q250,500 500,600 T1000,600"
            stroke="url(#path-gradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              values="M0,600 Q250,500 500,600 T1000,600;M0,650 Q250,550 500,650 T1000,650;M0,600 Q250,500 500,600 T1000,600"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};