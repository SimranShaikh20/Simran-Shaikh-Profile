
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
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4 shadow-[0_0_20px_rgba(139,92,246,0.3)]"></div>
        <div className="text-xl font-black gradient-text animate-pulse">SIMRAN<span className="text-white">SHAIKH</span></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-purple-600/30">
      <Header onOpenChat={() => setIsChatOpen(true)} />
      <main>
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
