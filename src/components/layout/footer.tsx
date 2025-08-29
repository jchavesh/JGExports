'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const year = new Date().getFullYear();
  const rightsText = language === 'es' ? `© ${year} J&G Exports. Todos los derechos reservados.` : `© ${year} J&G Exports. All rights reserved.`;
  const subtitleText = language === 'es' ? 'Exportando Calidad desde Costa Rica al Mundo.' : 'Exporting Quality from Costa Rica to the World.';

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image
                src="/images/JGExportsLogo_Horizontal_Verde.png"
                alt="J&G Exports Logo"
                width={150}
                height={42}
                className="h-auto"
              />
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              {rightsText}
            </p>
            <p className="text-sm text-muted-foreground">
              {subtitleText}
            </p>
          </div>
          <div className="flex items-center gap-4">
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
