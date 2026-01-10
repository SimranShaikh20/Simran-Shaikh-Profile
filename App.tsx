import React, { useState, useEffect } from 'react';
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

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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
    <div className="min-h-screen selection:bg-purple-600/30">
      <BackgroundEffects />
      <Header onOpenChat={() => setIsChatOpen(true)} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <AIChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
};

export default App;