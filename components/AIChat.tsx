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

    const aiResponse = await getGeminiResponse(content, history);
    
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
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl shadow-[0_20px_50px_-10px_rgba(124,58,237,0.5)] transition-all duration-500 hover:scale-110 active:scale-90 flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 rounded-full bg-white/20 pulse-ring"></div>
          <Bot className="w-8 h-8 relative z-10 transition-transform group-hover:rotate-12" />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-[3px] border-[#030014] animate-pulse"></div>
        </button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="flex flex-col w-[92vw] md:w-[440px] h-[680px] max-h-[85vh] bg-[#030014]/90 backdrop-blur-3xl rounded-[32px] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 fade-in duration-500">
          {/* Top Bar */}
          <div className="p-6 bg-gradient-to-r from-purple-600/20 to-indigo-600/10 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-900/40">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-black text-white text-lg tracking-tight leading-none">Simran's AI Agent</h3>
                <div className="flex items-center gap-1.5 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Active Intelligence</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Stream */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                <div className={`flex gap-4 max-w-[90%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${m.role === 'user' ? 'bg-indigo-600' : 'bg-purple-600'}`}>
                    {m.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                  </div>
                  <div className={`group relative p-4 rounded-2xl text-sm leading-relaxed border transition-colors ${
                    m.role === 'user' 
                    ? 'bg-indigo-600/10 border-indigo-500/30 text-indigo-50 rounded-tr-none' 
                    : 'bg-white/5 border-white/10 text-gray-100 rounded-tl-none'
                  }`}>
                    <div className="whitespace-pre-wrap font-medium">
                      {m.content}
                    </div>
                    
                    <div className="mt-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] text-gray-500 font-black uppercase tracking-tighter">
                        {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      <button 
                        onClick={() => copyToClipboard(m.content)} 
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest"
                      >
                        <Copy className="w-3 h-3" /> Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-duration:0.6s]"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.1s]"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.2s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Prompting Area */}
          <div className="p-6 bg-black/40 border-t border-white/5 backdrop-blur-xl">
            {/* Suggestions */}
            {messages.length === 1 && !isTyping && (
              <div className="mb-6 space-y-3">
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] px-1">Curated Prompts</p>
                <div className="flex flex-col gap-2">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="group flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-[11px] text-gray-300 transition-all text-left"
                    >
                      {q}
                      <ChevronRight className="w-3 h-3 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                placeholder="Ask intelligence about Simran..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:border-purple-500/50 text-sm text-white transition-all placeholder:text-gray-600"
              />
              <button
                disabled={!input.trim() || isTyping}
                onClick={() => handleSend()}
                className="absolute right-2 top-2 p-2.5 bg-gradient-to-br from-purple-500 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/20 disabled:opacity-40 rounded-xl text-white transition-all active:scale-90"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-2 opacity-20 hover:opacity-40 transition-opacity">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white">
                Powered by Gemini 2.0 Flash
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;