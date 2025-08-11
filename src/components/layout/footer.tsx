import React from 'react';
import Link from 'next/link';
import { Globe, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <Globe className="h-7 w-7 text-accent" />
            <span className="text-xl font-bold font-headline text-foreground">
              J&G Exports
            </span>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} J&G Exports. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Exporting Quality from Costa Rica to the World.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
