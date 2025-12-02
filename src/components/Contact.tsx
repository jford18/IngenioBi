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
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Contacto</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ingenio-BI Solutions S.A.S.<br/>
                Guayaquil, Ecuador<br/>
                Calle 4 de Noviembre, 3509<br/>
                Teléfono / WhatsApp: +593 939 967 756<br/>
                Correo: contacto@ingeniobisolutions.com
              </p>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.3899925557463!2d-79.8995663!3d-2.1828024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d434707b7ed%3A0x91a54c2ec1a5f5a1!2sCalle%204%20de%20Noviembre%203509%2C%20Guayaquil%20090105%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1733093512345"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;