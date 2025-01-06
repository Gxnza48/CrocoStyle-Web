import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ImagePreview from './modal/ImagePreview';
import ProductImages from './modal/ProductImages';
import type { Product } from '../data/products';

interface ProductModalProps {
  product: Product;
  closeModal: () => void;
  addToCart: (product: Product & { size: string; cartId: number }) => void;
}

const ProductModal = ({ product, closeModal, addToCart }: ProductModalProps) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      size: selectedSize,
      cartId: Date.now()
    });
    closeModal();
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="glassmorphism w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <X size={24} />
          </button>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProductImages
                mainImage={product.image}
                additionalImages={product.additionalImages || []}
                onImageClick={(image) => setPreviewImage(image)}
              />

              <div className="space-y-4">
                <p className="text-gray-300">{product.brand}</p>

                <div>
                  <label className="block mb-2">Talle:</label>
                  <div className="grid grid-cols-4 gap-2">
                    {product.availableSizes.map((size) => (
                      <motion.button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`p-2 rounded-lg transition-colors ${
                          selectedSize === size
                            ? 'bg-croco-600 text-white'
                            : 'bg-gray-800 hover:bg-gray-700'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {size}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <p className="text-2xl font-bold">
                  ${product.price.toLocaleString()} ARS
                </p>

                <p className="text-gray-300">{product.description}</p>

                <div className="space-y-2">
                  <h3 className="font-semibold">Características:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {product.features?.map((feature, index) => (
                      <li key={index} className="text-gray-300">{feature}</li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  onClick={handleAddToCart}
                  className="w-full bg-croco-600 text-white px-6 py-3 rounded-lg hover:bg-croco-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Agregar al Carrito
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {previewImage && (
        <ImagePreview
          src={previewImage}
          alt={product.name}
          onClose={() => setPreviewImage(null)}
        />
      )}
    </>
  );
};

export default ProductModal;