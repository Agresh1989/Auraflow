
import React from 'react';
import { AppView } from '../types';

interface SidebarProps {
  activeView: AppView;
  setView: (view: AppView) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setView, isOpen, onClose }) => {
  const menuItems = [
    { id: AppView.DASHBOARD, label: 'Overview', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { id: AppView.VAULTS, label: 'AI Vaults', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { id: AppView.STAKING, label: 'Staking', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { id: AppView.GOVERNANCE, label: 'Governance', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { id: AppView.DOCS, label: 'Whitepaper', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside className={`fixed lg:static inset-y-0 left-0 w-64 glass border-r border-white/5 flex flex-col z-40 transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg aura-glow">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">AuraFlow</span>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 text-gray-500 hover:text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                activeView === item.id 
                  ? 'bg-purple-600/10 text-purple-400 border border-purple-600/20' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <svg className={`w-5 h-5 ${activeView === item.id ? 'text-purple-400' : 'text-gray-500 group-hover:text-gray-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
              </svg>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6">
          <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-white/10">
            <p className="text-xs text-purple-300 font-semibold mb-1 uppercase tracking-wider">Pro Tier</p>
            <p className="text-sm text-gray-300 mb-3">Stake 5,000 $AURA to unlock advanced agents.</p>
            <button className="w-full py-2 bg-white text-gray-900 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors">Upgrade</button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
