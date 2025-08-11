'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Navbar() {
  const { language, translations, setLanguage } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { id: 'products', title: t.nav.products },
    { id: 'process', title: t.nav.process },
    { id: 'about', title: t.nav.about },
    { id: 'faq', title: t.nav.faq },
  ];


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
  }, [navLinks]);

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
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Globe className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">Change language</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setLanguage('en')}>
                        English
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage('es')}>
                        Español
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          <Button asChild>
            <Link href="#contact" onClick={handleScrollTo('contact')}>{t.nav.contact}</Link>
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
        <div className="md:hidden bg-background/95 backdrop-blur-sm p-4">
          <nav className="flex flex-col items-center gap-4">
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
              <Link href="#contact" onClick={handleScrollTo('contact')}>{t.nav.contact}</Link>
            </Button>
            </nav>
            <div className="mt-4 flex justify-center">
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        <Globe className="mr-2 h-4 w-4" />
                        {language === 'en' ? 'Language' : 'Idioma'}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => { setLanguage('en'); setIsMenuOpen(false); }}>
                        English
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { setLanguage('es'); setIsMenuOpen(false);}}>
                        Español
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </div>
      )}
    </header>
  );
}
