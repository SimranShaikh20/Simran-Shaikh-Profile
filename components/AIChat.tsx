import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Trash2, Copy, Sparkles, Bot, User, RefreshCw, ChevronRight } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const SUGGESTED_QUESTIONS = [
  "What hackathons has Simran won?",
  "Tell me about the Code Review System",
  "What are Simran's AI/ML skills?",
  "Show me Simran's top 3 projects",
  "How can I contact Simran?"
];

interface AIChatProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, setIsOpen }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Hello! I'm Simran's dedicated AI agent. I have full knowledge of her background, projects, and hackathon victories. What can I help you discover today?", 
      timestamp: new Date() 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSend = async (content: string = input) => {
    if (!content.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', content, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const history = messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'model' as 'user' | 'model',
      parts: [{ text: m.content }]
    }));

    const aiResponse = await getGeminiResponse(content);
    
    const assistantMessage: Message = { 
      role: 'assistant', 
      content: aiResponse, 
      timestamp: new Date() 
    };
    
    setMessages(prev => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

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

      {/* Chat Interface */}
      {isOpen && (
        <div className="flex flex-col w-[94vw] md:w-[460px] h-[720px] max-h-[88vh] bg-[#030014]/95 backdrop-blur-3xl rounded-[40px] border border-white/10 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-12 fade-in duration-500">
          {/* Top Bar */}
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

          {/* Messages Stream */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-7 space-y-10 custom-scrollbar">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-6 duration-500`}>
                <div className={`flex gap-5 max-w-[92%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border ${m.role === 'user' ? 'bg-indigo-600 border-indigo-400/30' : 'bg-purple-600 border-purple-400/30'}`}>
                    {m.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
                  </div>
                  <div className={`group relative p-5 rounded-3xl text-sm leading-relaxed border transition-all duration-300 ${
                    m.role === 'user' 
                    ? 'bg-indigo-600/15 border-indigo-500/40 text-indigo-50 rounded-tr-none' 
                    : 'bg-white/[0.03] border-white/10 text-gray-100 rounded-tl-none hover:border-purple-500/30'
                  }`}>
                    <div className="whitespace-pre-wrap font-medium">
                      {m.content}
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
            
            {isTyping && (
              <div className="flex gap-5 items-center">
                <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center border border-purple-400/30">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce [animation-duration:0.6s]"></div>
                  <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.1s]"></div>
                  <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.2s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Prompting Area */}
          <div className="p-8 bg-black/60 border-t border-white/10 backdrop-blur-3xl">
            {/* Suggestions */}
            {messages.length === 1 && !isTyping && (
              <div className="mb-8 space-y-4">
                <p className="text-[11px] text-gray-500 font-black uppercase tracking-[0.3em] px-2">Knowledge Domains</p>
                <div className="flex flex-col gap-3">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="group flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-[12px] text-gray-300 transition-all text-left shadow-lg hover:translate-x-1"
                    >
                      {q}
                      <ChevronRight className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Query Simran's expertise..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-7 pr-20 focus:outline-none focus:border-purple-500/60 text-base text-white transition-all placeholder:text-gray-600"
              />
              <button
                disabled={!input.trim() || isTyping}
                onClick={() => handleSend()}
                className="absolute right-3 top-3 p-3.5 bg-gradient-to-br from-purple-500 to-indigo-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] disabled:opacity-40 rounded-xl text-white transition-all active:scale-90"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mt-5 flex items-center justify-center gap-3 opacity-30">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                Gemini 2.0 Flash Core
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;