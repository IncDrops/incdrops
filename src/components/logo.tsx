import * as React from 'react';

const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 140 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="metallic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(220, 85%, 75%)', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <text
      x="0"
      y="25"
      fontFamily="'Space Grotesk', sans-serif"
      fontSize="30"
      fontWeight="bold"
      fill="url(#metallic-gradient)"
    >
      IncDrops
    </text>
  </svg>
);

export default Logo;
