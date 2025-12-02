import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-brand-blue text-xs font-bold tracking-wider uppercase mb-6 border border-blue-100">
              Transformación Digital e Inteligencia de Negocios
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-tight mb-8">
              Inteligencia de Negocios, Integraciones y Soluciones Tecnológicas
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Somos Ingenio-BI Solutions S.A.S., una empresa ecuatoriana especializada en Business Intelligence, integración de sistemas, automatización, desarrollo web y analítica corporativa. Ayudamos a empresas a transformar sus datos en decisiones inteligentes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contacto"
                className="w-full sm:w-auto px-8 py-4 bg-brand-blue text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group"
              >
                Solicitar Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicios"
                className="w-full sm:w-auto px-8 py-4 bg-white text-brand-blue border border-brand-blue/20 rounded-lg font-semibold hover:border-brand-blue hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
              >
                Conocer más
                <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;