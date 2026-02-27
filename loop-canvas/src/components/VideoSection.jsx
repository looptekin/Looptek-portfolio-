// components/VideoSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProtectedVideo from './ProtectedVideo';

const VideoSection = ({ src, title, description }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl">
      <ProtectedVideo
        src={src}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent flex items-end p-6"
      >
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </motion.div>

      {/* Play Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </motion.button>
    </div>
  );
};

export default VideoSection;