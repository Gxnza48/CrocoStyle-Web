import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const ProductList = ({ filters, addToCart, openProductModal }) => {
  const filteredProducts = products.filter((product) => {
    const categoryMatch = filters.category === 'all' || product.category === filters.category;
    const sizeMatch = !filters.size || product.availableSizes.includes(filters.size);
    const priceMatch = 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1];
    
    return categoryMatch && sizeMatch && priceMatch;
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <motion.div
          key={product.id}
          className="glassmorphism p-4 rounded-lg product-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover mb-3 rounded-lg cursor-pointer"
            onClick={() => openProductModal(product)}
          />
          <h2 className="text-base md:text-lg font-semibold mb-1">
            {product.name}
          </h2>
          <p className="text-gray-400 text-sm mb-2">
            Talles: {product.availableSizes.join(', ')}
          </p>
          <p className="text-lg font-bold text-croco-400 mb-3">
            ${product.price.toLocaleString()}
          </p>
          <button
            onClick={() => openProductModal(product)}
            className="w-full bg-croco-600 text-white px-3 py-2 rounded-lg hover:bg-croco-700 transition-colors text-sm"
          >
            Ver Detalles
          </button>
        </motion.div>
      ))}
      
      {filteredProducts.length === 0 && (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-400">No se encontraron productos que coincidan con los filtros seleccionados.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;