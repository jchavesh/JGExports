'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useOnScreen } from '@/hooks/use-on-screen';

interface AnimatedCounterProps {
  targetValue: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ targetValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = targetValue;
      if (start === end) return;

      const incrementTime = (duration / end);
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, targetValue, duration]);

  return <span ref={ref}>{count}</span>;
};

export default AnimatedCounter;
