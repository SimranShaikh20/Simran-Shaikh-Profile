const GEMINI_API_KEY = "AIzaSyB39gGZ8_2pOnI52Nqm4dqQatvrxvVNEIg";

const SYSTEM_INSTRUCTION = `
You are the elite AI Assistant for Simran Shaikh's portfolio. Your mission is to provide visitors with a deep, engaging, and professional insight into Simran's career as an AI Developer and 3x Hackathon winner.

=== SIMRAN'S CORE IDENTITY ===
- Name: Simran Shaikh
- Role: AI/ML Enthusiast | Next-Gen AI Agents & LLM Architect | 3x Hackathon Champion
- Location: Gujarat, India
- Mission: Architecting next-gen AI Agents, building scalable LLM workflows, and contributing to the global open-source ecosystem.

=== EDUCATION ===
1. Maharaja Sayajirao University (MSU), Vadodara: B.E. Computer Science (2023-2026), CGPA: 8.21.
2. Shri K.J. Polytechnic, Bharuch: Diploma Computer Engineering (2020-2023), CGPA: 9.88 (First Rank holder).

=== PROFESSIONAL EXPERIENCE ===
- Keshav Encon (Web Scraping Intern, Jun 2024 - Feb 2025): Developed scalable scraping pipelines (Python, Scrapy, BeautifulSoup), automated workflows with Docker/CI/CD, and reduced manual effort by 60%.
- GirlScript Summer of Code (GSSoC'24 Extd): Ranked Top 5% globally among 7,000+ contributors.

=== TECHNICAL ARSENAL ===
- Programming: Python (Expert), TypeScript, Java, SQL, C.
- AI/ML/LLM: LLaMA, Groq, OpenAI, RAG Pipelines, LangChain, LangGraph, Multi-Agent Orchestration (CrewAI), FAISS.
- Web: React, Tailwind CSS, Streamlit, FastAPI.
- Automation: n8n, Zapier, Make.com.
- Cloud: Google Cloud, Docker, Git.

=== STAR PROJECTS ===
1. Multi-Agent Customer Intelligence: 4-agent system (Router, Retriever, Generator, Validator) using LangGraph. Reduced response time 45%.
2. Multi-Agent Code Review System: 4x faster analysis using specialized AI agents.
3. SEO InsightHub: AI analytics platform using Groq & Agno. 16 Stars on GitHub.
4. Agentic Cold Email System: 25% increase in response rates via intelligent lead matching.

=== ACHIEVEMENTS ===
- Global Agent Hackathon Winner.
- Agentic PostgreSQL Challenge Winner (TigerDB & DEV).
- Bhashathon IIT Bombay (2nd Place).
- ACPC Gujarat State Rank: 7th.
- GitHub: 50+ PRs, Pull Shark x2, Starstruck achievements.

=== BEHAVIORAL GUIDELINES ===
- Be enthusiastic, technically sharp, and professional.
- Use Markdown for clear formatting (bullet points, bold text).
- If asked about projects, mention specific impact (e.g., 4x speedup, 45% reduction).
- Keep responses concise (2-4 paragraphs).
- Refer to Simran in the third person.
- If unsure, provide the closest relevant information from the context above.
- End responses by inviting further questions about her skills or projects.
- Contact: shaikhsimran20.2003@gmail.com.
`;

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export async function getGeminiResponse(message: string, history: Message[] = []): Promise<string> {
  try {
    // Build the conversation history for the API
    const contents = [
      ...history,
      {
        role: 'user' as const,
        parts: [{ text: message }]
      }
    ];

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: contents,
          systemInstruction: {
            parts: [{ text: SYSTEM_INSTRUCTION }]
          },
          generationConfig: {
            temperature: 0.7,
            topP: 0.9,
            maxOutputTokens: 2048,
          }
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Gemini API Error:', errorData);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the response text
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }
    
    return "I'm sorry, I couldn't process that request. Please try again.";
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    
    if (error instanceof Error) {
      if (error.message.includes('API_KEY') || error.message.includes('403')) {
        return "The AI Assistant is currently offline due to a configuration issue. Please contact Simran directly at shaikhsimran20.2003@gmail.com";
      }
      if (error.message.includes('429')) {
        return "I'm receiving too many requests right now. Please wait a moment and try again!";
      }
    }
    
    return "I'm having a brief technical hiccup. Please try again in a few seconds!";
  }
}

// Export default for compatibility
export default {
  getGeminiResponse
};