import React from 'react';
import { Mail, MousePointerClick, BarChart3, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PhishingFlow: React.FC = () => {
  const steps = [
    { icon: Mail, label: "Simulated Email", desc: "Realistic campaigns" },
    { icon: MousePointerClick, label: "Employee Action", desc: "Behavior tracking" },
    { icon: BarChart3, label: "Analytics", desc: "Risk measurement" },
    { icon: GraduationCap, label: "Feedback", desc: "Targeted training" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="w-full mt-6 p-6 rounded-lg bg-black/40 border border-white/5">
      <h4 className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest text-center md:text-left">Workflow Engine</h4>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-4 relative"
      >
        
        {/* Connecting Line (Desktop) */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent -translate-y-1/2 z-0 origin-left"
        ></motion.div>

        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div 
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-surfaceHighlight border border-white/10 flex items-center justify-center mb-3 group-hover:border-primary/50 transition-colors shadow-lg">
                <step.icon className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm font-semibold text-gray-200">{step.label}</span>
              <span className="text-xs text-gray-500 mt-1">{step.desc}</span>
            </motion.div>
            
            {/* Mobile Arrow */}
            {index < steps.length - 1 && (
              <ArrowRight className="md:hidden text-gray-700 rotate-90 my-2" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default PhishingFlow;