import React from 'react';
import { Hexagon } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils'; // Importa nuestra utilidad de clases

// Definimos los links para no repetirlos
const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

// El componente ahora recibe la sección activa
const Header = ({ activeSection }: { activeSection: string }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Hexagon className="w-6 h-6 text-yellow-500" />
          <span className="font-bold text-xl">BeeHive</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={cn(
                'hover:text-black transition-colors',
                // Si la sección activa coincide con el href, aplica este estilo
                activeSection === link.href.substring(1) && 'text-yellow-600 font-bold'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  );
};

export default Header;