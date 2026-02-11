import React from 'react';
import { ArrowDown, CheckCircle } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Advisory & Strategy</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
          {HERO_CONTENT.header}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {HERO_CONTENT.intro}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-all flex items-center gap-2"
          >
            View Expertise
            <ArrowDown className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-4 px-6 py-3">
             <div className="flex items-center gap-2 text-sm text-gray-500">
               <CheckCircle className="w-4 h-4 text-gray-600" />
               <span>No 24/7 Monitoring Burden</span>
             </div>
             <div className="flex items-center gap-2 text-sm text-gray-500">
               <CheckCircle className="w-4 h-4 text-gray-600" />
               <span>Strategic Focus</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;