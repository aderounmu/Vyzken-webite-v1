import React from 'react';
import { ServiceItem } from '../types';
import { Check, BarChart, FileCheck, Calendar, MailWarning } from 'lucide-react';
import PhishingFlow from './PhishingFlow';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const isEven = index % 2 === 0;

  // Mock data for the chart visual
  const chartData = [
    { name: 'Critical', value: 15, color: '#EF4444' },
    { name: 'High', value: 25, color: '#F97316' },
    { name: 'Medium', value: 35, color: '#EAB308' },
    { name: 'Low', value: 25, color: '#22C55E' },
  ];

  return (
    <div className="group relative w-full mb-8">
      <div className="glass-panel rounded-xl p-8 transition-all duration-500 hover:bg-white/[0.02]">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Content Side */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-white/5 rounded-lg text-white group-hover:text-primary transition-colors border border-white/10">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">{service.title}</h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              {service.overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Deliverables</h4>
                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Benefits</h4>
                <ul className="space-y-2">
                  {service.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-accent mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <div className="bg-black/30 rounded-lg border border-white/5 p-6 h-full min-h-[250px] flex flex-col items-center justify-center relative overflow-hidden">
               
               {/* Decorative background visual */}
               <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

               {/* Conditional Visuals based on service type */}
               {service.visualType === 'list' && (
                 <div className="w-full space-y-3">
                   {[1, 2, 3].map((i) => (
                     <div key={i} className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/5">
                        <FileCheck className="text-gray-600 w-5 h-5" />
                        <div className="h-2 bg-gray-700 rounded w-2/3 opacity-50"></div>
                     </div>
                   ))}
                   <div className="text-center mt-4">
                     <span className="text-xs text-green-500 font-mono flex items-center justify-center gap-1">
                       <Check size={12} /> COMPLIANCE READY
                     </span>
                   </div>
                 </div>
               )}

               {service.visualType === 'chart' && (
                 <div className="w-full h-[200px]">
                    <h5 className="text-xs text-center text-gray-500 mb-2 font-mono">VULNERABILITY DISTRIBUTION</h5>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          innerRadius={50}
                          outerRadius={70}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(0,0,0,0.5)" />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#121212', borderColor: '#333' }} itemStyle={{ color: '#fff' }} />
                      </PieChart>
                    </ResponsiveContainer>
                 </div>
               )}

               {service.visualType === 'calendar' && (
                 <div className="grid grid-cols-2 gap-3 w-full">
                    <div className="bg-white/5 p-4 rounded border border-white/5 flex flex-col items-center">
                        <Calendar className="text-primary w-6 h-6 mb-2" />
                        <span className="text-2xl font-bold text-white">Q1</span>
                        <span className="text-[10px] text-gray-500 uppercase">Training</span>
                    </div>
                    <div className="bg-white/5 p-4 rounded border border-white/5 flex flex-col items-center">
                        <Calendar className="text-primary w-6 h-6 mb-2" />
                        <span className="text-2xl font-bold text-white">Q2</span>
                        <span className="text-[10px] text-gray-500 uppercase">Training</span>
                    </div>
                    <div className="col-span-2 bg-white/[0.02] p-3 rounded border border-white/5">
                        <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
                            <span>Completion Rate</span>
                            <span className="text-accent">98%</span>
                        </div>
                        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-accent h-full w-[98%]"></div>
                        </div>
                    </div>
                 </div>
               )}

               {service.visualType === 'flow' && (
                 <div className="w-full flex items-center justify-center">
                    <div className="text-center">
                        <MailWarning className="w-12 h-12 text-orange-500 mx-auto mb-2 opacity-80" />
                        <div className="text-xs text-gray-500 font-mono">SIMULATION ACTIVE</div>
                    </div>
                 </div>
               )}
            </div>
            {/* If it's the phishing flow, render the extra component below */}
            {service.visualType === 'flow' && <PhishingFlow />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;