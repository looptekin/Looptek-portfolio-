// App.jsx
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SectionWrapper from './components/SectionWrapper';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
import Slide7 from './components/Slide7';
import Slide8 from './components/Slide8';
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Disable developer tools shortcuts
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-dark text-white font-sans overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* <Navbar /> */}
      
      <main>
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
        
        <SectionWrapper>
          <Slide1 />
        </SectionWrapper>

        <SectionWrapper>
          <Slide2/>
        </SectionWrapper>
              
       <SectionWrapper>
          <Slide3/>
        </SectionWrapper>

        <SectionWrapper>
          <Slide4/>
        </SectionWrapper>

        
        <SectionWrapper>
          <Slide6/>
        </SectionWrapper>

            


            <SectionWrapper>
          <Slide8/>
        </SectionWrapper>


        <SectionWrapper>
          <Slide5/>
        </SectionWrapper>
        
       
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;