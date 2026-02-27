// components/Footer.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/flogo.png';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaHeart,
  FaTimes,
  FaCode,
  FaInfinity
} from 'react-icons/fa';

const Footer = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  const socialLinks = [
    { icon: FaInstagram, href: 'https://instagram.com/looptek.in', label: 'Instagram', color: 'hover:text-[#00d2ff]' },
    { icon: FaFacebook, href: 'https://facebook.com/looptek', label: 'Facebook', color: 'hover:text-[#00d2ff]' },
    { icon: FaTwitter, href: 'https://twitter.com/looptek', label: 'Twitter', color: 'hover:text-[#00d2ff]' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/looptek', label: 'LinkedIn', color: 'hover:text-[#00d2ff]' },
    { icon: FaYoutube, href: 'https://youtube.com/@looptek', label: 'YouTube', color: 'hover:text-[#00d2ff]' }
  ];

  const quickLinks = ['Home', 'Industries', 'Services', 'Workflow', 'Contact'];

  // Easter egg handler
  const handleHeartClick = () => {
    const now = Date.now();
    
    // Reset if clicks are too far apart (more than 2 seconds)
    if (now - lastClickTime > 2000) {
      setClickCount(1);
    } else {
      const newCount = clickCount + 1;
      setClickCount(newCount);
      
      // Show popup on 3 clicks
      if (newCount === 3) {
        setShowPopup(true);
        setClickCount(0); // Reset counter
      }
    }
    
    setLastClickTime(now);
  };

  // Close popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <footer className="relative bg-[#080818] pt-16 pb-8 border-t border-[#00d2ff]/10 overflow-hidden">
  

      {/* Easter Egg Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
          >
            <motion.div 
              className="relative bg-gradient-to-br from-[#080818] to-[#0A0A22] rounded-2xl p-8 max-w-md w-full border border-[#00d2ff]/30 shadow-2xl"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
            >
              {/* Close button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-white/40 hover:text-white/60 transition-colors"
              >
                <FaTimes size={20} />
              </button>

              {/* Popup content */}
              <div className="text-center">
                {/* Infinity animation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-6xl text-[#00d2ff] mb-4"
                >
                  <FaInfinity className="mx-auto" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  🥚
                   Easter Egg Found!
                </h3>
                
                <div className="w-16 h-[2px] bg-gradient-to-r from-[#00d2ff] to-[#6c5ce7] mx-auto my-4" />
                
                <p className="text-[#00d2ff] text-lg font-semibold mb-2">
                  Developed by Kundan Patil
                </p>
                
                <p className="text-gray-400 text-sm mb-6">
                  Full Stack Developer & Digital Growth Expert
                </p>

                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <p className="text-white/60 text-xs font-mono">
                    "Building digital experiences with ∞ passion"
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closePopup}
                  className="px-6 py-2 bg-gradient-to-r from-[#00d2ff] to-[#6c5ce7] text-white rounded-full text-sm font-semibold"
                >
                  Close
                </motion.button>

                <p className="text-white/20 text-[10px] mt-4">
                  Secret message #{Math.floor(Math.random() * 1000)}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info - Larger column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            {/* Logo with infinity theme */}
            <div className="flex items-center gap-3 mb-4">
             <img src={logo} alt="LoopteK Logo" className=" h-10  md:h-20" />
            </div>

            {/* Company description */}
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
              Your trusted digital growth partner, helping businesses transform their online presence and achieve remarkable results through data-driven strategies.
            </p>

            {/* Social links with light blue theme */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`w-10 h-10 bg-white/5 border border-[#00d2ff]/20 rounded-lg flex items-center justify-center text-white/60 hover:text-[#00d2ff] hover:border-[#00d2ff]/50 transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>

            {/* Infinity counter */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-[#00d2ff]/30 text-sm">∞</span>
              <span className="text-white/20 text-xs">endless possibilities</span>
            </div>
          </motion.div>

         

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-[#00d2ff] to-[#6c5ce7] rounded-full" />
              Newsletter
            </h4>
            <p className="text-gray-400 mb-3 text-sm">Subscribe for digital marketing tips</p>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-[#00d2ff]/20 rounded-l-lg focus:border-[#00d2ff] outline-none text-white placeholder-white/30"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#00d2ff] to-[#6c5ce7] rounded-r-lg font-semibold text-white text-sm hover:shadow-lg transition-shadow">
                  Subscribe
                </button>
              </div>
              <p className="text-white/20 text-[10px] flex items-center gap-1">
                <span>∞</span> No spam, just insights
              </p>
            </div>
          </motion.div>
        </div>

     
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-[#00d2ff]/10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p className="flex items-center space-x-1">
            <span>© 2026</span>
            <span className="text-[#00d2ff]">LoopteK</span>
            <span>All rights reserved.</span>
          </p>
          
         
          <motion.p 
            className="flex items-center space-x-1 mt-2 md:mt-0 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            onClick={handleHeartClick}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500 group-hover:text-red-400 transition-colors" />
            </motion.div>
            <span>in India </span>
           
          </motion.p>
        </motion.div>

       
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;