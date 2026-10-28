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
  risks?: string[];
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
    summary: "Describe a strategy in plain English; the agent builds, backtests, and can execute on Hyperliquid with scoped permissions.",
    category: "Trading & Execution",
    chains: ["Hyperliquid", "Multi-chain"],
    tools: ["Claude", "Botlyz", "Hyperliquid API"],
    difficulty: "Intermediate",
    autonomy: "Semi-autonomous",
    cost: "Freemium",
    lastUpdated: "2026-10-10",
    description: "Users write strategies in natural language (e.g. RSI under 30 on SOL 15m, take profit at 3%, stop at 1.5%). The agent compiles the rules, runs a backtest on recent data, and deploys a non-custodial session key that can only place trades.",
    steps: ["Connect Hyperliquid account with trade-only API key", "Describe strategy in chat", "Review backtest results and risk parameters", "Approve deployment; agent runs within limits"],
    risks: ["Bad strategy still loses money — agent only executes rules", "API key leakage if not scoped to trade-only", "Slippage and funding can diverge from backtest"],
    source: "Botlyz / Hyperliquid agent tooling",
    featured: true,
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
