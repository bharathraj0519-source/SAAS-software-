import React, { useEffect, useState } from 'react';

interface FlipTextProps {
  children?: React.ReactNode;
  word?: string;
  className?: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: any;
}

export const FlipText: React.FC<FlipTextProps> = ({
  children,
  word,
  className = '',
  delayMultiple = 0.04,
}) => {
  const textContent = word || (typeof children === 'string' ? children : String(children || ''));
  const characters = textContent.split('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span
      className={`inline-flex flex-wrap justify-center items-baseline overflow-visible perspective-[1000px] ${className}`}
      style={{ perspective: '1000px' }}
      aria-label={textContent}
    >
      {characters.map((char, index) => {
        const isSpace = char === ' ';
        return (
          <span
            key={index}
            className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu origin-bottom ${
              mounted
                ? 'opacity-100 rotate-x-0 translate-y-0 scale-100'
                : 'opacity-0 -rotate-x-90 translate-y-4 scale-95'
            }`}
            style={{
              transitionDelay: `${index * delayMultiple}s`,
              display: isSpace ? 'inline' : 'inline-block',
              whiteSpace: isSpace ? 'pre' : 'normal',
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default FlipText;
