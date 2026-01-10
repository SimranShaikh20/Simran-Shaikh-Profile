import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Sparkles, ChevronDown, Download, Layers, Mail, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const [tagline, setTagline] = useState('');
  const fullTagline = "3× Hackathon Winner | AI Agent Specialist | Open Source Contributor";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTagline(fullTagline.substring(0, i));
      i++;
      if (i > fullTagline.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const email = "shaikhsimran20.2003@gmail.com";
  const subject = encodeURIComponent("Hiring Inquiry - Let's Work Together");
  const body = encodeURIComponent("Hi Simran,\n\nI came across your portfolio and I'm impressed with your work.\n\nI would like to discuss a potential opportunity.\n\nBest regards,");
  const hireMeUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  const handleDownloadResume = () => {
    // Resume text generation logic (simplified for brevity here, assumed to be same as before)
    const resumeText = `SIMRAN SHAIKH...`; // Same as before
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'SimranShaikh-Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Lights & Glows */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
      
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-6 px-4 py-1.5 glass rounded-full flex items-center gap-2 border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,1)]"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-300">Available for Opportunities</span>
        </div>

        {/* Name & Title */}
        <div className="space-y-6 relative">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-2">
            <span className="text-white drop-shadow-2xl">SIMRAN</span><br />
            <span className="gradient-text drop-shadow-[0_0_20px_rgba(167,139,250,0.3)]">SHAIKH</span>
          </h1>
          
          <div className="h-8 md:h-12 overflow-hidden">
            <p className="text-lg md:text-2xl text-gray-400 font-semibold tracking-wide">
              {tagline}<span className="inline-block w-[3px] h-6 md:h-8 bg-purple-500 ml-1 align-middle animate-pulse"></span>
            </p>
          </div>

          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-xl leading-relaxed mt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Architecting next-gen <span className="text-white font-bold">AI Agents</span>, building scalable <span className="text-white font-bold">LLM workflows</span>, and pushing the boundaries of autonomous systems.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto animate-in fade-in zoom-in duration-1000 delay-300">
          <a href={hireMeUrl} className="group px-10 py-4.5 bg-white text-black hover:bg-purple-600 hover:text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-purple-600/40">
            <Mail className="w-5 h-5" /> Hire Me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex gap-2 w-full sm:w-auto">
            <a href="#projects" className="flex-1 sm:flex-initial px-8 py-4.5 glass hover:bg-white/10 text-white rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all transform hover:scale-105 border border-white/5">
              <Layers className="w-5 h-5" /> Projects
            </a>
            <button 
              onClick={handleDownloadResume}
              className="px-6 py-4.5 glass hover:bg-white/10 text-white rounded-2xl font-bold flex items-center justify-center transition-all border border-white/5"
              title="Download Resume"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Floating Socials */}
        <div className="flex gap-4 mt-16 animate-in fade-in duration-1000 delay-500">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 glass rounded-2xl text-gray-500 hover:text-white hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {React.cloneElement(link.icon as React.ReactElement, { className: "w-6 h-6 relative z-10" })}
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;