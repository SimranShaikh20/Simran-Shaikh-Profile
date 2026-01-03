
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  category: 'AI/ML' | 'Web Dev' | 'Automation' | 'Other';
  stars?: number;
  forks?: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Achievement {
  id: string;
  title: string;
  provider: string;
  icon?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
