import React from 'react';

const CLIENT_NAMES = ['TechCorp', 'GlobalLogistics', 'FinSecure', 'RetailGiant', 'DataFlow', 'InnovateSys'];

const Clients: React.FC = () => {
  return (
    <section id="clientes" className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
           {/* Since we don't have real logos, we use styled placeholders */}
           {CLIENT_NAMES.map((name, index) => (
             <div key={index} className="flex items-center gap-2 group cursor-default">
               <div className="w-8 h-8 rounded-full bg-gray-200 group-hover:bg-brand-blue/20 transition-colors" />
               <span className="text-xl font-bold text-gray-400 group-hover:text-brand-dark transition-colors">{name}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;