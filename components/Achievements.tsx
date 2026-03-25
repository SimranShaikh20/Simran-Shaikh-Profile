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

        {/* GitHub Stats Section */}
        <div className="glass-card p-8 rounded-3xl overflow-hidden relative">
          {/* Header */}
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

          {/* Row 1: GitHub Stats + Top Languages */}
          <div className="flex flex-col md:flex-row gap-4 mb-4 items-center justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=SimranShaikh20&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true&bg_color=00000000&title_color=a78bfa&icon_color=a78bfa&text_color=cbd5e1"
              alt="Simran's GitHub Stats"
              className="rounded-xl w-full md:w-1/2 object-contain"
              loading="lazy"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=SimranShaikh20&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=a78bfa&text_color=cbd5e1"
              alt="Top Languages"
              className="rounded-xl w-full md:w-1/2 object-contain"
              loading="lazy"
            />
          </div>

          {/* Row 2: Contribution Streak */}
          <div className="flex justify-center mb-4">
            <img
              src="https://streak-stats.demolab.com/?user=SimranShaikh20&theme=tokyonight&hide_border=true&background=00000000&ring=a78bfa&fire=a78bfa&currStreakLabel=a78bfa&sideLabels=cbd5e1&dates=94a3b8&currStreakNum=ffffff&sideNums=ffffff"
              alt="GitHub Streak Stats"
              className="rounded-xl w-full max-w-2xl object-contain"
              loading="lazy"
            />
          </div>

          {/* Row 3: Contribution Activity Graph */}
          <div className="flex justify-center mb-4">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=SimranShaikh20&theme=tokyo-night&area=true&hide_border=true&bg_color=00000000&color=a78bfa&line=a78bfa&point=ffffff"
              alt="GitHub Activity Graph"
              className="rounded-xl w-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Row 4: GitHub Contribution Calendar Heatmap */}
          <div className="w-full bg-white/5 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-purple-400 mb-4">
              <Github className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">603 Contributions in the Last Year</span>
            </div>
            <img
              src="https://ghchart.rshah.org/a78bfa/SimranShaikh20"
              alt="Simran's GitHub Contribution Calendar"
              className="w-full rounded-xl object-contain"
              loading="lazy"
            />
            <div className="flex justify-end items-center gap-2 mt-3">
              <span className="text-[10px] text-gray-500">Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-white/10"></div>
                <div className="w-3 h-3 rounded-sm bg-purple-900"></div>
                <div className="w-3 h-3 rounded-sm bg-purple-700"></div>
                <div className="w-3 h-3 rounded-sm bg-purple-500"></div>
                <div className="w-3 h-3 rounded-sm bg-purple-400"></div>
              </div>
              <span className="text-[10px] text-gray-500">More</span>
            </div>
          </div>

          {/* Footer note */}
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
