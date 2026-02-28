import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import v1 from '../assets/B1.webm';
import v2 from '../assets/B2.webm';

import img1 from '../assets/B3.jpg';
import img2 from '../assets/B4.jpg';
import img3 from '../assets/B5.jpg';

const VIDEOS = [
  { id: 1, src: v1, label: 'Campaign Reel 01' },
  { id: 2, src: v2, label: 'Campaign Reel 02' },
];

const RESULTS = [
  {
    id: 1,
    src: img1,
    title: 'Improved leads quality',
    desc: 'Through targeted ad campaigns that reached the right audience at the right moment.',
  },
  {
    id: 2,
    src: img2,
    title: 'Increased project site visits',
    desc: 'Higher intent traffic converting into real business opportunities and sales.',
  },
  {
    id: 3,
    src: img3,
    title: 'Attract Premium Clients',
    desc: 'Consistent visibility across platforms building trust and recognition over time.',
  },
];

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

const VideoCard = ({ video, index, inView }) => {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.12 }}
      className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-[#0A0A22]/60 border border-white/10 group"
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A22] via-[#10103a] to-[#0A0A22] animate-shimmer" />
      )}

      <video
        ref={videoRef}
        src={video.src}
        loop
        muted
        playsInline
        onLoadedData={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="absolute inset-0 rounded-2xl ring-1 ring-[#00d2ff]/0 group-hover:ring-[#00d2ff]/30 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

const ResultCard = ({ result, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
      className="relative rounded-2xl overflow-hidden bg-[#0A0A22]/60 border border-white/10 group hover:border-[#00d2ff]/40 hover:bg-[#00d2ff]/5 transition-all duration-400"
    >
      <div className="relative w-full aspect-[9/8] overflow-hidden bg-gradient-to-br from-[#0A0A22] to-[#070720]">
        <img
          src={result.src}
          alt={result.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080818]/80 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
};

const Slide3 = () => {
  const [sectionRef, inView] = useInView(0.08);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden  px-4 md:px-12 lg:px-20"
      style={{ backgroundColor: '#080818' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#080818] via-[#0A0A22] to-[#080818]" />

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 800,
            height: 400,
            background: 'radial-gradient(ellipse, rgba(0,210,255,0.08) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: 'calc(50% - 250px)',
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(108,92,231,0.05) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Main Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TITLE — perfectly aligned with left grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
         

          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide bg-gradient-to-r from-[#00d2ff] to-[#6c5ce7] bg-clip-text text-transparent">
            Real Estate & Architects
          </h2>

          <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-[#00d2ff] to-[#6c5ce7]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

          {/* LEFT */}
          <div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {RESULTS.map((result, i) => (
                <ResultCard key={result.id} result={result} index={i} inView={inView} />
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="relative rounded-2xl overflow-hidden flex flex-col justify-center p-5 aspect-[9/8] group hover:border-[#00d2ff]/50 transition-all duration-400"
              >
                <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <p className="text-[#00d2ff] text-[10px] tracking-[0.22em] uppercase mb-5 font-light">
                  What We Achieved
                </p>

                {RESULTS.map((r, i) => (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="flex items-start gap-3 mb-4 last:mb-0"
                  >
                    <span className="mt-[5px] shrink-0 w-[5px] h-[5px] rounded-full bg-gradient-to-br from-[#00d2ff] to-[#6c5ce7]" />
                    <p className="text-white/80 text-xs font-semibold leading-snug">
                      {r.title}
                    </p>
                  </motion.div>
                ))}

                <div className="mt-6 w-8 h-[1px] bg-gradient-to-r from-[#00d2ff] to-[#6c5ce7] group-hover:w-14 transition-all duration-400" />
              </motion.div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {VIDEOS.map((video, i) => (
                <VideoCard key={video.id} video={video} index={i} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, #0A0A22 25%, #15154a 50%, #0A0A22 75%);
          background-size: 200% 100%;
          animation: shimmer 1.8s infinite;
        }
        .bg-radial-glow {
          background: radial-gradient(ellipse at 50% 50%, rgba(0,210,255,0.15) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
};

export default Slide3;