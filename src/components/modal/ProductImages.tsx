import React from 'react';
import { motion } from 'framer-motion';

interface ProductImagesProps {
  mainImage: string;
  additionalImages: string[];
  onImageClick: (image: string) => void;
}

const ProductImages = ({ mainImage, additionalImages = [], onImageClick }: ProductImagesProps) => {
  return (
    <div className="space-y-4">
      <motion.div 
        className="relative aspect-square rounded-lg overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", damping: 25, stiffness: 400 }}
      >
        <motion.img
          src={mainImage}
          alt="Product main"
          className="w-full h-full object-cover cursor-zoom-in"
          onClick={() => onImageClick(mainImage)}
          layoutId={`product-image-${mainImage}`}
        />
      </motion.div>
      
      <div className="grid grid-cols-3 gap-2">
        {additionalImages.map((img, index) => (
          <motion.div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
          >
            <motion.img
              src={img}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover cursor-zoom-in"
              onClick={() => onImageClick(img)}
              layoutId={`product-image-${img}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;