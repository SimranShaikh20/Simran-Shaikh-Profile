import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Copy, Bot, User, ChevronRight, Sparkles } from 'lucide-react';
import { Message } from '../types';

// ─── HARDCODED Q&A DATABASE ───────────────────────────────────────────────────
const QA_PAIRS: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['hackathon', 'won', 'win', 'winner', 'champion'],
    answer: `🏆 **Simran is a 3× Hackathon Champion!**\n\n- **Global Agent Hackathon** – 🥇 Winner\n- **Agentic Postgres Challenge** – 🥇 Winner\n- **Bhashathon @ IIT Bombay** – 🥈 2nd Place\n\nHer wins are focused on AI agent systems and multi-agent orchestration — she doesn't just participate, she dominates! 🚀`,
  },
  {
    keywords: ['skill', 'tech', 'technology', 'stack', 'know', 'language', 'tools', 'expertise'],
    answer: `⚙️ **Simran's Technical Arsenal:**\n\n- **Languages:** Python, JavaScript, TypeScript, Java, C, SQL\n- **AI/LLM:** LangChain, LangGraph, Multi-Agent Systems, RAG Pipelines, Prompt Engineering, OpenAI API, Groq API\n- **ML:** CNN/RNN, Supervised & Unsupervised Learning, OpenCV, PyTorch\n- **Databases:** MySQL, MongoDB, PostgreSQL, FAISS, Pinecone, Chroma\n- **Cloud/DevOps:** Google Cloud, GitHub Actions, Docker, CI/CD\n- **Dev Tools:** Streamlit, Postman, VS Code, Jupyter, Git\n\nShe specializes in building production-grade AI agent pipelines! 🤖`,
  },
  {
    keywords: ['project', 'build', 'built', 'made', 'work', 'top', 'best'],
    answer: `🛠️ **Simran's Top Projects:**\n\n1. **Multi-Agent Code Review System** — 4 AI agents (Quality, Security, Performance, Docs), 4× faster analysis using Tiger Cloud\n2. **MindMesh AI** — 6 parallel AI agents delivering analysis in 3–5 seconds vs 20+ seconds sequentially\n3. **DevOps Autopilot** — Cuts deployment time from 2–3 hours to 2–3 minutes, 95% fewer commands\n4. **RepoMind AI** — Turns hours of GitHub repo exploration into minutes via CLI\n5. **SEO InsightHub** — Improved client SEO by 20% using Groq LLM + FireCrawl\n6. **Industrial Image Processing Pipeline** — 3× dataset expansion, 40% faster processing\n\nEvery project ships real, measurable impact! 💡`,
  },
  {
    keywords: ['code review', 'review system', 'tiger'],
    answer: `🔍 **Multi-Agent Code Review System**\n\nBuilt with TypeScript, React, PostgreSQL & Tiger Cloud AI.\n\n**4 Specialized Agents:**\n- 🟢 Quality Agent — code standards & best practices\n- 🔴 Security Agent — vulnerability scanning\n- 🟡 Performance Agent — bottleneck detection\n- 🔵 Documentation Agent — completeness checks\n\n**Key Achievement:** Analysis time dropped from 40 seconds → 10 seconds (4× improvement) using Tiger Cloud's zero-copy database forks.\n\nThis project won the **Agentic Postgres Challenge**! 🏆`,
  },
  {
    keywords: ['education', 'study', 'degree', 'university', 'college', 'msu', 'cgpa', 'gpa'],
    answer: `🎓 **Simran's Education:**\n\n**B.E. Computer Science** (2023–2026)\nMaharaja Sayajirao University (MSU), Vadodara, Gujarat\nCGPA: **8.21**\n\n**Diploma in Computer Engineering** (2020–2023)\nShri K.J. Polytechnic, Bharuch, Gujarat\nCGPA: **9.88** — 🥇 1st Rank Holder!\n\nShe also holds the **ACPC Gujarat State Rank: 7th** — a state-level engineering entrance achievement! 📚`,
  },
  {
    keywords: ['experience', 'intern', 'internship', 'job', 'work', 'atlas', 'keshav', 'company'],
    answer: `💼 **Simran's Professional Experience:**\n\n**Atlas Copco** — ML / Image Processing Intern *(Jan 2026 – Present)*\n📍 On-site, Pune\n- Building industrial inspection pipelines with OpenCV, PyTorch, NumPy\n- Automated data labeling workflows for large-scale ML datasets\n\n**Keshav Encon** — Web Scraping Intern *(Jun 2024 – Feb 2025)*\n📍 Remote\n- Reduced manual data collection by **60%** via Python + Docker + CI/CD\n- Data analysis with Pandas & NumPy\n\n**GirlScript Summer of Code (GSSoC)** — Open Source Contributor *(Oct–Nov 2024)*\n🌍 **Top 5% Globally**, 50+ pull requests merged! 🚀`,
  },
  {
    keywords: ['open source', 'gssoc', 'girlscript', 'github', 'contribution', 'pr', 'pull request'],
    answer: `🌐 **Open Source Contributions:**\n\n- **GirlScript Summer of Code (GSSoC Extended)** — Ranked **Top 5% Globally**\n- Contributed to ML modules and data pipelines\n- Reviewed **50+ pull requests**\n\n**GitHub Stats:**\n- ⭐ 38 Stars earned\n- 🔨 964 Commits\n- 🔀 57 PRs\n- 🐛 70 Issues resolved\n\nSimran is an active open-source citizen who gives back to the community! 💜`,
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'phone', 'linkedin', 'connect'],
    answer: `📬 **Get in Touch with Simran:**\n\n- **Email:** shaikhsimran20.2003@gmail.com\n- **Phone:** +91-9408-045-084\n- **LinkedIn:** linkedin.com/in/simran-shaikh-39207a23b\n- **GitHub:** github.com/SimranShaikh20\n- **Portfolio:** simran-shaikh-protfolio.netlify.app\n- **LeetCode:** leetcode.com/SimranShaikh20\n\nShe's open to AI/ML roles, internships, and exciting collaborations! 🤝`,
  },
  {
    keywords: ['achievement', 'award', 'honor', 'rank', 'recognition', 'certification', 'google'],
    answer: `🏅 **Simran's Achievements & Honors:**\n\n- 🥇 Academic Excellence Award — 1st Rank (Diploma)\n- 🏆 3× Hackathon Champion\n- 🌐 ACPC Gujarat State Rank: **7th**\n- 🎓 Gen AI Academy Certification — Google Cloud & Hack2Skill\n- 📜 Postman API Expert\n- 💻 LeetCode: **200+ problems** solved\n- 🔀 Open Source: **50+ pull requests** merged\n\nA consistently high achiever across academics, competitions, and community! 🌟`,
  },
  {
    keywords: ['ai', 'ml', 'machine learning', 'agent', 'llm', 'genai', 'generative'],
    answer: `🤖 **Simran's AI/ML Expertise:**\n\n**LLM & Agent Systems:**\nLangChain, LangGraph, Multi-Agent Orchestration, RAG Pipelines, Prompt Engineering, OpenAI API, Groq API, LLaMA\n\n**Machine Learning:**\nCNN, RNN, Supervised & Unsupervised Learning, Image Processing (OpenCV, PyTorch)\n\n**Vector Databases:**\nFAISS, Pinecone, Chroma\n\n**Key Philosophy:** She doesn't just use AI tools — she builds autonomous systems that think, act, and collaborate at scale. Her speciality is **multi-agent orchestration** where several AI models work in parallel for maximum performance! 🚀`,
  },
  {
    keywords: ['who', 'about', 'simran', 'introduce', 'tell me', 'background', 'summary'],
    answer: `👋 **Meet Simran Shaikh!**\n\nSimran is an **AI/ML Engineer** and **3× Hackathon Champion** from Gujarat, India, currently pursuing B.E. Computer Science at MSU Vadodara.\n\n🎯 **Specialization:** LLM orchestration, multi-agent systems, and production-grade AI pipelines\n\n🏆 **Highlights:**\n- Won 3 hackathons including Global Agent Hackathon & IIT Bombay's Bhashathon\n- Interning at Atlas Copco (ML/Image Processing)\n- Top 5% open-source contributor globally\n- ACPC State Rank: 7th in Gujarat\n\nShe's the kind of engineer who turns ambitious AI ideas into working, measurable systems. Ask me anything about her projects or skills! 😊`,
  },
  {
    keywords: ['leetcode', 'dsa', 'data structure', 'algorithm', 'coding', 'problem'],
    answer: `💻 **Simran's Competitive Programming:**\n\n- **LeetCode:** 200+ problems solved\n- Profile: leetcode.com/SimranShaikh20\n\nShe has a solid foundation in Data Structures & Algorithms which powers her ability to write efficient, production-quality AI systems. Combined with her AI expertise, she bridges the gap between theoretical CS and real-world engineering! 🧠`,
  },
  {
    keywords: ['devops', 'autopilot', 'docker', 'deployment', 'ci', 'cd'],
    answer: `⚡ **DevOps Autopilot Project:**\n\nBuilt with Python, Docker, GitHub Actions, LLM & Bash.\n\n**What it does:**\n- Reduces deployment commands by **95%**\n- Cuts deployment time from **2–3 hours → 2–3 minutes**\n- AI-powered, fully automated DevOps pipeline\n\nThis showcases Simran's ability to apply LLMs not just for chat — but for real infrastructure automation! 🛠️`,
  },
  {
    keywords: ['seo', 'insighthub', 'firecrawl', 'streamlit'],
    answer: `📈 **SEO InsightHub:**\n\nBuilt with Python, Streamlit, Groq LLM, Agno & FireCrawl.\n\n**Key Results:**\n- Improved client SEO performance by **20%**\n- GDPR-compliant analytics dashboards\n- AI-driven keyword and content gap analysis\n\nThis project demonstrates Simran's ability to combine web scraping, LLMs, and analytics into a business-ready product! 📊`,
  },
];

