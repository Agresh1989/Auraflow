
import React from 'react';

const DocsView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-4">
        <h1 className="text-4xl font-black gradient-text">AuraFlow Architecture</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          The first truly autonomous wealth engine built for Solana's hyper-performance infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs">1</span>
            Smart Contract Layer
          </h2>
          <div className="glass p-6 rounded-2xl text-sm text-gray-400 leading-relaxed space-y-3">
            <p><strong className="text-white">Vault Program (Anchor):</strong> PDAs act as user-controlled yield silos with limited agent permissions.</p>
            <p><strong className="text-white">Strategy Module:</strong> Composable interfaces for Orca Whirlpools, Raydium CLMM, and Kamino lending.</p>
            <p><strong className="text-white">Risk Oracle:</strong> Circuit breaker logic that halts rebalances during high volatility.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">2</span>
            AI Decision Engine
          </h2>
          <div className="glass p-6 rounded-2xl text-sm text-gray-400 leading-relaxed space-y-3">
            <p><strong className="text-white">Scoring:</strong> Gemini-3 models rank yield opportunities across 50+ pools every 30 seconds.</p>
            <p><strong className="text-white">Rebalancing:</strong> Off-chain bots trigger on-chain instructions via private RPC (Triton).</p>
            <p><strong className="text-white">Determinism:</strong> AI only proposes ranges; smart contracts enforce safety bounds.</p>
          </div>
        </section>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Security Audit Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl space-y-3 border-red-500/10">
            <h3 className="text-sm font-bold text-red-400 uppercase">Core Components</h3>
            <ul className="text-xs text-gray-400 space-y-2">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-400 rounded-full"></span> SPL Token Extensions</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-400 rounded-full"></span> Anchor Vault Program</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-400 rounded-full"></span> AI Oracle Signer Logic</li>
            </ul>
          </div>
          <div className="glass p-6 rounded-2xl space-y-3 border-blue-500/10">
            <h3 className="text-sm font-bold text-blue-400 uppercase">Audit Partners</h3>
            <ul className="text-xs text-gray-400 space-y-2">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span> OtterSec (Mainnet)</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span> Zellic (AI Logic)</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span> Neodyme (Economic)</li>
            </ul>
          </div>
          <div className="glass p-6 rounded-2xl space-y-3 border-green-500/10">
            <h3 className="text-sm font-bold text-green-400 uppercase">Audit Phases</h3>
            <ul className="text-xs text-gray-400 space-y-2">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-green-400 rounded-full"></span> 1. Pre-Audit Review</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-green-400 rounded-full"></span> 2. Live Stress Testing</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-green-400 rounded-full"></span> 3. Final Remediation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Tokenomics Design ($AURA)</h2>
        <div className="glass p-8 rounded-3xl border-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-purple-400 uppercase mb-4">Supply Allocation</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Community & Rewards', val: '40%', color: 'bg-purple-500' },
                    { label: 'Ecosystem Treasury', val: '20%', color: 'bg-blue-500' },
                    { label: 'Core Contributors', val: '20%', color: 'bg-indigo-500' },
                    { label: 'Strategic Investors', val: '20%', color: 'bg-pink-500' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-white font-bold">{item.val}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: item.val }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-xs text-gray-500 uppercase mb-1">Total Fixed Supply</p>
                <p className="text-2xl font-black text-white">1,000,000,000 $AURA</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold text-purple-400 uppercase">Utility & Value Accrual</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">⚖️</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Governance</h4>
                    <p className="text-xs text-gray-400">Vote on fee parameters, agent logic updates, and new vault integrations.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">📉</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Fee Discounts</h4>
                    <p className="text-xs text-gray-400">Stakers receive up to 50% discount on performance fees across all vaults.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">🤖</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Agent Access</h4>
                    <p className="text-xs text-gray-400">Holding $AURA unlocks high-frequency "Alpha Agents" for custom strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Roadmap to TokenTon 2026</h2>
        <div className="space-y-4">
          {[
            { phase: 'Phase 1: Foundation', desc: 'Mainnet launch of 3 core vaults (Lending, LST, Stable Arb). $AURA TGE on DeAura.', done: true },
            { phase: 'Phase 2: Agent Evolution', desc: 'Deployment of LLM-native strategy agents with natural language execution.', done: false },
            { phase: 'Phase 3: Institutional Tier', desc: 'Permissioned vaults for high-net-worth individuals with KYC integration.', done: false }
          ].map((step, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden">
               {step.done && <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>}
               <div className={`text-sm font-bold min-w-[120px] ${step.done ? 'text-purple-400' : 'text-gray-500'}`}>
                 {step.phase}
               </div>
               <div className="text-sm text-gray-300">
                 {step.desc}
               </div>
            </div>
          ))}
        </div>
      </section>

      <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 text-center">
        <h3 className="text-2xl font-bold mb-4">Audit Ready</h3>
        <p className="text-gray-400 mb-6">Our core contracts have undergone preliminary reviews for the Codespect Audit 2025.</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 glass rounded-xl text-sm font-bold">View GitHub</button>
          <button className="px-6 py-2 glass rounded-xl text-sm font-bold">Audit PDF</button>
        </div>
      </div>
    </div>
  );
};

export default DocsView;
