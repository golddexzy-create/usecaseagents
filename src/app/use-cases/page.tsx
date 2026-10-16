import { UseCaseCard } from "@/components/UseCaseCard";
import { useCases, categories } from "@/data/use-cases";

export const metadata = {
  title: "All Use Cases | UseCaseAgents",
  description: "Browse practical AI agent setups for crypto trading, research, Solana, memecoins, portfolio, and more.",
};

export default function UseCasesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
          All use cases
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {useCases.length} practical setups. Filter and search coming next.
        </p>
      </div>

      {/* Simple category pills for now */}
      <div className="mb-8 flex flex-wrap gap-2">
        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-zinc-900">
          All
        </span>
        {categories.slice(0, 6).map((cat) => (
          <span
            key={cat}
            className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((uc) => (
          <UseCaseCard key={uc.id} useCase={uc} />
        ))}
      </div>
    </div>
  );
}