const FALLBACK = `🤔 I'm not sure about that specific topic, but I can tell you about:\n\n- 🏆 Simran's hackathon wins\n- 🛠️ Her top projects (Code Review System, MindMesh AI, DevOps Autopilot...)\n- ⚙️ Her technical skills & AI expertise\n- 🎓 Her education & background\n- 💼 Her internship experience\n- 🌐 Open source contributions\n- 📬 How to contact her\n\nJust ask any of those! 😊`;

function getBotAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const qa of QA_PAIRS) {
    if (qa.keywords.some((kw) => lower.includes(kw))) {
      return qa.answer;
    }
  }
  return FALLBACK;
}

// ─── SUGGESTED QUESTIONS ──────────────────────────────────────────────────────
const SUGGESTED_QUESTIONS = [
  "What hackathons has Simran won?",
  "Tell me about the Code Review System",
  "What are Simran's AI/ML skills?",
  "Show me Simran's top projects",
  "How can I contact Simran?",
  "Tell me about her experience",
];

// ─── MARKDOWN RENDERER (lightweight) ─────────────────────────────────────────
function renderMarkdown(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    // Bold
    line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Bullet
    if (line.startsWith('- ')) {
      return <li key={i} className="ml-4 list-none flex gap-2" dangerouslySetInnerHTML={{ __html: line.slice(2) }} />;
    }
    if (line === '') return <br key={i} />;
    return <p key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: line }} />;
  });
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
interface AIChatProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, setIsOpen }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm Simran's dedicated AI agent. Ask me anything about her background, projects, skills, or how to get in touch!",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = (content: string = input) => {
    if (!content.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', content, timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate a short "thinking" delay for realism
    setTimeout(() => {
      const answer = getBotAnswer(content);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: answer, timestamp: new Date() },
      ]);
      setIsTyping(false);
    }, 600);
  };

  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-[28px] shadow-[0_25px_60px_-15px_rgba(124,58,237,0.6)] transition-all duration-500 hover:scale-110 active:scale-90 flex items-center justify-center overflow-hidden border border-white/20"
        >
          <div className="absolute inset-0 rounded-full bg-white/20 pulse-ring"></div>
          <Bot className="w-10 h-10 relative z-10 transition-transform group-hover:rotate-12" />
          <div className="absolute top-2 right-2 w-4 h-4 bg-green-500 rounded-full border-[3px] border-[#030014] animate-pulse"></div>
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="flex flex-col w-[94vw] md:w-[460px] h-[720px] max-h-[88vh] bg-[#030014]/95 backdrop-blur-3xl rounded-[40px] border border-white/10 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-12 fade-in duration-500">
          
          {/* Header */}
          <div className="p-7 bg-gradient-to-r from-purple-600/25 to-indigo-600/15 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-purple-900/50 border border-white/20">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-black text-white text-xl tracking-tight leading-none uppercase italic">AURA Intelligence</h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,1)]"></div>
                  <span className="text-[11px] text-gray-400 font-black uppercase tracking-[0.2em]">Simran's Neural Agent</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-2xl text-gray-400 hover:text-white transition-all border border-transparent hover:border-white/5"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-7 space-y-8 custom-scrollbar">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-6 duration-500`}>
                <div className={`flex gap-4 max-w-[92%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border ${m.role === 'user' ? 'bg-indigo-600 border-indigo-400/30' : 'bg-purple-600 border-purple-400/30'}`}>
                    {m.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
                  </div>
                  <div className={`group relative p-5 rounded-3xl text-sm border transition-all duration-300 ${
                    m.role === 'user'
                      ? 'bg-indigo-600/15 border-indigo-500/40 text-indigo-50 rounded-tr-none'
                      : 'bg-white/[0.03] border-white/10 text-gray-100 rounded-tl-none hover:border-purple-500/30'
                  }`}>
                    <div className="space-y-1 font-medium">
                      {renderMarkdown(m.content)}
                    </div>
                    <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">
                        {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      <button
                        onClick={() => copyToClipboard(m.content)}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                      >
                        <Copy className="w-3.5 h-3.5" /> Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex gap-4 items-center">
                <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center border border-purple-400/30">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex gap-2 p-4 bg-white/[0.03] border border-white/10 rounded-3xl rounded-tl-none">
                  <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce [animation-duration:0.6s]"></div>
                  <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.1s]"></div>
                  <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.2s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-black/60 border-t border-white/10 backdrop-blur-3xl">
            {/* Suggestions — show only at start */}
            {messages.length === 1 && !isTyping && (
              <div className="mb-6 space-y-3">
                <p className="text-[11px] text-gray-500 font-black uppercase tracking-[0.3em] px-1">Ask me about</p>
                <div className="flex flex-col gap-2">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="group flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-[12px] text-gray-300 transition-all text-left hover:translate-x-1"
                    >
                      {q}
                      <ChevronRight className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Simran..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:border-purple-500/60 text-sm text-white transition-all placeholder:text-gray-600"
              />
              <button
                disabled={!input.trim() || isTyping}
                onClick={() => handleSend()}
                className="absolute right-3 top-2.5 p-2.5 bg-gradient-to-br from-purple-500 to-indigo-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] disabled:opacity-40 rounded-xl text-white transition-all active:scale-90"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 opacity-30">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Powered by AURA</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
