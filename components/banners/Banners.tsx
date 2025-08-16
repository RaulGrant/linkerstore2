import React from 'react';

const Banners: React.FC = () => (
  <div className="flex flex-col md:flex-row gap-4 mb-6">
    <div className="flex-1 bg-gradient-to-r from-blue-100 to-blue-300 rounded-xl p-4 shadow">
      <h3 className="font-bold text-lg mb-1">Cursos recomendados</h3>
      <p className="text-sm text-gray-700">Accede a cursos para mejorar tus habilidades y crecer profesionalmente.</p>
      <button className="btn btn-primary mt-2">Ver cursos</button>
    </div>
    <div className="flex-1 bg-gradient-to-r from-pink-100 to-pink-300 rounded-xl p-4 shadow">
      <h3 className="font-bold text-lg mb-1">Tienda de recursos</h3>
      <p className="text-sm text-gray-700">Encuentra plantillas, herramientas y más en nuestra tienda.</p>
      <button className="btn btn-secondary mt-2">Ir a la tienda</button>
    </div>
  </div>
);

export default Banners;
