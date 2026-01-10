
import React from 'react';
import { Project, Experience, Achievement } from './types';
import { 
  Code, Bot, Sparkles, Terminal, Database, Cloud, Zap, Search, 
  Cpu, Globe, Layout, Briefcase, Award, Github, Linkedin, Twitter 
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Multi-Agent Code Review System',
    description: 'Engineered multi-agent code review system using Tiger Cloud\'s zero-copy database forks. Accelerated analysis 4x (40s → 10s) by parallelizing 4 specialized AI agents.',
    tech: ['TypeScript', 'React', 'PostgreSQL', 'Tiger Cloud', 'AI'],
    github: 'https://github.com/SimranShaikh20/Multi-Agent-Code-Review-System',
    category: 'AI/ML',
    stars: 1
  },
  {
    id: '2',
    title: 'SEO InsightHub',
    description: 'AI-driven SEO analytics platform for full technical audits, keyword gap analysis, and competitor benchmarking. Automated multi-site evaluations using Groq LLM.',
    tech: ['Python', 'Streamlit', 'Groq LLM', 'Agno', 'FireCrawl', 'Exa API'],
    github: 'https://github.com/SimranShaikh20/SEO-InsightHub-Powered-by-Agno-AI-Agent-Framework',
    category: 'AI/ML',
    stars: 16,
    forks: 6
  },
  {
    id: '3',
    title: 'LinkedIn Content Generator',
    description: 'n8n + Mixtral workflow for automated high-quality post generation for professional engagement. Automated document creation and workflow scheduling.',
    tech: ['TypeScript', 'n8n', 'Mixtral LLM'],
    github: 'https://github.com/SimranShaikh20/LinkedIn-Content-Generator',
    category: 'Automation',
    stars: 1
  },
  {
    id: '4',
    title: 'AI Grammar Spell Checker',
    description: 'Advanced prompt-based grammar correction model supporting English and Hindi via Mixtral-8x7b. Features real-time error fixing and suggestions.',
    tech: ['Python', 'Streamlit', 'Groq API'],
    github: 'https://github.com/SimranShaikh20/AI-Powered-Grammar-Spell-Checker',
    category: 'AI/ML',
    stars: 2
  },
  {
    id: '5',
    title: 'Support Agent Automation',
    description: 'Zapier + AI-Powered WhatsApp API assistant handling student and learner queries automatically with intelligent context-aware responses.',
    tech: ['Zapier', 'WhatsApp API', 'AI Automation'],
    category: 'Automation'
  },
  {
    id: '6',
    title: 'MindMesh AI',
    description: 'Sophisticated neural network application representing AI intelligence and knowledge graphs. Built for scalable data flowing through intelligent networks.',
    tech: ['TypeScript', 'React'],
    github: 'https://github.com/SimranShaikh20/MindMesh-AI',
    category: 'Web Dev',
    stars: 1,
    forks: 1
  },
  {
    id: '7',
    title: 'Multi-Agent Customer Intelligence System',
    description: 'Built autonomous 4-agent system (Router, Retriever, Generator, Validator) with LangGraph orchestration, agent memory, and FAISS-based RAG pipeline.',
    tech: ['Python', 'LangGraph', 'CrewAI', 'FAISS', 'FastAPI', 'Docker'],
    category: 'AI/ML'
  },
  {
    id: '8',
    title: 'Agentic Cold Email System',
    description: 'Engineered autonomous multi-agent system for job analysis, candidate matching, and personalized email generation using LangChain and FAISS.',
    tech: ['Python', 'LangChain', 'LangGraph', 'FAISS', 'Streamlit', 'Scrapy'],
    category: 'Automation'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Web Scraping Intern',
    company: 'Keshav Encon',
    period: 'Jun 2024 – Feb 2025',
    points: [
      'Designed scalable scraping workflows using Python, BeautifulSoup, and Scrapy.',
      'Automated pipelines, reducing manual data collection efforts by 60%.',
      'Integrated REST APIs, HTML parsers, and advanced XPath filters.',
      'Implemented Pandas/NumPy for deep data analysis and transformation.'
    ]
  },
  {
    id: 'exp2',
    role: 'Open Source Contributor (Top 5%)',
    company: 'GSSoC Extended',
    period: 'Oct 2024 – Nov 2024',
    points: [
      'Contributed to ML pipeline optimization & data processing repositories.',
      'Ranked among the Top 5% of 7000+ contributors globally.',
      'Collaborated via Git and improved code quality through systematic PR reviews.'
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'a1', title: 'Agentic PostgreSQL Challenge Winner', provider: 'TigerDB & DEV' },
  { id: 'a2', title: 'Global Agent Hackathon Winner', provider: 'Global AI community' },
  { id: 'a3', title: 'Bhashathon (IIT Bombay) — 2nd Place', provider: 'IIT Bombay' },
  { id: 'a4', title: 'ACPC (Gujarat) State Rank: 7th', provider: 'GTU Affiliated' },
  { id: 'a5', title: 'Gen AI Academy Certification', provider: 'Google Cloud & Hack2Skill' },
  { id: 'a6', title: 'Postman API Expert', provider: 'Postman' }
];

export const SKILL_CATEGORIES = [
  {
    name: 'Programming',
    icon: <Terminal className="w-5 h-5 text-purple-400" />,
    skills: ['Python', 'JavaScript/TypeScript', 'Java', 'SQL', 'C']
  },
  {
    name: 'AI/ML & LLMs',
    icon: <Bot className="w-5 h-5 text-blue-400" />,
    skills: ['LLaMA', 'Groq', 'LangChain', 'RAG', 'Prompt Engineering', 'Gemini API', 'CNN/RNN']
  },
  {
    name: 'Web Dev',
    icon: <Globe className="w-5 h-5 text-indigo-400" />,
    skills: ['React.js', 'Tailwind CSS', 'Vite', 'HTML/CSS', 'Streamlit']
  },
  {
    name: 'Data & Scraping',
    icon: <Search className="w-5 h-5 text-cyan-400" />,
    skills: ['Scrapy', 'BeautifulSoup', 'Pandas', 'NumPy', 'Data Analysis']
  },
  {
    name: 'Automation',
    icon: <Zap className="w-5 h-5 text-yellow-400" />,
    skills: ['n8n', 'Zapier', 'Make.com']
  },
  {
    name: 'Cloud & DevOps',
    icon: <Cloud className="w-5 h-5 text-sky-400" />,
    skills: ['GCP', 'Docker', 'CI/CD', 'Git/GitHub']
  }
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/SimranShaikh20', icon: <Github /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/simran-shaikh-39207a23b', icon: <Linkedin /> },
  { name: 'Twitter', url: 'https://twitter.com/Simran_Shk', icon: <Twitter /> },
  { name: 'Dev.to', url: 'https://dev.to/simranshaikh20_50', icon: <Code /> }
];
