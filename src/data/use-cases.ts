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
      "Users write strategies in natural language (e.g. RSI under 30 on SOL 15m, take profit at 3%, stop at 1.5%). The agent compiles the rules, runs a backtest on recent data, and deploys a non-custodial session key that can only place trades.",
    steps: [
      "Connect Hyperliquid account with trade-only API key",
      "Describe strategy in chat",
      "Review backtest results and risk parameters",
      "Approve deployment; agent runs within limits",
    ],
    risks: [
      "Bad strategy still loses money — agent only executes rules",
      "API key leakage if not scoped to trade-only",
      "Slippage and funding can diverge from backtest",
    ],
    source: "Botlyz / Hyperliquid agent tooling",
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
    risks: [
      "False positives/negatives on honeypot detection",
      "Social volume can be gamed",
      "Never auto-buy from this alone — human gate required",
    ],
    source: "Common Solana research agent pattern (Birdeye + DexScreener + social)",
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
    risks: [
      "Bridge risk and failed txs on congested networks",
      "Threshold too aggressive leads to churn and fees",
      "Oracle/price lag can mis-size rebalances",
    ],
    source: "Coinbase AgentKit + aggregator routing patterns",
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
    risks: [
      "Label quality varies — smart money is not always right",
      "Alert fatigue if thresholds are too loose",
      "Delayed indexers can miss the first minutes of a move",
    ],
    source: "Helius / Alchemy webhook + labeled-wallet workflows",
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
    risks: [
      "Smart contract / protocol risk on every move",
      "Rate changes between quote and execution",
      "Gas can wipe small yield edges on mainnet",
    ],
    source: "DeFiLlama rate comparison + agentic wallet patterns",
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
    risks: [
      "Signals conflict — digest is not a trade instruction",
      "Overfitting to recent narratives",
      "Paid data sources can lag or change terms",
    ],
    source: "Multi-source research agent pattern (social + on-chain + TA)",
  },
  {
    id: "7",
    slug: "elizaos-solana-trading-character",
    title: "ElizaOS character for Solana trading & research",
    summary:
      "Deploy an ElizaOS agent with Solana plugins for natural-language swaps, balance checks, and market research across Discord/Telegram/X.",
    category: "Trading & Execution",
    chains: ["Solana"],
    tools: ["ElizaOS", "Solana Agent Kit / plugin-solana", "Jupiter"],
    difficulty: "Intermediate",
    autonomy: "Semi-autonomous",
    cost: "Free",
    lastUpdated: "2026-10-14",
    description:
      "Create a character file, add Solana plugin, set a trade-only or limited key, and let the agent handle quotes, swaps via Jupiter, and token info. Keep risk limits in the character instructions.",
    steps: [
      "Install ElizaOS and add Solana plugin",
      "Define character with clear risk rules and allowed actions",
      "Connect wallet / private key with limited permissions",
      "Run agent on Telegram or Discord and test with paper amounts",
    ],
    risks: [
      "Hot wallet exposure if key is not limited",
      "Prompt injection via public channels",
      "Plugin bugs can send wrong amounts — start tiny",
    ],
    source: "ElizaOS + @elizaos/plugin-solana / Solana Agent Kit",
    featured: true,
  },
  {
    id: "8",
    slug: "wayfinder-crosschain-paths",
    title: "Wayfinder natural-language cross-chain execution",
    summary:
      "Use Wayfinder Paths so an agent can navigate multiple chains and execute swaps or strategies from plain English prompts.",
    category: "Wallet & Automation",
    chains: ["Multi-chain", "Arbitrum", "Base", "Hyperliquid"],
    tools: ["Wayfinder", "Claude / LLM"],
    difficulty: "Intermediate",
    autonomy: "Semi-autonomous",
    cost: "Freemium",
    lastUpdated: "2026-10-06",
    description:
      "Wayfinder lets agents follow Paths across chains. You describe the goal; the agent plans and can execute under your constraints. Best used with explicit spending limits.",
    risks: [
      "Cross-chain path failures leave funds mid-route",
      "Ambiguous prompts can trigger unintended actions",
      "Always set hard spend ceilings before enabling execution",
    ],
    source: "Wayfinder (agentic finance landscape)",
  },
  {
    id: "9",
    slug: "heyanon-nl-trading",
    title: "HeyAnon natural-language spot & leverage trading",
    summary:
      "Configure spot and leverage trades with natural language prompts; agent runs autonomously within the rules you set.",
    category: "Trading & Execution",
    chains: ["Multi-chain"],
    tools: ["HeyAnon"],
    difficulty: "Beginner",
    autonomy: "Fully autonomous",
    cost: "Freemium",
    lastUpdated: "2026-10-06",
    description:
      "HeyAnon is rule-based with chat UI. You define conditions and size; the agent executes. Suitable for simpler strategies where you want autonomy without writing code.",
    risks: [
      "Full autonomy amplifies strategy errors",
      "Leverage rules must be explicit or position size can blow up",
      "Platform downtime during volatility",
    ],
    source: "HeyAnon (Cambrian agentic finance report)",
  },
  {
    id: "10",
    slug: "bankr-defi-copilot",
    title: "Bankr DeFi copilot & agentic wallet",
    summary:
      "Chat-driven DeFi terminal: research, cross-chain swaps, token launches, and wallet actions from one agent interface.",
    category: "DeFi & Yield",
    chains: ["Base", "Multi-chain"],
    tools: ["Bankr", "Claude"],
    difficulty: "Intermediate",
    autonomy: "Semi-autonomous",
    cost: "Freemium",
    lastUpdated: "2026-10-06",
    description:
      "Bankr combines research and execution. Users chat to move assets, launch tokens, or check positions. Works well as a daily driver for Base-focused DeFi with human approval on larger moves.",
    risks: [
      "Token launch features are high risk by nature",
      "Confirm every non-trivial transaction",
      "Dependency on Base ecosystem and product uptime",
    ],
    source: "Bankr / Clanker ecosystem",
  },
  {
    id: "11",
    slug: "binance-agentic-meme-sniping",
    title: "Binance Agentic Wallet meme sniping workflow",
    summary:
      "Use Binance Agentic Wallet skills (meme-rush + token audit) to find new memes, audit them, and buy with a small size in one conversation.",
    category: "Solana & Memecoins",
    chains: ["Solana", "Multi-chain"],
    tools: ["Binance Agentic Wallet", "meme-rush skill", "query-token-audit"],
    difficulty: "Beginner",
    autonomy: "Human-in-the-loop",
    cost: "Free",
    lastUpdated: "2026-10-16",
    description:
      "Conversation flow: ask for new Solana memes, audit a candidate, buy with fixed USDT amount if risk looks acceptable. Skills handle discovery and security checks; wallet executes only after you confirm.",
    steps: [
      "Install Agentic Wallet and required skills",
      "Ask for recent meme launches",
      "Run security audit on a token",
      "Confirm small buy if audit is clean",
    ],
    risks: [
      "Audits miss novel scam patterns",
      "Meme liquidity can vanish after entry",
      "Keep size tiny — this is speculative by design",
    ],
    source: "Binance Developer Docs — Agentic Wallet use cases",
  },
  {
    id: "12",
    slug: "aixbt-market-intelligence",
    title: "aixbt crypto market intelligence terminal",
    summary:
      "Narrative detection, alpha analysis, and KOL tracking fed into a chat terminal for faster research before trading.",
    category: "Research & Market Intelligence",
    chains: ["Multi-chain"],
    tools: ["aixbt"],
    difficulty: "Beginner",
    autonomy: "Fully autonomous",
    cost: "Freemium",
    lastUpdated: "2026-10-06",
    description:
      "aixbt focuses on market intelligence rather than execution. Use it to surface narratives, track influencers, and get structured alpha notes that you then act on with a separate trading setup.",
    risks: [
      "Narrative heat is not the same as edge",
      "KOL tracking can amplify crowded trades",
      "Do not treat research output as financial advice",
    ],
    source: "aixbt (agentic finance / market intelligence agents)",
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
