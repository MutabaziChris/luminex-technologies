import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  theme?: 'light' | 'dark';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  onClick
}) => {
  let height = '54px';
  if (size === 'sm') height = '48px';
  if (size === 'lg') height = '68px';

  return (
    <div
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        cursor: onClick ? 'pointer' : 'default'
      }}
      title="Luminex Technologies — Intelligent Software. Lasting Impact."
    >
      <img
        src="/luminex-logo-exact.png"
        alt="Luminex Technologies Logo"
        style={{
          height: height,
          width: 'auto',
          objectFit: 'contain',
          borderRadius: '12px',
          border: '2px solid #D97706',
          boxShadow: '0 4px 20px rgba(217, 119, 6, 0.35)',
          display: 'block'
        }}
      />
    </div>
  );
};
