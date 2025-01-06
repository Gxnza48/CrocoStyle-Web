import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImagePreviewProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImagePreview = ({ src, alt, onClose }: ImagePreviewProps) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const newScale = scale + (e.deltaY > 0 ? -0.1 : 0.1);
    setScale(Math.min(Math.max(1, newScale), 3));
  };

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  const handleDrag = (event: any, info: any) => {
    if (scale > 1) {
      setPosition({
        x: position.x + info.delta.x,
        y: position.y + info.delta.y,
      });
    }
  };

  const handleDoubleTap = () => {
    if (scale > 1) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      setScale(2);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center touch-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => {
          if (!isDragging) onClose();
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-gray-800 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <motion.div
          className="relative w-full h-full flex items-center justify-center overflow-hidden"
          onWheel={handleWheel}
        >
          <motion.div
            className="relative cursor-grab active:cursor-grabbing"
            drag={scale > 1}
            dragConstraints={{
              left: -1000,
              right: 1000,
              top: -1000,
              bottom: 1000,
            }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDrag={handleDrag}
            style={{
              touchAction: "none",
            }}
          >
            <motion.img
              src={src}
              alt={alt}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg select-none"
              layoutId={`product-image-${src}`}
              style={{
                scale,
                x: position.x,
                y: position.y,
              }}
              onDoubleClick={handleDoubleTap}
              onTouchStart={(e) => {
                if (e.touches.length === 2) {
                  handleDoubleTap();
                }
              }}
              onClick={(e) => e.stopPropagation()}
              drag={false}
            />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => {
                setScale(Math.max(1, scale - 0.5));
                if (scale <= 1.5) setPosition({ x: 0, y: 0 });
              }}
              className="p-1 hover:bg-gray-800 rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm">{Math.round(scale * 100)}%</span>
            <button
              onClick={() => setScale(Math.min(3, scale + 0.5))}
              className="p-1 hover:bg-gray-800 rounded-full transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImagePreview;