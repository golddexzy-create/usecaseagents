export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type Autonomy = "Human-in-the-loop" | "Semi-autonomous" | "Fully autonomous";

export interface UseCase {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  chains: string[];
  tools: string[];
  difficulty: Difficulty;
  autonomy: Autonomy;
  cost: "Free" | "Freemium" | "Paid";
  lastUpdated: string;
  description: string;
  steps?: string[];
  source?: string;
  featured?: boolean;
}

export const categories = [
  "Trading & Execution",
  "Research & Market Intelligence",
  "Portfolio & Risk Management",
  "Solana & Memecoins",
  "DeFi & Yield",
  "Signals & Alerts",
  "On-chain Analytics",
  "Security & Monitoring",
  "Wallet & Automation",
  "Custom / Advanced",
] as const;

export const useCases: UseCase[] = [
  {
    id: "1",
    slug: "natural-language-perp-trading-hyperliquid",
    title: "Natural-language perpetual trading on Hyperliquid",
    summary:
      "Describe a strategy in plain English; the agent builds, backtests, and can execute on Hyperliquid with scoped permissions.",
    category: "Trading & Execution",
    chains: ["Hyperliquid", "Multi-chain"],
    tools: ["Claude", "Botlyz", "Hyperliquid API"],
    difficulty: "Intermediate",
    autonomy: "Semi-autonomous",
    cost: "Freemium",
    lastUpdated: "2026-10-10",
    description:
      "Users write strategies in natural language (e.g. “RSI < 30 on SOL 15m, take profit at 3%, stop at 1.5%”). The agent compiles the rules, runs a backtest on recent data, and deploys a non-custodial session key that can only place trades.",
    steps: [
      "Connect Hyperliquid account with trade-only API key",
      "Describe strategy in chat",
      "Review backtest results and risk parameters",
      "Approve deployment; agent runs within limits",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "solana-memecoin-research-agent",
    title: "Solana memecoin research & early signal agent",
    summary:
      "Agent monitors new Solana token launches, social volume, holder concentration, and liquidity to surface high-signal opportunities.",
    category: "Solana & Memecoins",
    chains: ["Solana"],
    tools: ["Grok", "Birdeye", "DexScreener", "X API"],
    difficulty: "Intermediate",
    autonomy: "Human-in-the-loop",
    cost: "Free",
    lastUpdated: "2026-10-12",
    description:
      "Combines on-chain data (new pools, liquidity adds, top holders) with X/Telegram sentiment. Outputs ranked shortlists with risk flags (honeypot patterns, insider concentration).",
    featured: true,
  },
  {
    id: "3",
    slug: "cross-chain-portfolio-rebalancer",
    title: "Cross-chain portfolio rebalancer with gas awareness",
    summary:
      "Maintains target allocations across Ethereum, Base, Solana and L2s while factoring gas and bridge costs before acting.",
    category: "Portfolio & Risk Management",
    chains: ["Ethereum", "Base", "Solana", "Multi-chain"],
    tools: ["Claude", "AgentKit", "1inch / Jupiter"],
    difficulty: "Advanced",
    autonomy: "Semi-autonomous",
    cost: "Freemium",
    lastUpdated: "2026-10-08",
    description:
      "Agent reads current balances, compares to target weights, estimates net cost of rebalance (including bridges), and only executes when the improvement exceeds a threshold you set.",
    featured: true,
  },
  {
    id: "4",
    slug: "on-chain-whale-alert-agent",
    title: "Real-time whale & smart-money alert agent",
    summary:
      "Watches labeled wallets and large transfers; sends concise alerts with context instead of raw transaction noise.",
    category: "On-chain Analytics",
    chains: ["Ethereum", "Solana", "Base"],
    tools: ["Grok", "Alchemy / Helius", "Arkham / Nansen labels"],
    difficulty: "Beginner",
    autonomy: "Fully autonomous",
    cost: "Freemium",
    lastUpdated: "2026-10-05",
    description:
      "You define watchlists or criteria (size, labels, protocols). Agent filters noise, adds short context (what the wallet usually does, related positions), and delivers alerts via Telegram or Discord.",
  },
  {
    id: "5",
    slug: "defi-yield-optimizer",
    title: "Stablecoin yield optimizer across lending markets",
    summary:
      "Continuously compares rates on Aave, Morpho, Compound and others; moves only when net improvement clears your threshold after gas.",
    category: "DeFi & Yield",
    chains: ["Ethereum", "Base", "Arbitrum"],
    tools: ["Claude", "DeFiLlama", "Agent wallets"],
    difficulty: "Advanced",
    autonomy: "Semi-autonomous",
    cost: "Paid",
    lastUpdated: "2026-09-28",
    description:
      "Focuses on capital-efficient stablecoin strategies. Includes risk limits (protocol exposure, max single position) and human approval for larger moves.",
  },
  {
    id: "6",
    slug: "trading-signal-digest",
    title: "Daily trading signal digest from multiple sources",
    summary:
      "Agent aggregates technical, on-chain and social signals into a short morning briefing with confidence scores.",
    category: "Signals & Alerts",
    chains: ["Multi-chain"],
    tools: ["Grok", "TradingView", "X", "Glassnode"],
    difficulty: "Beginner",
    autonomy: "Fully autonomous",
    cost: "Free",
    lastUpdated: "2026-10-14",
    description:
      "You choose assets and signal sources. Agent produces a concise daily note: key levels, unusual flows, sentiment shifts, and any high-conviction setups.",
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((uc) => uc.slug === slug);
}

export function getFeaturedUseCases(): UseCase[] {
  return useCases.filter((uc) => uc.featured);
}

export function getUseCasesByCategory(category: string): UseCase[] {
  return useCases.filter((uc) => uc.category === category);
}
