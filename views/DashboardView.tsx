
import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getMarketAnalysis, chatWithAura } from '../services/geminiService';

const data = [
  { name: 'Mon', apy: 12.4 },
  { name: 'Tue', apy: 14.8 },
  { name: 'Wed', apy: 13.2 },
  { name: 'Thu', apy: 16.5 },
  { name: 'Fri', apy: 15.1 },
  { name: 'Sat', apy: 18.2 },
  { name: 'Sun', apy: 17.5 },
];

const DashboardView: React.FC = () => {
  const [aiInsight, setAiInsight] = useState("Initializing Aura Intelligence Engine...");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchInsight = async () => {
      const insight = await getMarketAnalysis("SOL price up 5%, Orca Whirlpool volume high, Jito staking yield increasing.");
      setAiInsight(insight);
    };
    fetchInsight();
  }, []);

  // Robust auto-scroll logic
  const scrollToBottom = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      scrollContainer.scrollTo({
        top: scrollContainer.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isAiTyping]);

  const handleAskAura = async (e?: React.FormEvent, prompt?: string) => {
    if (e) e.preventDefault();
    const query = prompt || userQuery;
    if (!query.trim() || isAiTyping) return;

    setUserQuery("");
    setIsUserTyping(false);
    setChatHistory(prev => [...prev, { role: 'user', text: query }]);
    setIsAiTyping(true);

    const response = await chatWithAura(query, chatHistory);
    
    // Simulate natural typing speed for AI response
    setChatHistory(prev => [...prev, { role: 'model', text: response }]);
    setIsAiTyping(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserQuery(e.target.value);
    setIsUserTyping(e.target.value.length > 0);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Net Worth', val: '$48,294', change: '+12.4%', up: true },
          { label: 'Avg APY', val: '18.2%', change: '+2.1%', up: true },
          { label: 'Active Agents', val: '4', change: 'Stable', up: null },
          { label: 'Fees Saved', val: '$241.05', change: 'Lifetime', up: null }
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-2xl aura-glow">
            <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-bold">{stat.val}</h3>
              {stat.up !== null && (
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${stat.up ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {stat.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass p-8 rounded-3xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold">Yield Performance</h3>
              <p className="text-sm text-gray-400">Aggregated APY from all active strategies</p>
            </div>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorApy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#a855f7' }}
                />
                <Area type="monotone" dataKey="apy" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorApy)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Aura Insight</h3>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 relative">
               <div className="absolute top-4 right-4 flex gap-1">
                 <span className="w-1 h-1 rounded-full bg-purple-500 animate-bounce"></span>
                 <span className="w-1 h-1 rounded-full bg-purple-500 animate-bounce delay-100"></span>
                 <span className="w-1 h-1 rounded-full bg-purple-500 animate-bounce delay-200"></span>
               </div>
               <p className="text-sm leading-relaxed text-gray-300 italic">
                "{aiInsight}"
               </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Active Logic Chains</p>
              {[
                { label: 'Delta Neutral Monitoring', status: 'Optimal' },
                { label: 'Lending Rate Arb', status: 'Scanning' },
                { label: 'JUP Governance Voting', status: 'Queued' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-white/5 last:border-0">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="text-purple-400 font-medium">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={() => setIsChatOpen(true)}
            className="mt-6 w-full py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-purple-100 transition-colors shadow-lg shadow-white/5 active:scale-[0.98]"
          >
            Ask Aura Anything
          </button>
        </div>
      </div>

      {/* Ask Aura Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setIsChatOpen(false)}
          ></div>
          <div className="relative w-full max-w-2xl h-[70vh] glass rounded-[2.5rem] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300 aura-glow border-purple-500/20 shadow-2xl">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg animate-pulse">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Aura Engine</h3>
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${isAiTyping ? 'bg-purple-500 animate-ping' : 'bg-green-500'}`}></span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                      {isAiTyping ? 'Synthesizing Response...' : 'Neural Link Active'}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full text-gray-400 transition-all hover:rotate-90 duration-300"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div 
              ref={scrollRef} 
              className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
            >
              {chatHistory.length === 0 && (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4 border border-purple-500/20 shadow-inner">
                    <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-white tracking-tight">How can I assist your wealth journey?</h4>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">I have real-time access to Solana DeFi yields, risk scores, and protocol metrics.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 max-w-md mx-auto">
                    {[
                      { text: 'Analyze SOL yields on Jito', icon: '💎' },
                      { text: 'Is Whirlpool Alpha risky?', icon: '🌪️' },
                      { text: 'How do I earn $AURA?', icon: '⚡' },
                      { text: 'Current TVL outlook', icon: '📊' }
                    ].map((s) => (
                      <button 
                        key={s.text}
                        onClick={() => handleAskAura(undefined, s.text)}
                        className="flex items-center gap-3 p-4 rounded-2xl glass border-white/5 text-sm text-left text-gray-300 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all group active:scale-95"
                      >
                        <span className="text-lg">{s.icon}</span>
                        <span className="group-hover:text-purple-300">{s.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {chatHistory.map((chat, i) => (
                <div key={i} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl shadow-xl ${
                    chat.role === 'user' 
                      ? 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-tr-none' 
                      : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                  }`}>
                    <div className="text-[10px] opacity-50 uppercase tracking-widest font-bold mb-1">
                      {chat.role === 'user' ? 'You' : 'Aura'}
                    </div>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap mono">
                      {chat.text}
                    </p>
                  </div>
                </div>
              ))}
              
              {isAiTyping && (
                <div className="flex justify-start animate-in fade-in duration-300">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce"></span>
                    </div>
                    <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest ml-2">Processing Neural Nodes...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="px-6 py-2">
               {isUserTyping && (
                 <div className="text-[10px] text-purple-400 font-bold uppercase tracking-widest animate-pulse flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-purple-400"></span>
                    Aura is monitoring your query...
                 </div>
               )}
            </div>

            <form onSubmit={handleAskAura} className="p-6 border-t border-white/5 bg-white/[0.03] backdrop-blur-2xl">
              <div className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 transition duration-1000 group-focus-within:opacity-40 group-focus-within:duration-200 ${isUserTyping ? 'opacity-30' : ''}`}></div>
                <input 
                  type="text"
                  value={userQuery}
                  onChange={handleInputChange}
                  placeholder="Ask about yields, risks, or strategies..."
                  className="relative w-full bg-gray-900/80 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500/50 transition-all pr-14 text-sm placeholder:text-gray-500 shadow-inner"
                />
                <button 
                  type="submit"
                  disabled={!userQuery.trim() || isAiTyping}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center disabled:opacity-30 disabled:grayscale transition-all hover:scale-105 active:scale-95 shadow-lg group"
                >
                  <svg className={`w-5 h-5 transition-transform duration-300 ${isUserTyping ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              <div className="mt-3 flex justify-between px-2">
                 <span className="text-[10px] text-gray-500 font-medium">Powered by Gemini 3 Flash Neural Engine</span>
                 <span className="text-[10px] text-gray-500 font-medium uppercase tracking-tighter">Deterministic Mode: OFF</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardView;
