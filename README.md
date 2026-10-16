# UseCaseAgents

Practical AI agent setups for crypto & trading.

Find real, working use cases for trading, research, Solana, memecoins, portfolio management, risk, signals, and more. No fluff — just what works.

**Live goal:** https://usecaseagents.com (domain available)

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Static data for use cases (easy to expand)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `/` — Home with featured setups + categories
- `/use-cases` — Full directory
- `/use-cases/[slug]` — Individual use case detail
- `/categories` — Browse by category
- `/newsletter` — Weekly best setups (placeholder)
- `/submit` — Community submissions (placeholder)
- `/sponsors` — Sponsorship options

## Data

Use cases live in `src/data/use-cases.ts`. Add new ones there with title, summary, category, chains, tools, difficulty, autonomy, cost, and description.

## Next steps

- Search + filters on the directory
- More curated use cases from X / GitHub / Discord
- Real newsletter provider
- Deploy to Vercel + custom domain
