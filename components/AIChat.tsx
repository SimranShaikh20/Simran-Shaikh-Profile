
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Trash2, Copy, Sparkles, Bot, User, RefreshCw } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const SUGGESTED_QUESTIONS = [
  "What hackathons has Simran won?",
  "Tell me about the Multi-Agent Code Review System",
  "What are Simran's AI/ML skills?",
  "What's Simran's educational background?",
  "Show me Simran's top 3 projects",
  "What work experience does Simran have?",
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
      content: "Hi! I'm Simran's AI assistant. I can tell you about her projects, hackathon wins, technical skills, and experience. What would you like to know?", 
      timestamp: new Date() 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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

  const clearChat = () => {
    setMessages([{ 
      role: 'assistant', 
      content: "Chat reset! I'm ready for new questions about Simran. What's on your mind?", 
      timestamp: new Date() 
    }]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group bg-purple-600 hover:bg-purple-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Open AI Assistant"
        >
          <div className="absolute inset-0 rounded-full bg-purple-500 pulse-ring"></div>
          <MessageSquare className="w-7 h-7 relative z-10" />
          <span className="absolute right-full mr-4 px-4 py-2 bg-[#030014] border border-purple-500/30 text-white rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block shadow-2xl">
            Ask me anything! 💬
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="flex flex-col w-[92vw] md:w-[420px] h-[650px] max-h-[85vh] glass-card rounded-2xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-500">
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border-b border-white/10 flex items-center justify-between backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-600 rounded-xl shadow-lg shadow-purple-900/40">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base leading-none">Ask me anything! 💬</h3>
                <span className="text-[10px] text-purple-300 uppercase tracking-widest font-black mt-1.5 block opacity-80">Powered by Google Gemini</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={clearChat} 
                className="p-2 hover:bg-white/10 rounded-lg text-purple-300 transition-colors" 
                title="New Conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar bg-[#030014]/40">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`flex gap-3 max-w-[88%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`mt-1 p-1.5 rounded-lg flex-shrink-0 h-fit ${m.role === 'user' ? 'bg-indigo-600' : 'bg-purple-600'}`}>
                    {m.role === 'user' ? <User className="w-3.5 h-3.5 text-white" /> : <Bot className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <div className={`group relative p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    m.role === 'user' 
                    ? 'bg-indigo-600/20 text-indigo-50 border border-indigo-500/20 rounded-tr-none' 
                    : 'bg-white/5 text-purple-50 rounded-tl-none border border-white/10'
                  }`}>
                    <div className="prose prose-invert prose-sm max-w-none">
                      {m.content}
                    </div>
                    
                    <div className="mt-3 flex items-center justify-between gap-4 border-t border-white/5 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] text-gray-500 font-medium">
                        {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      <button 
                        onClick={() => copyToClipboard(m.content)} 
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-[10px]"
                      >
                        <Copy className="w-3 h-3" /> Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 animate-pulse">
                <div className="p-1.5 rounded-lg bg-purple-600 mt-1">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Suggestions Tray */}
          <div className="px-5 pb-3 pt-1 flex flex-wrap gap-2 bg-[#030014]/60">
            {messages.length === 1 && !isTyping && (
              <div className="w-full mb-2">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2 px-1">Suggested Questions</p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="text-[11px] px-3.5 py-2 bg-purple-600/10 hover:bg-purple-600/25 border border-purple-500/20 rounded-xl text-purple-100 text-left transition-all hover:scale-[1.02] active:scale-95"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-5 bg-black/60 border-t border-white/10 backdrop-blur-xl">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my projects, skills, experience..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-5 pr-14 focus:outline-none focus:border-purple-500/50 text-sm text-white transition-all placeholder:text-gray-600"
              />
              <button
                disabled={!input.trim() || isTyping}
                onClick={() => handleSend()}
                className="absolute right-2 p-2.5 bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:grayscale rounded-lg text-white transition-all shadow-lg active:scale-90"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-1.5 opacity-30">
              <Sparkles className="w-2.5 h-2.5 text-purple-400" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-white">
                Gemini 2.0 Flash Intelligence
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
