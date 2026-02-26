import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 32 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(50, 50)">
        <path d="M-45 -35 L-5 0 L-45 35 L-20 35 L20 0 L-20 -35 Z" fill="currentColor" />
        <path d="M-45 -35 L-5 0 L-45 35 L-20 35 L20 0 L-20 -35 Z" fill="currentColor" transform="rotate(120)" />
        <path d="M-45 -35 L-5 0 L-45 35 L-20 35 L20 0 L-20 -35 Z" fill="currentColor" transform="rotate(240)" />
      </g>
    </svg>
  );
};

export default Logo;
