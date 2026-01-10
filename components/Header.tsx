
import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, Mail } from 'lucide-react';

interface HeaderProps {
  onOpenChat: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const email = "shaikhsimran20.2003@gmail.com";
  const subject = encodeURIComponent("Hiring Inquiry - Let's Work Together");
  const body = encodeURIComponent("Hi Simran,\n\nI came across your portfolio and I'm impressed with your work.\n\nI would like to discuss a potential opportunity.\n\nBest regards,");
  const hireMeUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-[#030014]/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-black tracking-tighter text-white hover:text-purple-400 transition-colors">
          SIMRAN<span className="text-purple-600">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button 
            onClick={onOpenChat}
            className="flex items-center gap-2 px-4 py-2 border border-purple-500/30 bg-purple-600/10 hover:bg-purple-600/20 text-purple-300 rounded-lg text-sm font-bold transition-all"
          >
            <Bot className="w-4 h-4" />
            AI Assistant
          </button>
          <a 
            href={hireMeUrl} 
            className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm font-bold transition-all shadow-lg shadow-purple-900/20 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            Hire Me
          </a>
        </nav>

        {/* Mobile Nav Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={onOpenChat}
            className="p-2 bg-purple-600/20 text-purple-400 rounded-lg"
            aria-label="Open AI Assistant"
          >
            <Bot className="w-5 h-5" />
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#030014] border-b border-white/5 p-6 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-gray-400 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                onOpenChat();
                setIsMobileMenuOpen(false);
              }}
              className="py-4 bg-purple-600/10 border border-purple-500/30 text-purple-300 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <Bot className="w-5 h-5" /> Ask AI Assistant
            </button>
            <a 
              href={hireMeUrl} 
              className="py-4 bg-purple-600 text-center rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-900/40"
            >
              <Mail className="w-5 h-5" /> Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
