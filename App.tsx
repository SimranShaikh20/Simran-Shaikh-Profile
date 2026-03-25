import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  Code2,
  Github,
  Info,
  Layers,
  MessageCircle,
  RotateCcw,
  Sparkles,
  UserCheck,
  Users,
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';


const BackgroundEffects = () => (
  <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
    <div className="animated-blob w-[600px] h-[600px] bg-purple-600/10 top-[-10%] left-[-10%] [animation-delay:0s]"></div>
    <div className="animated-blob w-[500px] h-[500px] bg-indigo-600/10 bottom-[-10%] right-[-10%] [animation-delay:5s]"></div>
    <div className="animated-blob w-[400px] h-[400px] bg-fuchsia-600/5 top-[30%] right-[10%] [animation-delay:10s]"></div>
  </div>
);

type Role = 'Recruiter' | 'Developer' | 'Collaborator';
const ROLE_KEY = 'portfolioRole';

const roleItems: {
  key: Role;
  title: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    key: 'Recruiter',
    title: 'Recruiter',
    description: 'Fast-track hiring decisions with the highlights you need.',
    icon: UserCheck,
  },
  {
    key: 'Developer',
    title: 'Developer',
    description: 'Show technical work, code, and implementation details.',
    icon: Code2,
  },
  {
    key: 'Collaborator',
    title: 'Collaborator',
    description: 'Explore teamwork, open source, and shared projects.',
    icon: Users,
  },
];

// Contact is removed from here — it's now always rendered permanently below
const sectionsByRole: Record<Role, string[]> = {
  Recruiter:    ['Awards', 'Experience', 'Projects', 'Skills'],
  Developer:    ['Projects', 'Skills', 'GitHub', 'Experience'],
  Collaborator: ['Open Source', 'Projects', 'About'],
};

const sectionVariants = {
  hidden:  { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit:    { opacity: 0, y: -15, transition: { duration: 0.25 } },
};

const App: React.FC = () => {
  const [activeRole, setActiveRole] = useState<Role | null>(null);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsRoleModalOpen(true);
    const savedRole = localStorage.getItem(ROLE_KEY) as Role | null;
    if (savedRole && sectionsByRole[savedRole]) {
      setActiveRole(savedRole);
    }
  }, []);

  useEffect(() => {
    if (activeRole) {
      localStorage.setItem(ROLE_KEY, activeRole);
    }
  }, [activeRole]);

  const sectionComponents: Record<string, JSX.Element> = useMemo(
    () => ({
      Awards: (
        <section className="space-y-5">
          <div className="flex items-center gap-2 text-purple-400">
            <Award size={20} />
            <h2 className="text-xl font-bold">Awards & Achievements</h2>
          </div>
          <Achievements />
        </section>
      ),
      Experience: (
        <section className="space-y-5">
          <div className="flex items-center gap-2 text-blue-400">
            <Briefcase size={20} />
            <h2 className="text-xl font-bold">Experience</h2>
          </div>
          <Experience />
        </section>
      ),
      Projects: (
        <section className="space-y-5">
          <div className="flex items-center gap-2 text-emerald-400">
            <Layers size={20} />
            <h2 className="text-xl font-bold">Projects</h2>
          </div>
          <Projects />
        </section>
      ),
      Skills: (
        <section className="space-y-5">
          <div className="flex items-center gap-2 text-fuchsia-400">
            <Sparkles size={20} />
            <h2 className="text-xl font-bold">Skills</h2>
          </div>
          <Skills />
        </section>
      ),
      'Open Source': (
        <section className="space-y-5">
          <div className="flex items-center gap-2 text-cyan-300">
            <ShareOpenIcon />
            <h2 className="text-xl font-bold">Open Source</h2>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6">
            <p className="text-sm text-slate-300">
              Contributions and collaborations from communities, with a focus on maintainability and inclusive development.
            </p>
          </div>
        </section>
      ),
      About: (
        <section className="space-y-5">
          <div className="flex items-center gap-2 text-rose-300">
            <Info size={20} />
            <h2 className="text-xl font-bold">About</h2>
          </div>
          <About />
        </section>
      ),
    }),
    []
  );

  const activeSectionOrder = activeRole ? sectionsByRole[activeRole] : [];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#030014] flex flex-col items-center justify-center z-[100]">
        <div className="relative">
          <div className="w-24 h-24 border-2 border-purple-600/20 rounded-full"></div>
          <div className="absolute inset-0 w-24 h-24 border-t-2 border-purple-600 rounded-full animate-spin shadow-[0_0_25px_rgba(139,92,246,0.4)]"></div>
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-purple-400 tracking-widest animate-pulse uppercase">
            Loading
          </div>
        </div>
        <div className="mt-8 text-2xl font-black tracking-tighter">
          <span className="gradient-text">SIMRAN</span>
          <span className="text-white/20">SHAIKH</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-purple-600/30 relative">
      <BackgroundEffects />
      <Header onOpenChat={() => setIsChatOpen(true)} />
      <main className="relative z-10 space-y-12 px-4 py-6 md:px-8">
        <Hero />

        <AnimatePresence mode="popLayout">
          {activeSectionOrder.map((sectionKey) => (
            <motion.div
              key={sectionKey}
              layout
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sectionVariants}
              className="rounded-2xl border border-white/10 bg-black/30 p-5 shadow-xl backdrop-blur"
            >
              {sectionComponents[sectionKey] || null}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* ✅ Contact is ALWAYS rendered — visible for all roles */}
        <Contact />
      </main>

      <Footer />
      <AIChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />

      {activeRole && (
        <div className="fixed right-4 bottom-4 z-50 rounded-xl border border-white/15 bg-black/70 px-4 py-2 text-sm text-white backdrop-blur">
          <div className="flex items-center gap-2">
            <RotateCcw size={14} />
            <span>Current role: <strong>{activeRole}</strong></span>
          </div>
          <button
            type="button"
            onClick={() => setIsRoleModalOpen(true)}
            className="mt-2 inline-flex items-center rounded-md bg-violet-600 px-3 py-1 text-xs font-semibold text-white hover:bg-violet-500"
          >
            Switch Role
          </button>
        </div>
      )}

      <AnimatePresence>
        {isRoleModalOpen && (
          <motion.div
            key="role-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="w-full max-w-3xl rounded-2xl border border-white/15 bg-slate-950/95 p-8 shadow-2xl"
            >
              <div className="mb-6 text-center">
                <h1 className="text-3xl font-extrabold text-white">Who are you?</h1>
                <p className="mt-2 text-sm text-gray-300">Choose a role to personalize the portfolio experience.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {roleItems.map(({ key, title, description, icon: Icon }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setActiveRole(key);
                      setIsRoleModalOpen(false);
                    }}
                    className="rounded-xl border border-white/20 bg-white/5 p-4 text-left transition hover:border-violet-400 hover:bg-violet-500/20"
                  >
                    <div className="flex items-center gap-2 text-lg font-bold text-slate-100">
                      <Icon className="text-violet-300" size={20} />
                      {title}
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{description}</p>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsRoleModalOpen(false);
                  if (!activeRole) setActiveRole('Recruiter');
                }}
                className="mt-6 w-full rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
              >
                Continue as {activeRole || 'Recruiter'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function ShareOpenIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" {...props} className="h-5 w-5" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 11.5V4.5M13 4.5L16.154 7.654M13 4.5l-3.154 3.154" />
      <path d="M6.5 12.5a5.5 5.5 0 0 1 11 0v5.5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-5.5Z" />
    </svg>
  );
}

export default App;
