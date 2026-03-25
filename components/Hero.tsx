import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Sparkles, ChevronDown, Download, Layers, Mail, ArrowRight, Bot } from 'lucide-react';
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
    const resumeText = `SIMRAN SHAIKH
Email: shaikhsimran20.2003@gmail.com | Mobile: +91-9408-045-084
LinkedIn: linkedin.com/in/simran-shaikh-39207a23b
GitHub: github.com/SimranShaikh20
Portfolio: simran-shaikh-protfolio.netlify.app
LeetCode: leetcode.com/SimranShaikh20

EDUCATION
─────────────────────────────────────────────────────────────
Maharaja Sayajirao University (MSU), Vadodara, Gujarat
B.E. Computer Science | CGPA: 8.21                    2023 - 2026

Shri K.J. Polytechnic, Bharuch, Gujarat
Diploma Computer Engineering | CGPA: 9.88              2020 - 2023

TECHNICAL SKILLS
─────────────────────────────────────────────────────────────
Programming: Python, Java, C, SQL, JavaScript, Node.js

Databases: MySQL, MongoDB, PostgreSQL, Vector Databases (FAISS, Pinecone, Chroma)

Generative AI/LLM/ML: LLaMA, Groq API, OpenAI API, RAG Pipelines, Prompt Engineering, LangChain, LangGraph, Multi-Agent Systems, Agent Orchestration, CNN/RNN, Supervised/Unsupervised Learning

Cloud/DevOps: Google Cloud, Groq Cloud, CI/CD (GitHub Actions)

Dev Tools: VS Code, Jupyter, Colab, Git, GitHub, Streamlit, Postman

Coursework: Data Structures & Algorithms, Object Oriented Programming, Operation System, Computer Networks

Soft Skills: Communication, Teamwork, Problem Solving, Adaptability, Agile Development

EXPERIENCE
─────────────────────────────────────────────────────────────
Keshav Encon | Web Scraping Intern (Remote)     Jun 2024 - Feb 2025

GirlScript Summer of Code (GSSoC Extended) | Open Source Contributor (Top 5% globally) (Remote)                       Oct 2024 - Nov 2024

PROJECTS
─────────────────────────────────────────────────────────────
Multi-Agent Customer Intelligence System (2025)
Multi-Agent Code Review System (2025)
SEO InsightHub (2025)
Agentic Cold Email System (2024)

HONORS & RECOGNITION
─────────────────────────────────────────────────────────────
🏆 Academic Excellence Award: 1st Rank Certificate
🏆 3x Hackathon Winner
🏆 Gen AI Academy Certification
🏆 DSA Problem Solving: 200+ LeetCode
🏆 Open Source Contributions: 50+ PRs`;

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 overflow-hidden overflow-x-hidden">
      {/* Aurora Effects */}
      <div className="aurora-glow bg-purple-600/20 top-[-10%] left-[-10%] [animation-delay:0s]"></div>
      <div className="aurora-glow bg-indigo-600/10 bottom-[-10%] right-[-10%] [animation-delay:5s]"></div>
      
      {/* Central Spotlight */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[90%] h-[40%] bg-purple-600/5 blur-[150px] rounded-full -z-10 animate-pulse"></div>
      
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
        {/* Animated Badge */}
        <div className="mb-8 px-5 py-2 glass rounded-full flex items-center gap-3 border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-300">Engineering Autonomous Futures</span>
        </div>

        {/* Title Area */}
        <div className="space-y-6 relative group">
          <h2 className="text-gray-500 text-sm sm:text-base font-bold tracking-[0.35em] uppercase mb-[-10px]">Architecting with AI</h2>

          {/* Name LEFT, Image RIGHT */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">

            {/* Name — LEFT on desktop */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[8rem] xl:text-[9rem] 2xl:text-[10rem] font-black tracking-tighter leading-[1.05] sm:leading-[1.0] md:leading-[0.95]">
              <span className="text-white">SIMRAN</span><br />
              <span className="gradient-text drop-shadow-[0_0_40px_rgba(167,139,250,0.4)]">SHAIKH</span>
            </h1>

            {/* Profile Image — RIGHT on desktop */}
            <div className="relative flex-shrink-0">
              {/* Outer animated glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-violet-500 to-indigo-600 blur-2xl opacity-50 scale-110 animate-pulse"></div>
              {/* Gradient border ring */}
              <div className="relative p-[4px] rounded-full bg-gradient-to-tr from-purple-600 via-violet-400 to-indigo-500 shadow-[0_0_50px_rgba(139,92,246,0.6)]">
                {/* Dark gap ring */}
                <div className="p-[3px] rounded-full bg-[#0a0a14]">
                  <img
                    src="/profile.png"
                    alt="Simran Shaikh"
                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

          </div>
          
          <div className="min-h-[3.25rem] sm:min-h-[4rem] md:min-h-[4.5rem] overflow-hidden mt-4 w-full">
            <p className="text-base sm:text-xl md:text-2xl text-gray-400 font-semibold tracking-tight leading-[1.2] sm:leading-[1.18] md:leading-tight break-words whitespace-normal">
              {tagline}<span className="inline-block w-[4px] h-7 sm:h-8 md:h-10 bg-purple-500 ml-2 align-middle animate-pulse"></span>
            </p>
          </div>

          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-7 sm:leading-8 md:leading-9 mt-8 font-medium break-words">
            Building specialized <span className="text-white border-b-2 border-purple-500/30">AI Agents</span> that think, code, and automate at scale. 3x Hackathon Champion focused on LLM orchestration.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mt-14 w-full sm:w-auto">
          <a href={hireMeUrl} className="group px-6 sm:px-10 py-3 sm:py-4 bg-white text-black hover:bg-purple-600 hover:text-white rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2 sm:gap-3 transition-all duration-500 transform hover:scale-105 shadow-[0_18px_40px_-15px_rgba(255,255,255,0.2)] hover:shadow-purple-600/50 active:scale-95">
            <Mail className="w-4 h-4" /> Hire Me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
            <a href="#projects" className="flex-1 sm:flex-initial px-4 sm:px-10 py-3 sm:py-5 glass hover:bg-white/10 text-white rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all transform hover:scale-105 border border-white/5 shadow-xl">
              <Layers className="w-5 h-5" /> Projects
            </a>
            <button 
              onClick={handleDownloadResume}
              className="px-4 sm:px-8 py-3 sm:py-5 glass hover:bg-white/10 text-white rounded-2xl font-bold flex items-center justify-center text-xs sm:text-sm transition-all border border-white/5 active:scale-90"
              title="Download Resume"
            >
              <Download className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Social Bar */}
       <div className="flex gap-5 mt-20 mb-20">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-5 glass rounded-[24px] text-gray-500 hover:text-white hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {React.cloneElement(link.icon as React.ReactElement, { className: "w-7 h-7 relative z-10" })}
            </a>
          ))}
        </div>

        {/* Bottom Scroll Tip */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-pulse">
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
