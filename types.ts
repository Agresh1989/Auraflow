
export interface Strategy {
  id: string;
  name: string;
  description: string;
  riskScore: 'Low' | 'Medium' | 'High';
  apy: number;
  tvl: string;
  category: 'Lending' | 'Liquidity' | 'Delta Neutral' | 'Arbitrage';
  status: 'Active' | 'Optimizing' | 'Rebalancing';
  icon: string;
}

export interface AgentAction {
  timestamp: string;
  action: string;
  reason: string;
  impact: string;
}

export interface UserVault {
  strategyId: string;
  balance: number;
  unrealizedProfit: number;
  lastRebalance: string;
  activeAgents: number;
}

export enum AppView {
  DASHBOARD = 'dashboard',
  VAULTS = 'vaults',
  STAKING = 'staking',
  GOVERNANCE = 'governance',
  DOCS = 'docs'
}
