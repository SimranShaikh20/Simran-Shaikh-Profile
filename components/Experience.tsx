
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-purple-500 uppercase">My Journey</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold">Professional <span className="gradient-text">Experience</span></h3>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 to-transparent md:left-1/2"></div>
              
              <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2"></div>
                
                {/* Connector Point */}
                <div className="absolute left-[-5px] top-4 w-2.5 h-2.5 bg-purple-600 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8)] md:left-1/2 md:-ml-[5px]"></div>
                
                <div className="md:w-1/2">
                  <div className="glass-card p-8 group hover:scale-[1.02]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-purple-600/10 rounded-lg"><Briefcase className="w-5 h-5 text-purple-400" /></div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-purple-400 font-semibold mb-4">{exp.company}</p>
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
