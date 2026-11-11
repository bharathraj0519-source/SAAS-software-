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
  delayMultiple = 0.035,
}) => {
  const textContent = word || (typeof children === 'string' ? children : String(children || ''));
  const words = textContent.split(' ');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  let globalCharIndex = 0;

  return (
    <span
      className={`inline-flex flex-wrap justify-center items-baseline gap-x-[0.3em] perspective-[1000px] ${className}`}
      style={{ perspective: '1000px' }}
      aria-label={textContent}
    >
      {words.map((w, wIdx) => {
        const letters = w.split('');
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap">
            {letters.map((char) => {
              const currentIdx = globalCharIndex++;
              return (
                <span
                  key={currentIdx}
                  aria-hidden="true"
                  className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu origin-bottom ${
                    mounted
                      ? 'opacity-100 rotate-x-0 translate-y-0 scale-100'
                      : 'opacity-0 -rotate-x-90 translate-y-3 scale-95'
                  }`}
                  style={{
                    transitionDelay: `${currentIdx * delayMultiple}s`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};

export default FlipText;
