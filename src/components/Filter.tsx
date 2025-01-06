import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Filter = ({ filters, updateFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const categories = [
    { id: 'all', name: 'Todas las categorías' },
    { id: 'gorras', name: 'Gorras' },
    { id: 'remeras', name: 'Remeras' },
    { id: 'pantalones', name: 'Pantalones' },
    { id: 'chombas', name: 'Chombas' },
    { id: 'bermudas', name: 'Bermudas' },
    { id: 'shorts', name: 'Shorts' },
    { id: 'zapatillas', name: 'Zapatillas' }
  ];

  return (
    <div className="glassmorphism p-4 mb-6 md:mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between md:hidden font-semibold"
      >
        <span>Filtros</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      <div className={`${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
        <h2 className="text-xl font-graffiti mb-6 hidden md:block text-croco-400">Filtros</h2>
        
        <div className="mb-6">
          <label className="block mb-2 font-medium">Categoría</label>
          <select
            value={filters.category}
            onChange={(e) => updateFilters({ category: e.target.value })}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Talle</label>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => updateFilters({ size })}
                className={`p-2 text-center rounded transition-all duration-200 ${
                  filters.size === size 
                    ? 'bg-croco-600 text-white' 
                    : 'bg-gray-800 hover:bg-croco-600/20'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Rango de Precio</label>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) =>
                updateFilters({
                  priceRange: [Number(e.target.value), filters.priceRange[1]],
                })
              }
              className="w-1/2 p-2 bg-gray-800 border border-gray-700 rounded text-white"
              placeholder="Mín"
            />
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) =>
                updateFilters({
                  priceRange: [filters.priceRange[0], Number(e.target.value)],
                })
              }
              className="w-1/2 p-2 bg-gray-800 border border-gray-700 rounded text-white"
              placeholder="Máx"
            />
          </div>
        </div>

        <button
          onClick={() => updateFilters({
            category: 'all',
            size: '',
            priceRange: [0, 100000]
          })}
          className="w-full bg-croco-600 text-white px-4 py-2 rounded hover:bg-croco-700 transition-colors"
        >
          Limpiar Filtros
        </button>
      </div>
    </div>
  );
};

export default Filter;