import React from 'react';
import { SOLUTIONS } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <section id="soluciones" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-2 block">Casos de Éxito</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Soluciones Implementadas</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-blue font-semibold hover:text-blue-700 transition-colors">
            Ver todos los casos <ExternalLink size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-brand-blue/0 transition-colors z-10" />
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-2 block">
                  {solution.category}
                </span>
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">Resultados verificados</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-blue-700 transition-colors">
            Ver todos los casos <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;