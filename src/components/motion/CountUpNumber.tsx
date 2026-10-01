import React, { useEffect, useRef, useState } from 'react';

interface CountUpNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const CountUpNumber: React.FC<CountUpNumberProps> = ({
  value,
  duration = 1800,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic curve
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const current = easeOutProgress * value;

            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  const formatted = displayValue.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};
