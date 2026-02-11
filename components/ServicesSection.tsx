import React from 'react';
import { SERVICES } from '../constants';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Capabilities</h2>
           <div className="h-1 w-20 bg-primary"></div>
           <p className="mt-4 text-gray-400 max-w-2xl">
             We deliver specialized expertise to secure your infrastructure, data, and human capital.
           </p>
        </div>

        <div className="flex flex-col gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;