import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  theme?: 'light' | 'dark';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  theme = 'light',
  onClick
}) => {
  let defaultHeight = '54px';
  if (size === 'sm') defaultHeight = '46px';
  if (size === 'lg') defaultHeight = '68px';

  const borderColor = theme === 'dark' ? '#FCD34D' : '#D97706';
  const shadowColor = theme === 'dark' ? 'rgba(252, 211, 77, 0.25)' : 'rgba(217, 119, 6, 0.25)';

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
          border: `1.5px solid ${borderColor}`,
          boxShadow: `0 4px 14px ${shadowColor}`,
          display: 'block',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
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
