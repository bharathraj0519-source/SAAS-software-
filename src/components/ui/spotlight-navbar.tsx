import React, { useRef, useState } from 'react';

export interface SpotlightNavbarItem {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

interface SpotlightNavbarProps {
  items: SpotlightNavbarItem[];
  className?: string;
}

export const SpotlightNavbar: React.FC<SpotlightNavbarProps> = ({ items, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 0,
    y: 0,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center gap-1.5 p-1.5 rounded-full border border-[rgba(124,124,124,0.25)] bg-white/95 backdrop-blur-xl shadow-sm overflow-hidden transition-all duration-300 hover:border-[#cf5c36]/50 ${className}`}
    >
      {/* Interactive mouse-following warm subtle spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: position.opacity,
          background: `radial-gradient(130px circle at ${position.x}px ${position.y}px, rgba(207, 92, 54, 0.14), rgba(239, 200, 139, 0.18), transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.href || '#'}
          onClick={(e) => {
            if (item.onClick) {
              e.preventDefault();
              item.onClick();
            }
          }}
          className={`relative z-10 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide font-['Barlow'] transition-all duration-200 cursor-pointer ${
            item.active
              ? 'bg-[#cf5c36] text-white shadow-sm'
              : 'text-[#7c7c7c] hover:text-[#000000] hover:bg-black/5'
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default SpotlightNavbar;
