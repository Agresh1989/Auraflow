
import React, { useState } from 'react';
import { Strategy } from '../types';

const STAGED_VAULTS: Strategy[] = [
  {
    id: 'v1',
    name: 'SOL Stability Max',
    description: 'Auto-compounds SOL staking rewards through Jito and LST looping with 3x leverage safety caps.',
    riskScore: 'Low',
    apy: 12.4,
    tvl: '$42.1M',
    category: 'Lending',
    status: 'Active',
    icon: '💎'
  },
  {
    id: 'v2',
    name: 'Whirlpool Alpha',
    description: 'Dynamic concentrated liquidity management on Orca with AI-driven range adjustment.',
    riskScore: 'High',
    apy: 48.2,
    tvl: '$12.8M',
    category: 'Liquidity',
    status: 'Optimizing',
    icon: '🌪️'
  },
  {
    id: 'v3',
    name: 'Meteora Dynamic Arb',
    description: 'Exploits micro-arbitrage opportunities across Meteora DLMM pools with flash-loan execution.',
    riskScore: 'Medium',
    apy: 24.5,
    tvl: '$8.4M',
    category: 'Arbitrage',
    status: 'Active',
    icon: '⚡'
  },
  {
    id: 'v4',
    name: 'USDC Yield Harvester',
    description: 'Routes USDC across Kamino, MarginFi, and Drift based on real-time lending rates.',
    riskScore: 'Low',
    apy: 8.9,
    tvl: '$65.2M',
    category: 'Lending',
    status: 'Active',
    icon: '💵'
  }
];

const VaultsView: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredVaults = filter === 'All' 
    ? STAGED_VAULTS 
    : STAGED_VAULTS.filter(v => v.category === filter);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2">Strategy Vaults</h2>
          <p className="text-gray-400">Deploy capital into battle-tested, AI-managed on-chain strategies.</p>
        </div>
        <div className="flex gap-2">
          {['All', 'Lending', 'Liquidity', 'Arbitrage'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40 ring-1 ring-purple-400/50' 
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredVaults.map((vault) => (
          <div 
            key={vault.id} 
            className="glass p-7 rounded-[2.5rem] aura-glow group hover:scale-[1.03] hover:border-purple-400/50 hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.4)] transition-all duration-500 cursor-pointer flex flex-col h-full relative overflow-hidden"
          >
            {/* Enhanced Shimmering Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0">
              {/* Primary Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent skew-x-12"></div>
              {/* Secondary Subtle Sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_3s_infinite_0.75s] bg-gradient-to-r from-transparent via-purple-400/[0.05] to-transparent skew-x-12"></div>
              {/* Ambient Glow Pulse */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_70%)] group-hover:animate-pulse"></div>
              {/* Moving Background Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/[0.03] to-transparent bg-[length:200%_100%] group-hover:animate-[shimmer-bg_8s_linear_infinite] opacity-50"></div>
            </div>

            {/* Background color glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/[0.04] group-hover:to-blue-600/[0.04] transition-all duration-700 pointer-events-none z-0"></div>

            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="text-4xl bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-purple-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                {vault.icon}
              </div>
              <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-colors duration-500 ${
                vault.riskScore === 'Low' ? 'bg-green-500/10 text-green-400 border-green-500/20 group-hover:border-green-500/40' : 
                vault.riskScore === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20 group-hover:border-yellow-500/40' : 
                'bg-red-500/10 text-red-400 border-red-500/20 group-hover:border-red-500/40'
              }`}>
                {vault.riskScore} Risk
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors duration-500 relative z-10">{vault.name}</h3>
            <p className="text-gray-400 text-sm mb-8 line-clamp-3 leading-relaxed flex-grow relative z-10 group-hover:text-gray-200 transition-colors">
              {vault.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-purple-500/30 group-hover:bg-purple-500/[0.02] transition-all duration-500">
                <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-tighter">Target APY</p>
                <p className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors">{vault.apy}%</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-purple-500/30 group-hover:bg-purple-500/[0.02] transition-all duration-500">
                <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-tighter">Vault TVL</p>
                <p className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">{vault.tvl}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 relative z-10">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full shadow-sm ${vault.status === 'Active' ? 'bg-green-500 shadow-green-500/40' : 'bg-blue-500 animate-pulse shadow-blue-500/40'}`}></span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-tight">{vault.status}</span>
              </div>
              
              <button className="group/btn relative px-10 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl text-sm font-black shadow-[0_8px_25px_-5px_rgba(139,92,246,0.4)] active:scale-90 transition-all duration-500 group-hover:scale-110 group-hover:translate-y-[-4px] group-hover:shadow-[0_15px_35px_-8px_rgba(139,92,246,0.7)] group-hover:from-blue-400 group-hover:to-purple-500 ring-0 group-hover:ring-2 ring-purple-400/30 overflow-hidden">
                <span className="relative z-10 uppercase tracking-wider">Deposit</span>
                
                {/* Internal button shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.2s_infinite] transition-all duration-500"></div>
                
                {/* Glow pulse layer */}
                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 bg-white/10 blur-md transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VaultsView;
