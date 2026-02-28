// components/Hero.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

// Import your video assets
import a1 from '../assets/1.webm';
import a2 from '../assets/2.webm';
import a3 from '../assets/3.webm';
import a4 from '../assets/4.webm';

const VIDEOS = [
  { src: a1, id: 1, title: 'Increase traffic by 3X' },
  { src: a2, id: 2, title: 'Boosted sales with ad campaigns' },
  { src: a3, id: 3, title: 'Improved Leads Quality' },
  { src: a4, id: 4, title: 'Improvement in customer reviews' },
];

// ─────────────────────────────────────────────
// Encrypted Text Animation
// ─────────────────────────────────────────────
const EncryptedText = ({ text }) => {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  useEffect(() => {
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            if (letter === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 1 / 2;

      if (iteration >= text.length) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="text-sm md:text-base text-[#00d2ff] tracking-[0.18em] uppercase font-medium">
      {display}
    </p>
  );
};


// ─── Lemniscate math (kept for SVG rings only) ───────────────────────────────
const lemniscate = (t, rx, ry) => {
  const angle = t * Math.PI * 2;
  const denom = 1 + Math.pow(Math.cos(angle), 2);
  return {
    x: rx * Math.sin(angle) / denom,
    y: ry * Math.sin(angle) * Math.cos(angle) / denom,
  };
};

const buildLemniscatePath = (cx, cy, rx, ry, steps = 200) => {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const { x, y } = lemniscate(i / steps, rx, ry);
    pts.push(`${i === 0 ? 'M' : 'L'}${(cx + x).toFixed(2)},${(cy + y).toFixed(2)}`);
  }
  return pts.join(' ') + 'Z';
};

// ─── Large ∞ Logo SVG — animated gradient stroke ────────────────────────────
const InfinityLogo = ({ size = 380 }) => {
  const path = buildLemniscatePath(0, 0, 60, 66);

  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="-70 -40 140 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <defs>
        {/* Animated gradient with light blue as primary */}
        <linearGradient id="logoGrad" gradientUnits="userSpaceOnUse" x1="-52" y1="0" x2="52" y2="0">
          <stop offset="0%" stopColor="#00d2ff">
            <animate attributeName="stop-color"
              values="#00d2ff;#6c5ce7;#f27e1f;#00d2ff"
              dur="5s" repeatCount="indefinite" />
          </stop>
        </linearGradient>

        {/* Secondary light blue gradient for accents */}
        <linearGradient id="logoGradLight" gradientUnits="userSpaceOnUse" x1="-52" y1="0" x2="52" y2="0">
          <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.8"/>
          <stop offset="50%" stopColor="#4dc9ff" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#00b8ff" stopOpacity="0.8"/>
        </linearGradient>

        {/* Glow filter */}
        <filter id="logoGlow" x="-60%" y="-120%" width="220%" height="340%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Extra outer halo filter */}
        <filter id="logoHalo" x="-80%" y="-160%" width="260%" height="420%">
          <feGaussianBlur stdDeviation="9" result="halo" />
          <feMerge>
            <feMergeNode in="halo" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Spark glow */}
        <filter id="sparkGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="4" result="sg" />
          <feMerge>
            <feMergeNode in="sg" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <path id="logoPath" d={path} />
      </defs>

      {/* Outer halo ring */}
      <path
        d={path}
        stroke="url(#logoGradLight)"
        strokeWidth="8"
        fill="none"
        filter="url(#logoHalo)"
        opacity="0.5"
        strokeLinecap="round"
      />

      {/* Base ring */}
      <path
        d={path}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="3"
        fill="none"
      />

      {/* Main bright glowing stroke */}
      <path
        d={path}
        stroke="url(#logoGrad)"
        strokeWidth="4.5"
        fill="none"
        filter="url(#logoGlow)"
        strokeLinecap="round"
      />

      {/* Travelling bright spark */}
      <circle r="2.4" fill="#ffffff" opacity="0.9" filter="url(#sparkGlow)">
        <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
          <mpath href="#logoPath" />
        </animateMotion>
      </circle>

      {/* Second spark */}
      <circle r="2.5" fill="#ffffff" opacity="0.9" filter="url(#sparkGlow)">
        <animateMotion dur="3s" begin="-1.5s" repeatCount="indefinite" rotate="auto">
          <mpath href="#logoPath" />
        </animateMotion>
      </circle>
    </svg>
  );
};

