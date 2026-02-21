
import React from 'react';

const GovernanceView: React.FC = () => {
  const proposals = [
    { id: 'AFP-012', title: 'Add Kamino Lending Looping Agent', status: 'Voting', votes: '1.2M / 2.0M', outcome: 'Passing' },
    { id: 'AFP-011', title: 'Adjust Performance Fee to 12%', status: 'Executed', votes: '4.5M', outcome: 'Success' },
    { id: 'AFP-010', title: 'Enable Raydium CLMM Integration', status: 'Executed', votes: '3.8M', outcome: 'Success' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
       <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Governance</h2>
          <p className="text-gray-400">Shape the future of the AuraFlow engine.</p>
        </div>
        <button className="px-6 py-2.5 glass text-white rounded-xl text-sm font-bold border-purple-500/30 border">
          Create Proposal
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-bold text-white">Active Proposals</h3>
          <div className="grid grid-cols-1 gap-4">
            {proposals.map((prop) => (
              <div key={prop.id} className="glass p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 hover:border-white/20 transition-all cursor-pointer group">
                <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl min-w-[100px]">
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Status</span>
                  <span className={`text-sm font-bold ${prop.status === 'Voting' ? 'text-purple-400' : 'text-green-500'}`}>{prop.status}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-purple-400 font-mono font-bold uppercase">{prop.id}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                    <span className="text-xs text-gray-500">Proposed 2 days ago</span>
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-purple-300 transition-colors">{prop.title}</h4>
                </div>

                <div className="w-full md:w-64">
                   <div className="flex justify-between text-xs mb-2">
                      <span className="text-gray-400">Quorum: {prop.votes}</span>
                      <span className="font-bold text-green-400">{prop.outcome}</span>
                   </div>
                   <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full bg-purple-500 ${prop.status === 'Voting' ? 'w-2/3' : 'w-full'}`}></div>
                   </div>
                </div>

                <button className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white">Governance Framework</h3>
          <div className="glass p-6 rounded-3xl space-y-6 border-purple-500/20">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider">Voting Mechanism</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Hybrid model: <span className="text-white">Quadratic Voting</span> for community-led parameter adjustments and <span className="text-white">Token-Weighted Voting</span> for large-scale treasury allocations.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider">Proposal Lifecycle</h4>
              <ul className="text-xs text-gray-400 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">1.</span>
                  <span><strong>Discussion:</strong> 48h temp check on Discord/Forum.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">2.</span>
                  <span><strong>On-Chain:</strong> Minimum 50k $AURA to propose.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">3.</span>
                  <span><strong>Voting:</strong> 5-day active voting period.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">4.</span>
                  <span><strong>Execution:</strong> 24h timelock before on-chain execution.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider">Quorum & Thresholds</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-[10px] text-gray-500 uppercase">Quorum</p>
                  <p className="text-sm font-bold text-white">15% Supply</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-[10px] text-gray-500 uppercase">Approval</p>
                  <p className="text-sm font-bold text-white">66% Support</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <p className="text-[10px] text-gray-500 italic">
                *Successful proposals are executed via the AuraDAO Program on Solana, utilizing multisig-guarded PDAs for treasury safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceView;
