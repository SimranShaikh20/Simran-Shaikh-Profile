
import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Award, Star, Github } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-purple-500 uppercase">Recognitions</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold">Honors & <span className="gradient-text">Awards</span></h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ACHIEVEMENTS.map((ach) => (
            <div key={ach.id} className="glass-card p-6 flex gap-4 group">
              <div className="p-3 bg-yellow-500/10 rounded-xl h-fit">
                <Award className="w-6 h-6 text-yellow-500 group-hover:animate-bounce" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">{ach.title}</h4>
                <p className="text-xs text-gray-500 uppercase font-black tracking-wider">{ach.provider}</p>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats Mockup */}
        <div className="glass-card p-8 rounded-3xl overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-400">
                <Github className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Global Influence</span>
              </div>
              <h4 className="text-3xl font-black text-white">GitHub Contributions</h4>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-white/5 rounded-xl text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold">Total PRs</div>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-xl text-center">
                <div className="text-2xl font-bold text-white">Top 5%</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold">Contributor</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-7 sm:grid-cols-14 md:grid-cols-21 lg:grid-cols-28 gap-1.5 opacity-60">
            {Array.from({ length: 140 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-full aspect-square rounded-sm ${
                  Math.random() > 0.6 ? (Math.random() > 0.8 ? 'bg-purple-600' : 'bg-purple-800') : 'bg-white/5'
                }`}
              ></div>
            ))}
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10 text-center mt-6">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <Star className="w-3 h-3 text-yellow-500" /> Starstruck & Pull Shark x2 Achievement Holder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
