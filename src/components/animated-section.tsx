'use client';

import React, { useRef } from 'react';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const AnimatedSection = React.forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const internalRef = useRef<HTMLElement>(null);
    // If a ref is forwarded, use it; otherwise, use the internal ref.
    const ref = (forwardedRef as React.RefObject<HTMLElement>) || internalRef;
    const isVisible = useOnScreen(ref);

    return (
      <section
        ref={ref}
        className={cn(
          'transition-all duration-700 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
