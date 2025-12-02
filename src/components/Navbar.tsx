import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import logo from '../assets/logo-ingenio.PNG';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/90 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="INGENIO Logo"
            style={{
              width: '42px',
              height: '42px',
              objectFit: 'contain',
              borderRadius: '6px',
            }}
          />
          <span className="text-xl font-bold text-brand-dark tracking-tight">
            INGENIO <span className="text-brand-blue">B.I.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-brand-dark hover:text-brand-blue transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-2.5 bg-brand-blue text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
          >
            Empezar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0">
          <div className="flex flex-col p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-brand-dark hover:text-brand-blue font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
               href="#contacto"
               className="text-center px-5 py-3 bg-brand-blue text-white font-medium rounded-lg"
               onClick={() => setIsOpen(false)}
             >
               Empezar ahora
             </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;