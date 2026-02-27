// components/Workflow.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaComments, 
  FaTasks, 
  FaPlay, 
  FaChartLine, 
  FaRocket 
} from 'react-icons/fa';

const Workflow = () => {
  const steps = [
    { icon: FaSearch, title: 'Audit', description: 'Deep dive into your current digital presence', color: 'from-blue-500 to-cyan-500' },
    { icon: FaComments, title: 'Strategy Discussion', description: 'Collaborative planning session', color: 'from-purple-500 to-pink-500' },
    { icon: FaTasks, title: 'Planning', description: 'Detailed roadmap creation', color: 'from-green-500 to-emerald-500' },
    { icon: FaPlay, title: 'Execution', description: 'Bringing strategies to life', color: 'from-yellow-500 to-amber-500' },
    { icon: FaChartLine, title: 'Tracking', description: 'Real-time performance monitoring', color: 'from-red-500 to-orange-500' },
    { icon: FaRocket, title: 'Scaling', description: 'Amplifying successful campaigns', color: 'from-indigo-500 to-purple-500' }
  ];

  return (
    <section id="workflow" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Workflow</span>
          </h2>
          <p className="text-xl text-gray-300">A systematic approach to digital success</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary hidden lg:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center mb-12 last:mb-0`}
            >
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <div className="bg-dark/50 p-6 rounded-2xl border border-gray-800 hover:border-primary/50 transition-colors">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>

              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center my-4 lg:my-0 z-10">
                <step.icon className="text-3xl text-white" />
              </div>

              <div className="w-full lg:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;