// ─── Top-left ornament ───────────────────────────────────────────
const TopLeftOrnament = () => (
  <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none select-none overflow-hidden z-[2]">
    <div className="absolute inset-0" style={{
      background: 'radial-gradient(ellipse at top left, rgba(0,210,255,0.12) 0%, transparent 68%)',
    }} />
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dotGrid" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(0,210,255,0.3)" />
        </pattern>
        <radialGradient id="gridFade" cx="0" cy="0" r="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="65%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="gridMask">
          <rect width="256" height="256" fill="url(#gridFade)" />
        </mask>
      </defs>
      <rect width="256" height="256" fill="url(#dotGrid)" mask="url(#gridMask)" />
    </svg>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lineGradV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.75"/>
          <stop offset="100%" stopColor="#00d2ff" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="lineGradH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.75"/>
          <stop offset="100%" stopColor="#00d2ff" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <line x1="32" y1="0" x2="32" y2="100" stroke="url(#lineGradV)" strokeWidth="1" />
      <line x1="0" y1="32" x2="100" y2="32" stroke="url(#lineGradH)" strokeWidth="1" />
      <circle cx="32" cy="32" r="2.5" fill="#00d2ff" opacity="0.8" />
      <circle cx="32" cy="32" r="6" fill="none" stroke="#00d2ff" strokeWidth="0.75" opacity="0.3" />
      <circle cx="32" cy="32" r="10" fill="none" stroke="#00d2ff" strokeWidth="0.4" opacity="0.15" />
    </svg>
    <motion.span
      animate={{ opacity: [0.10, 0.25, 0.10] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', top: 12, left: 46, fontSize: 22, fontWeight: 900, color: '#00d2ff', lineHeight: 1 }}
    >∞</motion.span>
  </div>
);

const VideoCard = ({ video, index }) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current) {
              videoRef.current.play().catch((error) => {
                console.log('Auto-play prevented:', error);
              });
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '50px',
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg bg-gray-900 group cursor-pointer"
    >
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse" />
      )}
      
      {/* Video element */}
      <video
        ref={videoRef}
        src={video.src}
        loop
        muted
        playsInline
        onLoadedData={handleLoadedData}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Infinity overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Video overlay with title */}
      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-xs font-medium flex items-center gap-1">
          <span className="w-1 h-1 bg-[#00d2ff] rounded-full animate-pulse"></span>
          {video.title}
        </p>
      </div>
      
    </motion.div>
  );
};

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-x-hidden"
      style={{ backgroundColor: '#080818' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080818] via-[#0A0A22] to-[#080818]" />
      
      {/* Ambient glows with light blue emphasis */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: 800, height: 400,
            background: 'radial-gradient(ellipse, rgba(0,210,255,0.08) 0%, transparent 70%)',
            filter: 'blur(50px)' }} />
        <div className="absolute top-1/2 -translate-y-1/2 rounded-full"
          style={{ left: 'calc(50% - 250px)', width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(0,210,255,0.06) 0%, transparent 70%)',
            filter: 'blur(40px)' }} />
        <div className="absolute top-1/2 -translate-y-1/2 rounded-full"
          style={{ left: 'calc(50% + 100px)', width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(108,92,231,0.04) 0%, transparent 70%)',
            filter: 'blur(40px)' }} />
      </div>

      {/* Faint ∞ watermark */}
      <motion.div
        className="absolute bottom-16 right-24 select-none pointer-events-none"
        animate={{ opacity: [0.025, 0.08, 0.025], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{ fontSize: 240, lineHeight: 1, color: '#00d2ff', fontWeight: 90, opacity: 0.15 }}
      >
        ∞
      </motion.div>

      {/* Top-left ornament */}
      <TopLeftOrnament />

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 py-6 md:py-12 max-w-7xl min-h-screen flex items-center">


        
        {/* Responsive Grid: Mobile = stacked, Desktop = content left, reels right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16  w-full">
          {/* LEFT SIDE - Logo, Title, Description */}


           
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
            className="text-center md:pt-60 lg:text-left order-1"
          >
{/* Tagline */}
            <motion.p
              variants={textVariants}
              className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/60 mb-4"
            >
              #Best Digital Marketing Agency in Nashik
            </motion.p>

            {/* Brand logo row: Large ∞ + LoopteK */}
            <motion.div
              variants={textVariants}
              className="flex items-center justify-center lg:justify-start gap-4 mb-4"
            >
              {/* Animated infinity SVG logo */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <InfinityLogo size={100} />
              </motion.div>

              {/* LoopteK wordmark with gradient */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span style={{
                  backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #00d2ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  LoopteK
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.h2 variants={textVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
              Digital Growth Partner
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              We help businesses build a strong digital presence and grow sustainably through innovative strategies and creative campaigns.
            </motion.p>

           <motion.a
             href="https://www.looptek.in/"
  target="_blank"  // Opens in new tab
  rel="noopener noreferrer"  // Security best practice
  variants={textVariants}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-3 bg-gradient-to-r from-[#00d2ff] to-[#6c5ce7] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-block cursor-pointer"
>
  Official Website
</motion.a>

           {/* Encrypted Text */}
            <motion.div variants={textVariants} className="mt-8">
              <EncryptedText text="We scale businesses to 10X growth" />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Campaign Reels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="order-2"
          >
          
            {/* 2x2 Grid for videos */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {VIDEOS.map((video, index) => (
                <div key={video.id} className="relative group">
                  <VideoCard video={video} index={index} />
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#00d2ff]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#6c5ce7]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* View all link */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between mt-6"
            >
              <div className="flex items-center gap-2">
                <span className="text-white/20 text-xs"> Sample Campaign Shoots</span>
              </div>
              
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <FaArrowDown className="text-2xl" style={{ color: '#00d2ff' }} />
      </motion.div>
    </section>
  );
};

export default Hero;