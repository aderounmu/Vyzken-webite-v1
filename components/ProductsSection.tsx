import React from 'react';
import { Briefcase, ShieldCheck, ArrowRight } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const products = [
    {
      id: 'consults',
      name: 'Vyken Consults',
      description: 'Strategic cybersecurity advisory tailored to your business objectives. We provide the roadmap for your security journey.',
      features: [
        'Risk Assessment & Gap Analysis',
        'Compliance Readiness (ISO, SOC2, NIST)',
        'Security Architecture Design',
        'vCISO Advisory Services'
      ],
      icon: Briefcase,
      color: 'text-primary',
      bg: 'bg-primary/10'
    },
    {
      id: 'guard',
      name: 'Vyken Guard',
      description: 'Proactive protection and continuous monitoring. We stand as the first line of defense against evolving cyber threats.',
      features: [
        'Continuous Vulnerability Scanning',
        'Threat Detection & Response Design',
        'Security Awareness & Phishing Sims',
        'Endpoint Protection Management'
      ],
      icon: ShieldCheck,
      color: 'text-accent',
      bg: 'bg-accent/10'
    }
  ];

  return (
    <section id="products" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Our Products</h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            Specialized solutions designed to fortify your digital perimeter and empower your strategic decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all group"
            >
              <div className={`w-14 h-14 ${product.bg} ${product.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <product.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
              <p className="text-textMuted mb-8 leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full ${product.bg.replace('/10', '/40')}`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} className={product.color} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default ProductsSection;
