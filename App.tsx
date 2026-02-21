
import React, { useState, useEffect } from 'react';
import { AppView } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './views/DashboardView';
import VaultsView from './views/VaultsView';
import StakingView from './views/StakingView';
import GovernanceView from './views/GovernanceView';
import DocsView from './views/DocsView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const connectWallet = () => {
    // Simulated wallet connection
    setWalletConnected(true);
    setAddress("Aura...F7x9");
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleSetView = (view: AppView) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return <DashboardView />;
      case AppView.VAULTS: return <VaultsView />;
      case AppView.STAKING: return <StakingView />;
      case AppView.GOVERNANCE: return <GovernanceView />;
      case AppView.DOCS: return <DocsView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#030712] text-gray-100 selection:bg-purple-500/30">
      <Sidebar 
        activeView={currentView} 
        setView={handleSetView} 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header 
          connected={walletConnected} 
          address={address} 
          onConnect={connectWallet} 
          onMenuToggle={toggleMobileMenu}
        />
        
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 pb-20">
          {renderView()}
        </div>
      </main>

      {/* Global Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-10 glass border-t border-white/5 flex items-center justify-between px-4 md:px-6 text-[10px] md:text-xs text-gray-400 z-50">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="hidden xs:inline">Solana Mainnet: </span>
            <span>2,450 TPS</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="hidden xs:inline">Aura AI: </span>
            <span>Active</span>
          </div>
        </div>
        <div className="mono uppercase tracking-widest truncate ml-2">
          $AURA: $1.42 <span className="text-green-400">(+4.2%)</span>
        </div>
      </div>
    </div>
  );
};

export default App;
