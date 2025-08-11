'use client';

import { useState, useEffect, RefObject } from 'react';

export function useOnScreen(ref: RefObject<Element>, rootMargin = '0px'): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setIntersecting(entry.isIntersecting);
            if(ref.current) {
                observer.unobserve(ref.current);
            }
        }
      },
      {
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}
