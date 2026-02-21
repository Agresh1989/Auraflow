
import React, { useState } from 'react';

interface CreateVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateVaultModal: React.FC<CreateVaultModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    riskTolerance: 'Medium',
    leverage: 1,
    rebalanceFrequency: 'Daily',
    aiModel: 'gemini-3-flash-preview',
    thinkingLevel: 'Standard',
    assets: ['SOL', 'USDC']
  });

  if (!isOpen) return null;

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Agent Name</label>
              <input 
                type="text" 
                placeholder="e.g. SOL-USDC Alpha Hunter"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Strategy Description</label>
              <textarea 
                placeholder="Describe the core logic of your autonomous agent..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 transition-all h-32 resize-none"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Max Leverage</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 transition-all"
                  value={formData.leverage}
                  onChange={(e) => setFormData({...formData, leverage: Number(e.target.value)})}
                >
                  <option value={1}>1x (Spot)</option>
                  <option value={2}>2x</option>
                  <option value={3}>3x</option>
                  <option value={5}>5x (Degenerate)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Rebalance Freq</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 transition-all"
                  value={formData.rebalanceFrequency}
                  onChange={(e) => setFormData({...formData, rebalanceFrequency: e.target.value})}
                >
                  <option>Hourly</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Event-Driven</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Target Assets</label>
              <div className="flex flex-wrap gap-2">
                {['SOL', 'USDC', 'JUP', 'PYTH', 'BONK'].map(asset => (
                  <button 
                    key={asset}
                    onClick={() => {
                      const newAssets = formData.assets.includes(asset) 
                        ? formData.assets.filter(a => a !== asset)
                        : [...formData.assets, asset];
                      setFormData({...formData, assets: newAssets});
                    }}
                    className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                      formData.assets.includes(asset) 
                        ? 'bg-purple-500/20 border-purple-500 text-purple-400' 
                        : 'bg-white/5 border-white/10 text-gray-500 hover:text-white'
                    }`}
                  >
                    {asset}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Risk Tolerance</label>
              <div className="grid grid-cols-3 gap-3">
                {['Low', 'Medium', 'High'].map(risk => (
                  <button 
                    key={risk}
                    onClick={() => setFormData({...formData, riskTolerance: risk})}
                    className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                      formData.riskTolerance === risk 
                        ? 'bg-purple-500/20 border-purple-500 text-purple-400' 
                        : 'bg-white/5 border-white/10 text-gray-500 hover:text-white'
                    }`}
                  >
                    {risk}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">AI Model Configuration</label>
              <div className="space-y-3">
                <div className={`p-4 rounded-xl border transition-all cursor-pointer ${formData.aiModel === 'gemini-3-flash-preview' ? 'bg-purple-500/10 border-purple-500/50' : 'bg-white/5 border-white/10'}`} onClick={() => setFormData({...formData, aiModel: 'gemini-3-flash-preview'})}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">Gemini 3 Flash</span>
                    <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full font-bold">Fastest</span>
                  </div>
                  <p className="text-[10px] text-gray-500">Optimized for high-frequency rebalancing and micro-arb.</p>
                </div>
                <div className={`p-4 rounded-xl border transition-all cursor-pointer ${formData.aiModel === 'gemini-3.1-pro-preview' ? 'bg-purple-500/10 border-purple-500/50' : 'bg-white/5 border-white/10'}`} onClick={() => setFormData({...formData, aiModel: 'gemini-3.1-pro-preview'})}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">Gemini 3.1 Pro</span>
                    <span className="text-[10px] px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-full font-bold">Deep Reasoning</span>
                  </div>
                  <p className="text-[10px] text-gray-500">Best for complex multi-protocol yield farming and risk modeling.</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-xl glass rounded-[2.5rem] overflow-hidden aura-glow border-purple-500/20 shadow-2xl flex flex-col max-h-[90vh]">
        <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div>
            <h3 className="text-2xl font-bold text-white">Deploy Custom Agent</h3>
            <p className="text-sm text-gray-500">Step {step} of 3: {step === 1 ? 'Identity' : step === 2 ? 'Parameters' : 'Intelligence'}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full text-gray-400 transition-all">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'bg-white/10'}`}></div>
            ))}
          </div>
          {renderStep()}
        </div>

        <div className="p-8 border-t border-white/5 bg-white/[0.02] flex justify-between gap-4">
          <button 
            onClick={step === 1 ? onClose : handleBack}
            className="px-8 py-3 rounded-xl font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            {step === 1 ? 'Cancel' : 'Back'}
          </button>
          <button 
            onClick={step === 3 ? onClose : handleNext}
            className="px-10 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:opacity-90 active:scale-95 transition-all"
          >
            {step === 3 ? 'Deploy Agent' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateVaultModal;
