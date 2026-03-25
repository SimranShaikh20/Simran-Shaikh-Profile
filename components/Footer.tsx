import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Heart } from 'lucide-react';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <button
            onClick={() => scrollTo('hero')}
            className="text-2xl font-black tracking-tighter text-white hover:text-purple-400 transition-colors"
          >
            SIMRAN<span className="text-purple-600">.</span>SHAIKH
          </button>
          <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
            Building the future of autonomous intelligence with ethical tech and open collaboration.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-all"
              >
                {React.cloneElement(link.icon as React.ReactElement, { className: "w-5 h-5" })}
              </a>
            ))}
          </div>
          <div className="text-gray-500 text-xs flex items-center gap-1.5 font-medium">
            &copy; {new Date().getFullYear()} Simran Shaikh. Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </div>
        </div>

        <nav className="flex gap-8 text-sm font-bold text-gray-500">
          {[
            { name: 'Home',     id: 'hero' },
            { name: 'Projects', id: 'projects' },
            { name: 'Skills',   id: 'skills' },
            { name: 'Contact',  id: 'contact' },
          ].map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="hover:text-purple-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
