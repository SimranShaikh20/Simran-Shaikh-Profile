
import React from 'react';
import { MapPin, Mail, GraduationCap, Trophy, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -inset-4 bg-purple-600/10 rounded-3xl blur-2xl"></div>
          <div className="relative glass-card p-10 rounded-3xl space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 gradient-text italic">Innovating at the edge.</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                I'm Simran, an AI enthusiast and open-source contributor deeply passionate about Generative AI and multi-agent systems. 
                With a track record of winning three major hackathons, I thrive on solving complex technical challenges that intersect 
                LLMs, backend scalability, and automated workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-indigo-600/20 rounded-lg"><MapPin className="w-5 h-5 text-indigo-400" /></div>
                <div>
                  <h5 className="font-bold text-sm text-white">Location</h5>
                  <p className="text-xs text-gray-400">Gujarat, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-600/20 rounded-lg"><Mail className="w-5 h-5 text-purple-400" /></div>
                <div>
                  <h5 className="font-bold text-sm text-white">Contact</h5>
                  <p className="text-xs text-gray-400">shaikhsimran20.2003@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <h4 className="font-bold">Education</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white font-medium">B.E. Computer Science</span>
                    <span className="text-purple-400">CGPA: 8.21</span>
                  </div>
                  <p className="text-xs text-gray-500">MSU, Baroda</p>
                </div>
                <div className="border-t border-white/5 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white font-medium">Diploma in Computer Eng.</span>
                    <span className="text-indigo-400">CGPA: 9.88</span>
                  </div>
                  <p className="text-xs text-gray-500">Government Polytechnic</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] text-purple-500 uppercase">Biography</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">Passion for <span className="gradient-text">Open Source</span> & Intelligence</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center text-purple-500">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">3× Hackathon Champion</h4>
                <p className="text-gray-400">Winning Agentic PostgreSQL and Global Agent Hackathons by building practical AI solutions that scale.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center text-indigo-500">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Open Source Advocate</h4>
                <p className="text-gray-400">Ranked Top 5% in GSSoC Extended with 50+ significant contributions to global repositories.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 glass rounded-2xl text-center">
              <div className="text-3xl font-black gradient-text">50+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">OS Contributions</div>
            </div>
            <div className="p-6 glass rounded-2xl text-center">
              <div className="text-3xl font-black gradient-text">3</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">Hackathon Wins</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
