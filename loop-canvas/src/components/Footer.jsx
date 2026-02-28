// components/Footer.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/flogo.png';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaHeart,
  FaPhoneAlt,
  FaGlobe
} from 'react-icons/fa';

const Footer = () => {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  const socialLinks = [
    { icon: FaInstagram, href: 'https://instagram.com/looptek.in', label: 'Instagram' },
    { icon: FaFacebook, href: 'https://facebook.com/looptek', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com/looptek', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/looptek', label: 'LinkedIn' },
    { icon: FaYoutube, href: 'https://youtube.com/@looptek', label: 'YouTube' }
  ];

  const handleHeartClick = () => {
    const now = Date.now();
    if (now - lastClickTime > 2000) {
      setClickCount(1);
    } else {
      const newCount = clickCount + 1;
      setClickCount(newCount);
      if (newCount === 3) {
        setClickCount(0);
      }
    }
    setLastClickTime(now);
  };

  return (
    <footer className="relative bg-[#080818] pt-16 pb-8 border-t border-[#00d2ff]/10 overflow-hidden">

      <div className="relative z-10 container mx-auto px-4">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="LoopteK Logo" className="h-10 md:h-20" />
            </div>

            <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
              Helping businesses transform their presence in the digital world through innovative strategies.
            </p>

            {/* Leadership Section */}
            <div className="mb-6">
              <p className="text-white/70 text-xs uppercase tracking-wider mb-2">
                Leadership
              </p>

              <p className="text-white text-sm font-medium">
                Karan Pardeshi
              </p>
              <p className="text-[#00d2ff]/70 text-xs mb-3">
                Founder & CEO
              </p>

              <p className="text-white text-sm font-medium">
                Pradnya Rajput
              </p>
              <p className="text-[#00d2ff]/70 text-xs">
                Co-Founder
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-10 h-10 bg-white/5 border border-[#00d2ff]/20 rounded-lg flex items-center justify-center text-white/60 hover:text-[#00d2ff] hover:border-[#00d2ff]/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2 justify-center">
              <span className="w-1 h-4 bg-gradient-to-b from-[#00d2ff] to-[#6c5ce7] rounded-full" />
              Contact Info
            </h4>

            <div className="space-y-5">

              <a
                href="tel:+918483854581"
                className="flex items-center justify-center gap-3 text-gray-400 hover:text-[#00d2ff] transition-colors"
              >
                <FaPhoneAlt className="text-[#00d2ff]" />
                <span>+91 8483854581</span>
              </a>

              <a
                href="https://www.looptek.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-gray-400 hover:text-[#00d2ff] transition-colors"
              >
                <FaGlobe className="text-[#00d2ff]" />
                <span>www.looptek.in</span>
              </a>

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

            <p className="text-gray-400 mb-3 text-sm">
              Subscribe for digital marketing tips
            </p>

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
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-[#00d2ff]/10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p>
            © 2026 <span className="text-[#00d2ff]">LoopteK</span> All rights reserved.
          </p>

          <motion.p
            className="flex items-center space-x-1 mt-2 md:mt-0 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            onClick={handleHeartClick}
          >
            <span>Made with</span>
            <FaHeart className="text-red-500 mx-1" />
            <span>in India</span>
          </motion.p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;