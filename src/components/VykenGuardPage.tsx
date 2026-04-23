import React from 'react';
import { motion, Variant, Variants } from 'framer-motion';
import { Shield, Eye, Search, Lock, CheckCircle, ArrowRight, Activity, BarChart3, Zap } from 'lucide-react';
import AbImage1 from "@/assets/ab-image-1.png"
import AbImage2 from "@/assets/ab-image-2.png"
import AbImage3 from "@/assets/ab-image-3.png"
import AbImage4 from "@/assets/ab-image-4.png"
const VykenGuardPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  } as Variants;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  } as Variants;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  } as Variants;

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="pt-20 bg-background text-textMain min-h-screen selection:bg-blue-500/30"
    >
      {/* 1. Title Section */}
      <section className="py-32 md:py-48 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-[0.9] text-white"
            >
              Vyken Guard™ <br />
              <span className="text-textMuted text-3xl md:text-5xl block mt-4 font-medium tracking-normal">
                Artificial Intelligence Governance & <br className="hidden md:block" /> Data Protection Tool
              </span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-textMuted max-w-2xl leading-relaxed"
            >
              Secure Your Organization’s Intelligence in the Age of AI.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-12"
            >
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95">
                Schedule a demo
              </button>
            </motion.div>
          </motion.div>
        </div>
        {/* Background Decoration */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none -z-0"
        ></motion.div>
      </section>

      {/* 2. Solution Overview Section */}
      <section className="py-32 md:pb-0 md:pt-32 px-6 md:pr-0 md:pl-6  bg-surface/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto md:mr-0 md:ml-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="lg:col-span-5"
            >
              <motion.h2 variants={itemVariants} className="text-sm uppercase tracking-[0.2em] text-blue-500 font-bold mb-6">The Solution</motion.h2>
              <motion.h3 variants={itemVariants} className="text-2xl md:text-5xl font-bold mb-8 leading-tight">The Vyken Guard Solution</motion.h3>
              <motion.p variants={itemVariants} className="text-base text-textMuted leading-relaxed mb-8">
                Vyken Guard™ is a developed Artificial Intelligence Governance and Real-time Data Loss Prevention (DLP) platform designed to help organizations securely adopt artificial intelligence technologies without exposing proprietary, regulated, or mission-critical information.
              </motion.p>
              <motion.div variants={itemVariants} className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl mb-8">
                <p className="text-md font-mono text-blue-400 text-center flex items-center justify-center gap-4">
                  Employees <ArrowRight size={16} /> AI Tools <ArrowRight size={16} /> External Systems
                </p>
              </motion.div>
              <motion.p variants={itemVariants} className="text-base text-textMuted leading-relaxed">
                It acts as a protective security layer, ensuring that every interaction with AI models is monitored, analyzed, and controlled in real-time.
              </motion.p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
              className="lg:col-span-7 md:overflow-clip md:h-150"
            >
              <div className="rounded-3xl md:w-255 md:h-255 overflow-hidden border border-white/10 shadow-3xl bg-black/40 group">
                <img 
                  src={AbImage1} 
                  alt="Vyken Guard Solution Overview" 
                  className=" md:h-150 object-top-left object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. How Vyken Guard Protects Your Organization Section */}
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-32"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-blue-500 font-bold mb-6">Process</h2>
            <h3 className="text-2xl md:text-6xl font-bold mb-8 leading-tight">How Vyken Guard Protects Your Organization</h3>
          </motion.div>
          
          <div className="space-y-64">
            {/* Monitoring */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="lg:col-span-4 order-2 lg:order-1"
              >
                <div className="mb-8">
                  <motion.span variants={itemVariants} className="text-6xl font-bold text-white/10 mb-4 block">01</motion.span>
                  <motion.h4 variants={itemVariants} className="text-3xl font-bold mb-6">Monitoring</motion.h4>
                  <motion.p variants={itemVariants} className="text-base text-textMuted leading-relaxed">
                    Continuously monitors AI tool usage, user behavior, and prompt activity to establish visibility and baseline behavior.
                  </motion.p>
                </div>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageVariants}
                className="lg:col-span-8 order-1 lg:order-2"
              >
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/20 group">
                  <img 
                    src={AbImage2} 
                    alt="Monitoring Dashboard" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>

            {/* Analyzing */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageVariants}
                className="lg:col-span-8"
              >
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/20 group">
                  <img 
                    src={AbImage3}  
                    alt="Analyzing Visual" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="lg:col-span-4"
              >
                <div className="mb-8">
                  <motion.span variants={itemVariants} className="text-6xl font-bold text-white/10 mb-4 block">02</motion.span>
                  <motion.h4 variants={itemVariants} className="text-3xl font-bold mb-6">Analyzing</motion.h4>
                  <motion.p variants={itemVariants} className="text-base text-textMuted leading-relaxed">
                    Applies data classification, risk scoring, and policy evaluation to determine whether content or behavior introduces security or compliance risk.
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Enforcing */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="lg:col-span-4 order-2 lg:order-1"
              >
                <div className="mb-8">
                  <motion.span variants={itemVariants} className="text-6xl font-bold text-white/10 mb-4 block">03</motion.span>
                  <motion.h4 variants={itemVariants} className="text-3xl font-bold mb-6">Enforcing</motion.h4>
                  <motion.p variants={itemVariants} className="text-base text-textMuted leading-relaxed">
                    Automatically blocks, redacts, or alerts on high-risk AI interactions — preventing data exposure before it occurs. This proactive control model reduces AI-related data leakage and strengthens enterprise governance posture.
                  </motion.p>
                </div>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageVariants}
                className="lg:col-span-8 order-1 lg:order-2"
              >
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/20 group">
                  <img 
                    src={AbImage4} 
                    alt="Enforcing Visual" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities Section */}
      <section className="py-48 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24"
          >
            <div className="lg:col-span-6">
              <h2 className="text-sm uppercase tracking-[0.2em] text-blue-500 font-bold mb-6">Features</h2>
              <h3 className="text-2xl md:text-6xl font-bold mb-8 leading-tight">Core Capabilities</h3>
              <p className="text-xl text-white font-medium mb-4">AI Usage Visibility</p>
              <p className="text-base text-textMuted leading-relaxed max-w-lg">
                Gain complete insight into how AI tools are being used across your organization.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden"
          >
            {[
              { title: "AI Tool Discovery & Activity Monitoring", icon: Activity },
              { title: "Prompt Inspection, Logging & Data Exposure Insights", icon: Search },
              { title: "Centralized AI Risk & Governance Dashboards", icon: BarChart3 },
              { title: "Executive & Board-Level Reporting", icon: Shield }
            ].map((capability, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-background p-12 hover:bg-white/[0.02] transition-colors group cursor-default"
              >
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                  <capability.icon size={24} />
                </div>
                <h4 className="text-xl font-bold leading-tight max-w-[200px] group-hover:text-blue-400 transition-colors duration-500">{capability.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Key Benefits Section */}
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-blue-500 font-bold mb-6">Value</h2>
            <h3 className="text-2xl md:text-6xl font-bold leading-tight">Key Benefits</h3>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24"
          >
            {[
              { 
                title: "Prevent Data Leakage", 
                desc: "Stop proprietary information from reaching public AI models.",
                icon: Shield
              },
              { 
                title: "Maintain Compliance", 
                desc: "Meet GDPR, HIPAA, Data Security, and internal governance requirements effortlessly.",
                icon: CheckCircle
              },
              { 
                title: "Boost Employee Productivity", 
                desc: "Allow safe use of AI tools without fear of exposing secrets.",
                icon: Zap
              },
              { 
                title: "Full Visibility", 
                desc: "Gain insights into AI usage patterns and potential risks across your organization.",
                icon: Eye
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex flex-col gap-6 group"
              >
                <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-blue-500 group-hover:border-blue-500 group-hover:bg-blue-500/5 transition-all duration-500">
                  <benefit.icon size={20} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-500">{benefit.title}</h4>
                  <p className="text-base text-textMuted leading-relaxed max-w-md">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Request a Demo Section */}
      <section className="py-48 px-6 bg-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="lg:col-span-6"
            >
              <motion.h2 variants={itemVariants} className="text-2xl md:text-5xl font-bold mb-12 text-white leading-[1.2]">See Vyken Guard <br /> in action</motion.h2>
              <motion.ul variants={containerVariants} className="space-y-8 mb-16">
                {[
                  "Live AI Risk Walkthrough",
                  "Sample Dashboard Review",
                  "Real-Time Data Protection Demonstration"
                ].map((item, idx) => (
                  <motion.li key={idx} variants={itemVariants} className="flex items-center gap-6 text-xl text-white/80">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white text-blue-600 rounded-full text-md font-bold shadow-2xl flex items-center gap-4 transition-all hover:shadow-white/20"
              >
                Book Your Demo Today <ArrowRight size={24} />
              </motion.button>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
              className="lg:col-span-6"
            >
              <div className="rounded-3xl overflow-hidden shadow-4xl bg-black/20 backdrop-blur-sm border border-white/10 group">
                <img 
                  src={AbImage1}  
                  alt="Vyken Guard Demo" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
        {/* Decorative background visual */}
        <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4 pointer-events-none"
        ></motion.div>
      </section>
    </motion.div>
  );
};

export default VykenGuardPage;

