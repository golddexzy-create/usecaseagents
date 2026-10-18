# UseCaseAgents

Practical AI agent setups for crypto & trading.

Not a hype list. Every use case includes tools, chains, difficulty, autonomy level, steps where useful, **what can go wrong**, and a source note.

**Target domain:** usecaseagents.com  
**Repo:** https://github.com/golddexzy-create/usecaseagents

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Static curated data in `src/data/use-cases.ts`

## Features

- Home with featured setups
- `/use-cases` — search + filters (category, difficulty, autonomy, cost)
- `/use-cases/[slug]` — detail with risks, steps, related setups
- Categories, newsletter/submit/sponsors placeholders
- Sitemap + robots + Open Graph metadata
- Mobile-first, sticky header, touch-friendly cards

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add a use case

Edit `src/data/use-cases.ts`. Include:

- title, summary, category, chains, tools
- difficulty, autonomy, cost, lastUpdated
- description, optional steps
- **risks** (required for legitimacy)
- **source** (where the pattern comes from)

## Deploy

Vercel is the natural fit. Point a custom domain when ready.

## Disclaimer

Not financial advice. Agents can lose money. Start small and verify everything yourself.
