import React from 'react';

const CLIENTS = [
  {
    name: 'FarmCorp',
    description: '(proyectos de automatización y analítica)',
    logo: 'https://farmcorp.com.ec/wp-content/uploads/2024/09/Grupo-4-1.svg',
    alt: 'Corporación Farmacéutica Farmcorp S.A.',
  },
  {
    name: 'SW SecurityWorld',
    description: '(portal web + panel administrativo)',
    logo: 'http://www.swsecurityworld.com/wp-content/uploads/2018/08/Security-World-logo-1.png',
    alt: 'SW Security World Logo',
  },
];

const Clients: React.FC = () => {
  return (
    <section id="clientes" className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-60">
          {CLIENTS.map((client, index) => (
            <div
              key={index}
              className="w-full max-w-xs sm:w-60 md:w-64 bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col items-center gap-3 text-center"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.alt ?? client.name}
                  className="h-12 md:h-14 object-contain mx-auto"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200" />
              )}
              <div>
                <p className="text-lg font-bold text-gray-500">{client.name}</p>
                <p className="text-sm text-gray-400">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
