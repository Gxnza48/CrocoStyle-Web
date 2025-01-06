import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="glassmorphism p-8 rounded-lg text-center urban-border"
        variants={itemVariants}
      >
        <h1 className="text-5xl font-graffiti mb-4 text-croco-400">
          Bienvenido a CrocoStyle
        </h1>
        <p className="text-xl mb-8 font-body">
          Ropa Vintage | Estilo Atemporal | Cultura Urbana
        </p>
        <Link
          to="/products"
          className="gradient-button text-white px-8 py-4 rounded-full inline-flex items-center text-lg font-semibold hover:shadow-lg transition-all duration-300"
        >
          Explorar Colección
          <ArrowRight className="ml-2" />
        </Link>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="glassmorphism p-6 rounded-lg urban-border product-card"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-graffiti mb-4 text-croco-400 flex items-center">
            <Sparkles className="mr-2" /> Marcas Premium
          </h2>
          <p>Selección curada de casas de moda vintage icónicas.</p>
        </motion.div>
        <motion.div
          className="glassmorphism p-6 rounded-lg urban-border product-card"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-graffiti mb-4 text-croco-400 flex items-center">
            <Sparkles className="mr-2" /> Estilo Urbano
          </h2>
          <p>Donde la cultura urbana se encuentra con la moda de lujo.</p>
        </motion.div>
        <motion.div
          className="glassmorphism p-6 rounded-lg urban-border product-card"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-graffiti mb-4 text-croco-400 flex items-center">
            <Sparkles className="mr-2" /> Ediciones Limitadas
          </h2>
          <p>Piezas vintage exclusivas lanzadas semanalmente.</p>
        </motion.div>
      </div>

      <motion.div className="mt-16" variants={itemVariants}>
        <h2 className="text-3xl font-graffiti mb-8 text-center text-croco-400">
          Colecciones Destacadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glassmorphism p-4 rounded-lg urban-border product-card">
            <img
              src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="Chaquetas Vintage"
              className="w-full aspect-square object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-graffiti mb-2 text-croco-400">
              Chaquetas Vintage
            </h3>
            <p className="text-gray-300 mb-4">
              Piezas clásicas que definen el estilo
            </p>
            <Link
              to="/products?category=jackets"
              className="text-croco-400 hover:text-croco-300 transition-colors"
            >
              Ver Colección →
            </Link>
          </div>
          <div className="glassmorphism p-4 rounded-lg urban-border product-card">
            <img
              src="https://images.unsplash.com/photo-1626497764746-6dc36546b388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80"
              alt="Ropa Urbana"
              className="w-full aspect-square object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-graffiti mb-2 text-croco-400">
              Ropa Urbana
            </h3>
            <p className="text-gray-300 mb-4">
              Lo contemporáneo se encuentra con lo vintage
            </p>
            <Link
              to="/products?category=streetwear"
              className="text-croco-400 hover:text-croco-300 transition-colors"
            >
              Ver Colección →
            </Link>
          </div>
          <div className="glassmorphism p-4 rounded-lg urban-border product-card">
            <img
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="Esenciales Premium"
              className="w-full aspect-square object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-graffiti mb-2 text-croco-400">
              Esenciales Premium
            </h3>
            <p className="text-gray-300 mb-4">
              Básicos atemporales para tu guardarropa
            </p>
            <Link
              to="/products?category=essentials"
              className="text-croco-400 hover:text-croco-300 transition-colors"
            >
              Ver Colección →
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div className="mt-16 text-center" variants={itemVariants}>
        <h2 className="text-3xl font-graffiti mb-8 text-croco-400">
          Marcas Destacadas
        </h2>
        <div className="flex justify-center space-x-8 flex-wrap">
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/994/250/non_2x/tommy-hilfiger-logo-symbol-red-and-blue-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg"
            alt="Tommy Hilfiger"
            className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/867/289/non_2x/polo-ralph-lauren-brand-logo-white-symbol-clothes-design-icon-abstract-illustration-with-blue-background-free-vector.jpg"
            alt="Ralph Lauren"
            className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="https://inkbotdesign.com/wp-content/uploads/2024/10/carhartt-logo-design-font.webp"
            alt="Carhartt"
            className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
