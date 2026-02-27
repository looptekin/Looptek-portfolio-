// components/ProtectedVideo.jsx
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProtectedVideo = ({ src, className, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('contextmenu', (e) => e.preventDefault());
      video.addEventListener('dragstart', (e) => e.preventDefault());
    }
  }, []);

  const handleContextMenu = (e) => {
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
      <motion.video
        ref={videoRef}
        className={`${className} w-full h-full object-cover`}
        onContextMenu={handleContextMenu}
        onKeyDown={handleKeyDown}
        controls={false}
        loop
        muted
        autoPlay
        playsInline
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        <source src={src} type="video/webm" />
      </motion.video>
      {/* Protection Overlay */}
      <div 
        className="absolute inset-0 bg-transparent"
        onContextMenu={handleContextMenu}
        style={{ userSelect: 'none', pointerEvents: 'none' }}
      />
    </div>
  );
};

export default ProtectedVideo;