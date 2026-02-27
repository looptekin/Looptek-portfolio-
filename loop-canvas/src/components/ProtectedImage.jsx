// components/ProtectedImage.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const ProtectedImage = ({ src, alt, className, ...props }) => {
  const imageRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    return false;
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      return false;
    }
  };

  return (
    <div className="relative group overflow-hidden rounded-lg">
      <motion.img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`${className} w-full h-full object-cover`}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        onKeyDown={handleKeyDown}
        draggable={false}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        {...props}
      />
      {/* Protection Overlay */}
      <div 
        className="absolute inset-0 bg-transparent"
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        style={{ userSelect: 'none' }}
      />
    </div>
  );
};

export default ProtectedImage;