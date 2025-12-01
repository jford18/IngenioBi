import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Hablemos de su próximo proyecto</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                ¿Listo para transformar sus datos en valor? Nuestro equipo de expertos está preparado para diseñar la solución que su empresa necesita.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-brand-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Email</h4>
                  <p className="text-gray-600">contacto@ingeniobi.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-brand-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Teléfono</h4>
                  <p className="text-gray-600">+34 900 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Oficinas</h4>
                  <p className="text-gray-600">Madrid, España</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-2">Nombre completo</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  placeholder="Juan Pérez"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  placeholder="juan@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">Mensaje</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;