import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Package, Shield, Heart } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glassmorphism p-8 rounded-lg urban-border">
        <h1 className="text-4xl font-graffiti mb-6 text-croco-400">Acerca de Croco-Style</h1>
        <div className="space-y-6">
          <p className="text-lg">
            Fundada en 2023 por Adrián Dalzotto en Chajarí, Entre Ríos, Croco-Style nació de una pasión por la moda vintage y la cultura urbana. Nos especializamos en curar prendas vintage premium que cuentan una historia y preservan el legado de casas de moda icónicas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-graffiti text-croco-400">Nuestra Visión</h2>
              <p>
                En Croco-Style, creemos que la moda vintage es mucho más que ropa: es un puente entre épocas, una declaración de individualidad y una elección sostenible para el consumidor consciente. Cada pieza de nuestra colección es cuidadosamente seleccionada para cumplir con nuestros altos estándares de calidad y autenticidad.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-graffiti text-croco-400">La Diferencia Croco-Style</h2>
              <p>
                Lo que nos distingue es nuestro compromiso con la autenticidad y la calidad. Cada artículo en nuestra colección está verificado para garantizar su autenticidad y condición, asegurando que recibas piezas vintage genuinas en excelente estado.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-4 glassmorphism rounded-lg urban-border">
              <Clock size={32} className="mx-auto mb-4 text-croco-400" />
              <h3 className="font-graffiti mb-2">Estilo Atemporal</h3>
              <p className="text-sm">Prendas vintage seleccionadas que nunca pasan de moda</p>
            </div>
            
            <div className="text-center p-4 glassmorphism rounded-lg urban-border">
              <Package size={32} className="mx-auto mb-4 text-croco-400" />
              <h3 className="font-graffiti mb-2">Calidad Premium</h3>
              <p className="text-sm">Ropa vintage auténtica cuidadosamente seleccionada</p>
            </div>
            
            <div className="text-center p-4 glassmorphism rounded-lg urban-border">
              <Shield size={32} className="mx-auto mb-4 text-croco-400" />
              <h3 className="font-graffiti mb-2">Autenticidad</h3>
              <p className="text-sm">Piezas vintage garantizadas como auténticas</p>
            </div>
            
            <div className="text-center p-4 glassmorphism rounded-lg urban-border">
              <Heart size={32} className="mx-auto mb-4 text-croco-400" />
              <h3 className="font-graffiti mb-2">Moda Sostenible</h3>
              <p className="text-sm">Apoyando la moda circular a través de lo vintage</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-graffiti mb-6 text-croco-400">Marcas Destacadas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Tommy Hilfiger', 'Polo Ralph Lauren', 'Carhartt', 'Polo Bear', 'Nautica'].map((brand) => (
                <div key={brand} className="p-4 glassmorphism rounded-lg urban-border text-center">
                  <p className="font-graffiti text-croco-400">{brand}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-graffiti mb-6 text-croco-400">Visítanos</h2>
            <p>
              Vive la experiencia Croco-Style en nuestra tienda en Chajarí, Entre Ríos, o compra nuestra colección curada en línea. Únete a nosotros para celebrar el atractivo atemporal de la moda vintage y el estilo urbano.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
