'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { id: 'products', title: 'Products' },
  { id: 'process', title: 'Process' },
  { id: 'about', title: 'About' },
  { id: 'faq', title: 'FAQ' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const createObserver = useCallback(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.current?.observe(el);
      }
    });
  }, []);

  useEffect(() => {
    createObserver();
    return () => observer.current?.disconnect();
  }, [createObserver]);


  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Globe className="h-7 w-7 text-accent" />
          <span className="text-xl font-bold font-headline text-foreground">
            J&G Exports
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={handleScrollTo(link.id)}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                activeSection === link.id ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link href="#contact" onClick={handleScrollTo('contact')}>Contact Us</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={handleScrollTo(link.id)}
                className={cn(
                  'text-lg font-medium transition-colors hover:text-primary',
                  activeSection === link.id ? 'text-primary' : 'text-foreground'
                )}
              >
                {link.title}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="#contact" onClick={handleScrollTo('contact')}>Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
