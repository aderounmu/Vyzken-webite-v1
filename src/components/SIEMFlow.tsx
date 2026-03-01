import React from 'react';
import { Database, Search, Bell, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SIEMFlow: React.FC = () => {
  const steps = [
    { icon: Database, label: "Logs", color: "text-blue-400" },
    { icon: Search, label: "Detection Logic", color: "text-purple-400" },
    { icon: Bell, label: "Alerts", color: "text-orange-400" },
    { icon: Shield, label: "Guidance", color: "text-green-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="w-full mt-6 p-6 rounded-lg bg-black/40 border border-white/5">
      <h4 className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest text-center">SIEM Detection Lifecycle</h4>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-4 relative"
      >
        {/* Connecting Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent -translate-y-1/2 z-0 origin-left"
        ></motion.div>

        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div 
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-surfaceHighlight border border-white/10 flex items-center justify-center mb-3 group-hover:border-primary/50 transition-colors shadow-lg">
                <step.icon className={`w-5 h-5 ${step.color} transition-colors`} />
              </div>
              <span className="text-xs font-semibold text-gray-200">{step.label}</span>
            </motion.div>
            
            {index < steps.length - 1 && (
              <ArrowRight className="md:hidden text-gray-700 rotate-90 my-2 w-4 h-4" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default SIEMFlow;
