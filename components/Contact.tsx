
import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github, Twitter, MapPin, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-purple-500 uppercase">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold">Let's Build <span className="gradient-text">Greatness</span></h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card p-10 rounded-3xl space-y-8">
              <h4 className="text-2xl font-bold text-white">Have a cool project in mind?</h4>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new AI projects, open-source collaborations, or unique opportunities in the intelligence workspace.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-purple-600/10 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-600/20 transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-500 uppercase">Email</h5>
                    <p className="text-white font-medium">shaikhsimran20.2003@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600/20 transition-all">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-500 uppercase">LinkedIn</h5>
                    <p className="text-white font-medium">simran-shaikh-39207a23b</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-cyan-600/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-600/20 transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-500 uppercase">Location</h5>
                    <p className="text-white font-medium">Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-10 rounded-3xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-purple-500 text-white transition-all"
                  placeholder="Simran Shaikh"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Your Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-purple-500 text-white transition-all"
                  placeholder="simran@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Message</label>
              <textarea 
                rows={5}
                required
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-purple-500 text-white transition-all resize-none"
                placeholder="How can we collaborate?"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                submitted ? 'bg-green-600 text-white' : 'bg-purple-600 hover:bg-purple-500 text-white shadow-xl shadow-purple-900/20'
              }`}
            >
              {isSubmitting ? 'Sending...' : submitted ? <><CheckCircle className="w-5 h-5" /> Message Sent!</> : <><Send className="w-5 h-5" /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
