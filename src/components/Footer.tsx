import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { LOGO_BASE64 } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-10">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              {/* Using a simpler text representation for footer contrast or filtering the logo if possible, but text is cleaner on dark bg */}
              <div className="h-8 w-8 bg-brand-blue rounded flex items-center justify-center font-bold text-white">I</div>
              <span className="text-xl font-bold tracking-tight text-white">INGENIO B.I.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empoderando empresas a través de la inteligencia de datos y la innovación tecnológica.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Business Intelligence</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Integración de Sistemas</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">ETL Automatizado</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Consultoría</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Compañía</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Términos de uso</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} INGENIO B.I. Solutions. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">Diseñado con precisión.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;