import React from 'react';
import { Project, Experience, Achievement } from './types';
import { 
  Code, Bot, Sparkles, Terminal, Database, Cloud, Zap, Search, 
  Cpu, Globe, Layout, Briefcase, Award, Github, Linkedin, Twitter 
} from 'lucide-react';

export const PROJECTS: Project[] = [
  // ── Flagship resume projects ───────────────────────────────
  {
    id: '9',
    title: 'SentinelRAG',
    description: 'Production-hardened RAG API with an instruction-hierarchy guardrail blocking 95%+ prompt-injection attempts, plus circuit-breaker fallback and full tracing/eval via LangSmith. Cut p95 latency 45% (2.1s → 1.15s) and tokens/request 35% through caching and streaming, scaling to 50+ req/sec.',
    tech: ['Python', 'FastAPI', 'LangChain', 'Redis', 'LangSmith'],
    // TODO: add your real repo URL
    category: 'AI/ML',
  },
  {
    id: '10',
    title: 'HSN Classifier',
    description: 'PDF-grounded HTS trade-compliance navigator built for Atlas Copco. Uses zero-hallucination code-prefix tree traversal (Chapter → Heading → Subheading → Tariff line) sourced verbatim from HTS & GRI PDFs, invoking the LLM only for GRI 1–6 disambiguation, with a full audit trail for compliance traceability.',
    tech: ['Python', 'Streamlit', 'Azure OpenAI', 'pdfplumber'],
    // TODO: add your real repo URL
    category: 'AI/ML',
  },
  {
    id: '11',
    title: 'Casting Defect Detection',
    description: 'Built and published a novel 12-class industrial casting-defect image dataset — the only publicly available multi-class version of this benchmark. Trained a ResNet-50 + EfficientNet-B3 ensemble with MixUp/CutMix augmentation and Test-Time Augmentation (TTA), cross-validated to 90%+ accuracy.',
    tech: ['Python', 'PyTorch', 'ResNet-50', 'EfficientNet-B3', 'OpenCV'],
    // TODO: add your real repo URL
    category: 'AI/ML',
  },
  {
    id: '12',
    title: 'Credit Risk Scoring',
    description: 'End-to-end tabular-ML pipeline comparing Logistic Regression, Random Forest, and XGBoost via RandomizedSearchCV with full MLflow experiment tracking, selecting the best model at 0.70 ROC-AUC. Served through a Dockerized FastAPI microservice at ~20ms p50 latency, with a KS-test/PSI drift monitor and a GitHub Actions CI/CD pipeline gating automated retraining.',
    tech: ['Python', 'scikit-learn', 'XGBoost', 'MLflow', 'FastAPI', 'Docker'],
    // TODO: add your real repo URL
    category: 'AI/ML',
  },
  {
    id: '13',
    title: 'ChurnGuard',
    description: 'Explainable ensemble churn-prediction engine: a stacked model (XGBoost + Random Forest + Logistic Regression) on 50,000+ customer records with 40+ engineered features, SMOTE-based imbalance handling, and Optuna-driven tuning — achieving 0.94 ROC-AUC (vs. 0.81 baseline) and a 23% F1 improvement. Deployed as a Dockerized FastAPI microservice, cutting manual risk-review time 35%.',
    tech: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'FastAPI', 'Docker'],
    // TODO: add your real repo URL
    category: 'AI/ML',
  },

  // ── Existing projects (unchanged) ──────────────────────────
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


export const EXPERIENCES = [
  {
    id: 1,
    role: "AI / ML Intern",
    company: "Atlas Copco",
    period: "Jan 2026 - July 2026",
    location: "On-site (Pune)",
    points: [
      "Built a Python function-calling agent chaining 10+ REST APIs (Azure AD OAuth2), replacing a 15-step manual workflow and cutting onboarding time by 80%",
      "Implementing ResNet-based transfer learning models for industrial defect detection, achieving 80%+ classification accuracy through fine-tuning and hyperparameter optimization using PyTorch",
      "Developed autoencoder models for anomaly detection, reducing feature dimensionality by 65% while maintaining reconstruction quality for efficient defect identification in manufacturing processes",
      "Engineered SQL-backed image pipelines on Azure infra across 10,000+ samples, expanding training data 3x and lifting accuracy by 15%"
    ]
  },
  {
    id: 2,
    role: "Web Scraping Intern",
    company: "Keshav Encon",
    period: "Jun 2024 - Feb 2025",
    location: "Remote",
    points: [
      "Developed scalable web scraping pipelines with Python, BeautifulSoup, and Scrapy to extract structured data from high-traffic websites",
      "Processed scraped data using Pandas and NumPy, delivering actionable insights that informed management decisions and enabled data-driven strategy",
      "Automated extraction workflows, reducing manual data collection by 60% with scheduled deployment scripts and logging tools"
    ]
  },
  {
    id: 3,
    role: "Open Source Contributor (Top 5% globally)",
    company: "GirlScript Summer of Code (GSSoC Extended)",
    period: "Oct 2024 - Nov 2024",
    location: "Remote",
    points: [
      "Contributed code to improve machine learning modules and data pipelines in open repositories, collaborating via Git and reviewing pull requests",
      "Ranked in the top 5% of over 7,000 contributors, demonstrating strong software engineering and collaboration skills with continuous engagement"
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
    skills: ['LLaMA', 'Groq', 'LangChain', 'LangGraph', 'MCP', 'RAG', 'Prompt Engineering', 'Gemini API', 'Anthropic Claude', 'CNN/RNN', 'Multi-Agent Orchestration', 'FAISS', 'ChromaDB', 'Pinecone']
  },
  {
    name: 'Deep Learning & Computer Vision',
    icon: <Cpu className="w-5 h-5 text-fuchsia-400" />,
    skills: ['PyTorch', 'ResNet/EfficientNet Transfer Learning', 'Autoencoders', 'XGBoost', 'LightGBM', 'Image Classification', 'OpenCV']
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
    skills: ['GCP', 'Azure', 'Docker', 'CI/CD', 'Git/GitHub', 'MLflow', 'FastAPI', 'PostgreSQL', 'MongoDB']
  }
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/SimranShaikh20', icon: <Github /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/simran-shaikh-39207a23b', icon: <Linkedin /> },
  { name: 'Twitter', url: 'https://twitter.com/Simran_Shk', icon: <Twitter /> },
  { name: 'Dev.to', url: 'https://dev.to/simranshaikh20_50', icon: <Code /> }
];