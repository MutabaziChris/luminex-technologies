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
  let defaultHeight = '54px';
  if (size === 'sm') defaultHeight = '46px';
  if (size === 'lg') defaultHeight = '68px';

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
        className="brand-logo-img"
        style={{
          height: defaultHeight,
          width: 'auto',
          objectFit: 'contain',
          borderRadius: '10px',
          border: '2px solid #D97706',
          boxShadow: '0 4px 18px rgba(217, 119, 6, 0.35)',
          display: 'block'
        }}
      />
      <style>{`
        @media (max-width: 480px) {
          .brand-logo-img {
            height: 38px !important;
          }
        }
      `}</style>
    </div>
  );
};
