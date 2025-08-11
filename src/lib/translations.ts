export const translations = {
  en: {
    nav: {
      products: 'Products',
      process: 'Process',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact Us',
    },
    hero: {
        title: 'From the Heart of Costa Rica to Your Doorstep',
        subtitle: 'J&G Exports is your trusted partner for sourcing the finest coffee, ornamental plants, and cacao directly from the rich soils of Costa Rica.',
        quoteButton: 'Request a Quote',
        exploreButton: 'Explore Products',
    },
    products: {
        title: 'Our Premium Exports',
        subtitle: 'We are committed to quality and sustainability in every product we export.',
        coffeeTitle: 'Specialty Coffee',
        coffeeDescription: 'From the high-altitude volcanic soils of Costa Rica, our single-origin coffee beans offer complex flavors and aromatic profiles. We supply green beans for roasters worldwide.',
        plantsTitle: 'Ornamental Plants',
        plantsDescription: 'A diverse selection of tropical and ornamental plants, cultivated with care to bring a piece of Costa Rican biodiversity to your home, office, or nursery.',
        cacaoTitle: 'Fine Flavor Cacao',
        cacaoDescription: 'Sourced from dedicated farms, our Trinitario cacao beans are perfect for artisanal chocolatiers seeking unique and rich flavor notes for their creations.',
        specSheetButton: 'Request Spec Sheet'
    }
  },
  es: {
    nav: {
      products: 'Productos',
      process: 'Proceso',
      about: 'Nosotros',
      faq: 'Preguntas',
      contact: 'Contáctanos',
    },
    hero: {
        title: 'Del Corazón de Costa Rica a su Puerta',
        subtitle: 'J&G Exports es su socio de confianza para obtener el mejor café, plantas ornamentales y cacao directamente de los ricos suelos de Costa Rica.',
        quoteButton: 'Solicitar Cotización',
        exploreButton: 'Explorar Productos',
    },
    products: {
        title: 'Nuestras Exportaciones Premium',
        subtitle: 'Estamos comprometidos con la calidad y la sostenibilidad en cada producto que exportamos.',
        coffeeTitle: 'Café de Especialidad',
        coffeeDescription: 'De los suelos volcánicos de gran altitud de Costa Rica, nuestros granos de café de origen único ofrecen sabores complejos y perfiles aromáticos. Suministramos granos verdes para tostadores de todo el mundo.',
        plantsTitle: 'Plantas Ornamentales',
        plantsDescription: 'Una diversa selección de plantas tropicales y ornamentales, cultivadas con cuidado para llevar un pedazo de la biodiversidad de Costa Rica a su hogar, oficina o vivero.',
        cacaoTitle: 'Cacao de Sabor Fino',
        cacaoDescription: 'Procedentes de fincas dedicadas, nuestros granos de cacao Trinitario son perfectos para los chocolateros artesanales que buscan notas de sabor únicas y ricas para sus creaciones.',
        specSheetButton: 'Solicitar Ficha Técnica'
    }
  },
};

export type Language = keyof typeof translations;
export type Translation = typeof translations['en'];
