import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const industries = [
  { num: '01', label: 'Hospitals & Clinics' },
  { num: '02', label: 'Real Estates' },
  { num: '03', label: 'Restaurants & Cafes' },
  { num: '04', label: 'Salons & Beauty Clinics' },
  { num: '05', label: 'Personal Brands & Local Stores' },
  { num: '06', label: 'Education Institutes' },
];

const services = [
  {
    title: 'Business Development',
    desc: 'Strategic planning, competitor insights and scalable growth roadmaps aligned with your business goals.',
  },
  {
    title: 'Paid Ad Campaigns',
    desc: 'Data-driven Meta & Google ad campaigns that convert cold audiences into loyal customers.',
  },
  {
    title: 'Content Creation',
    desc: 'Scroll-stopping reels, static posts, and branded visuals crafted for maximum retention.',
  },
  {
    title: 'SEO & Local Search',
    desc: 'Dominate search results with on-page optimization, local SEO, and authority-building strategies.',
  },
  {
    title: 'Brand Identity Design',
    desc: 'Logos, color systems, and visual guidelines that make your brand instantly recognizable.',
  },
  {
    title: 'Analytics & Reporting',
    desc: "Real-time dashboards and monthly deep-dives so you always know what's working and what's next.",
  },
];

const useInView = (threshold = 0.15) => {
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

const Slide1 = () => {
  const [sectionRef, sectionInView] = useInView(0.1);

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden pt-16 pb-10 px-4 md:px-12 lg:px-20"
      style={{ backgroundColor: '#080818' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080818] via-[#0A0A22] to-[#080818]" />

      {/* Ambient glows */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 800,
            height: 400,
            background:
              'radial-gradient(ellipse, rgba(0,210,255,0.08) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: 'calc(50% - 250px)',
            width: 300,
            height: 300,
            background:
              'radial-gradient(circle, rgba(0,210,255,0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: 'calc(50% + 100px)',
            width: 300,
            height: 300,
            background:
              'radial-gradient(circle, rgba(108,92,231,0.04) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* LEFT — Industries */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#00d2ff] text-[15px] tracking-[0.2em] uppercase mb-6 font-light"
          >
            Who We Work With
          </motion.p>

          <div className="flex flex-col gap-0">
            {industries.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -30 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="group flex items-center gap-4 py-4 border-b border-white/5 cursor-default"
              >
                <span className="text-[10px] text-[#00d2ff]/50 font-mono tracking-widest w-6 shrink-0 group-hover:text-[#00d2ff] transition-colors duration-300">
                  {item.num}
                </span>

                <span className="block w-0 group-hover:w-8 h-[1px] bg-gradient-to-r from-[#00d2ff] to-[#6c5ce7] transition-all duration-500 shrink-0" />

                <span className="text-white/70 text-base md:text-lg font-semibold tracking-wide group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — Services */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#00d2ff] text-[15px] tracking-[0.2em] uppercase mb-6 font-light"
          >
            What We Offer
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.09 }}
                className="group relative rounded-2xl p-4 bg-[#0A0A22]/60 border border-white/10 hover:border-[#00d2ff]/40 hover:bg-[#00d2ff]/5 transition-all duration-400 overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial-glow pointer-events-none" />

                <div className="w-6 h-[2px] bg-gradient-to-r from-[#00d2ff] to-[#6c5ce7] rounded-full mb-3 group-hover:w-10 transition-all duration-400" />

                <h3 className="text-white text-sm font-bold mb-1 tracking-widest leading-snug">
                  {service.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .bg-radial-glow {
          background: radial-gradient(
            ellipse at 50% 0%,
            rgba(0, 210, 255, 0.12) 0%,
            transparent 70%
          );
        }
      `}</style>
    </div>
  );
};

export default Slide1;