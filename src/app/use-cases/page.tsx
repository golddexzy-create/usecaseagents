import { UseCasesDirectory } from "@/components/UseCasesDirectory";
import { useCases } from "@/data/use-cases";

export const metadata = {
  title: "All Use Cases",
  description:
    "Browse and filter practical AI agent setups for crypto trading, research, Solana, memecoins, portfolio, and more.",
};

export default async function UseCasesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const initialCategory = params.category ?? "";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
          All use cases
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {useCases.length} practical setups. Search and filter by category,
          difficulty, autonomy, and cost.
        </p>
      </div>

      <UseCasesDirectory
        useCases={useCases}
        initialCategory={initialCategory}
      />
    </div>
  );
}
