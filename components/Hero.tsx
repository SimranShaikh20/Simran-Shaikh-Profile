
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Sparkles, ChevronDown, Download, Layers, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const [tagline, setTagline] = useState('');
  const fullTagline = "3× Hackathon Winner | AI/ML Enthusiast | Open Source Contributor";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTagline(fullTagline.substring(0, i));
      i++;
      if (i > fullTagline.length) clearInterval(interval);
    }, 50);
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

- Pipeline Development: Developed and maintained scalable web scraping pipelines with Python, BeautifulSoup, and Scrapy to extract structured data from several high-traffic business and job websites

- Data Analysis: Processed and analyzed scraped data using Pandas and NumPy, delivering actionable business insights that informed management decisions and enabled data-driven strategy

- Workflow Automation: Automated extraction workflows using Docker containers and CI/CD pipelines, reducing manual data collection by 60% and accelerating team operations with scheduled deployment scripts and monitoring tools

- API & Web Integration: Built and integrated RESTful APIs using FastAPI, implemented HTML, CSS, and XPath data parsing, and ensured all scraping adhered to robots.txt and ethical standards

GirlScript Summer of Code (GSSoC Extended) | Open Source Contributor (Top 5% globally) (Remote)                       Oct 2024 - Nov 2024

- Open Source Contribution: Contributed code to improve machine learning modules and data pipelines in open repositories, collaborating via Git and regularly reviewing pull requests for code quality and documentation

- Global Ranking: Ranked in the top 5% of over 7,000 contributors, demonstrating strong software engineering and collaboration skills with continuous engagement and mentoring newcomers

PROJECTS
─────────────────────────────────────────────────────────────
Multi-Agent Customer Intelligence System (2025)
Python, LangGraph, CrewAI, FAISS, FastAPI, Docker
- Built autonomous 4-agent system (Router, Retriever, Generator, Validator) with LangGraph orchestration, agent memory, and FAISS-based RAG pipeline
- Deployed with Docker/CI-CD, reducing response time 45% and improving accuracy 35%

Multi-Agent Code Review System (2025)
TypeScript, React, PostgreSQL, Tiger Cloud, AI
- Engineered multi-agent code review system using Tiger Cloud's zero-copy database forks
- Accelerated analysis 4x (40s → 10s) by parallelizing 4 specialized AI agents (Quality, Security, Performance, Documentation) with zero storage overhead vs. traditional 400% overhead

SEO InsightHub (2025)
Python, Streamlit, Groq LLM, Agno, FireCrawl, Exa API
- Built an AI-driven SEO analytics platform for full technical audits, keyword gap analysis, and competitor benchmarking
- Automated multi-site evaluations, improved client SEO performance by 20%, and delivered GDPR-compliant dashboards with prioritized, actionable recommendations

Agentic Cold Email System (2024)
Python, LangChain, LangGraph, FAISS, Streamlit, Scrapy
- Engineered an autonomous multi-agent cold email system with specialized agents for job analysis, candidate matching, and email generation
- Implemented agent orchestration using LangGraph, vector-based semantic search with FAISS for portfolio matching, and context-aware reasoning pipelines, increasing response rates by 25% through intelligent agent collaboration

HONORS & RECOGNITION
─────────────────────────────────────────────────────────────
🏆 Academic Excellence Award: 1st Rank Certificate
🏆 3x Hackathon Winner: Global Agent Hackathon, Agentic Postgres Challenge, Bhashathon IIT Bombay (2nd Winner)
🏆 Gen AI Academy Certification: Issued by Google Cloud & Hack2Skill
🏆 DSA Problem Solving: Solved 200+ Data Structures and Algorithms problems on LeetCode
🏆 Open Source Contributions: Submitted 50+ pull requests to various AI and data science repositories on GitHub`;

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse [animation-delay:2s]"></div>
      </div>

      <div className="max-w-6xl w-full flex flex-col items-center text-center">
        {/* Avatar Area */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#030014] bg-gray-800">
            <img 
              src="https://picsum.photos/seed/simran/400/400" 
              alt="Simran Shaikh" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-purple-600 p-2 rounded-lg border-2 border-[#030014] animate-bounce">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-lg md:text-xl font-medium tracking-[0.2em] text-purple-400 uppercase">Hello, I'm</h2>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            <span className="gradient-text">Simran Shaikh</span>
          </h1>
          <div className="h-8">
            <p className="text-xl md:text-2xl text-gray-400 font-medium">
              {tagline}<span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Architecting next-gen AI Agents, building scalable LLM workflows, and contributing to the global open-source ecosystem.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a href={hireMeUrl} className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-purple-900/40">
            <Mail className="w-5 h-5" /> Hire Me
          </a>
          <a href="#projects" className="px-8 py-4 glass hover:bg-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105">
            <Layers className="w-5 h-5" /> View Projects
          </a>
          <button 
            onClick={handleDownloadResume}
            className="px-8 py-4 border border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
          >
            <Download className="w-5 h-5" /> Resume
          </button>
        </div>

        {/* Socials */}
        <div className="flex gap-6 mt-16">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:border-purple-500/50 transition-all hover:-translate-y-1"
              title={link.name}
            >
              {React.cloneElement(link.icon as React.ReactElement, { className: "w-6 h-6" })}
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
