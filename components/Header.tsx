
import React from 'react';

interface HeaderProps {
  connected: boolean;
  address: string | null;
  onConnect: () => void;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ connected, address, onConnect, onMenuToggle }) => {
  return (
    <header className="h-20 glass border-b border-white/5 flex items-center justify-between px-4 md:px-8 z-10 sticky top-0">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuToggle}
          className="p-2 hover:bg-white/5 rounded-lg lg:hidden text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold tracking-tight text-white lg:hidden">AuraFlow</h1>
        <div className="hidden lg:flex items-center gap-2 text-sm text-gray-400">
          <span>TVL:</span>
          <span className="text-white font-semibold">$128.4M</span>
          <span className="ml-4">24h Vol:</span>
          <span className="text-white font-semibold">$14.2M</span>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden sm:flex items-center px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] md:text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
          Mainnet-Beta
        </div>
        
        <button 
          onClick={onConnect}
          className={`flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 ${
            connected 
              ? 'bg-white/5 border border-white/10 text-gray-200' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:opacity-90 active:scale-95'
          }`}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <span className="truncate max-w-[80px] md:max-w-none">
            {connected ? address : 'Connect'}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
