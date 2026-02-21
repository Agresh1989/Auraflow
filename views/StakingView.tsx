
import React from 'react';

const StakingView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold mb-4 gradient-text">Power the Aura Economy</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Stake $AURA to reduce protocol fees, unlock pro-tier agents, and participate in governance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Staked Balance', val: '12,450 $AURA', sub: '~$17,679' },
          { label: 'Yield Multiplier', val: '1.5x', sub: 'Staked for 6mo+' },
          { label: 'Rewards Earned', val: '412.5 $AURA', sub: 'Claimable' }
        ].map((item, i) => (
          <div key={i} className="glass p-6 rounded-2xl aura-glow text-center">
            <p className="text-sm text-gray-400 mb-1">{item.label}</p>
            <h3 className="text-2xl font-bold mb-1">{item.val}</h3>
            <p className="text-xs text-purple-400">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="glass p-10 rounded-3xl flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-bold">Staking Mechanism</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Available to Stake</span>
              <span className="font-bold">5,000 $AURA</span>
            </div>
            <div className="relative">
              <input 
                type="number" 
                placeholder="0.00" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-2xl font-bold outline-none focus:border-purple-500/50 transition-all"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-purple-600/20 text-purple-400 rounded-lg text-xs font-bold hover:bg-purple-600/30">MAX</button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {['7 Days', '30 Days', '90 Days', '1 Year'].map((dur) => (
                <button key={dur} className="py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase hover:bg-white/10 transition-all">{dur}</button>
              ))}
            </div>
            <button className="w-full py-4 bg-white text-gray-900 rounded-2xl font-bold text-lg hover:bg-purple-100 transition-colors shadow-xl">
              Confirm Staking
            </button>
          </div>
        </div>

        <div className="w-full md:w-80 space-y-6">
          <h4 className="text-lg font-bold">Tier Benefits</h4>
          <ul className="space-y-4">
            {[
              { tier: 'Tier 1 (1k+)', benefit: '10% Fee Reduction', active: true },
              { tier: 'Tier 2 (5k+)', benefit: 'Pro Agent Unlocked', active: true },
              { tier: 'Tier 3 (20k+)', benefit: 'Revenue Sharing', active: false },
              { tier: 'Tier 4 (100k+)', benefit: 'Alpha Priority', active: false }
            ].map((benefit, i) => (
              <li key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${benefit.active ? 'bg-purple-600/5 border-purple-500/20' : 'bg-white/5 border-white/5'}`}>
                <div className={`w-2 h-2 rounded-full ${benefit.active ? 'bg-purple-500' : 'bg-gray-600'}`}></div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400">{benefit.tier}</p>
                  <p className={`text-sm font-semibold ${benefit.active ? 'text-white' : 'text-gray-500'}`}>{benefit.benefit}</p>
                </div>
                {benefit.active && (
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StakingView;
