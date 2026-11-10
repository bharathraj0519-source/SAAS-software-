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
      className={`relative inline-flex items-center gap-1.5 p-1.5 rounded-full border border-[rgba(99,203,255,0.25)] bg-[rgba(14,8,40,0.75)] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] overflow-hidden transition-all duration-300 hover:border-[#65ffe3]/50 ${className}`}
    >
      {/* Interactive mouse-following spotlight glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: position.opacity,
          background: `radial-gradient(130px circle at ${position.x}px ${position.y}px, rgba(101, 255, 227, 0.22), rgba(35, 145, 255, 0.12), transparent 75%)`,
        }}
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
              ? 'bg-[#2391FF] text-white shadow-[0_0_16px_rgba(35,145,255,0.6)]'
              : 'text-[#d6d9e4] hover:text-white hover:bg-white/[0.08]'
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default SpotlightNavbar;
