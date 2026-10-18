import Link from "next/link";
import { categories, getUseCasesByCategory } from "@/data/use-cases";

export const metadata = {
  title: "Categories",
  description:
    "Browse crypto AI agent use cases by focus: trading, Solana, portfolio, DeFi, signals, and more.",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
        Categories
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Jump into a focus area. Only practical setups, with risks listed on each
        page.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
        {categories.map((cat) => {
          const count = getUseCasesByCategory(cat).length;
          return (
            <Link
              key={cat}
              href={`/use-cases?category=${encodeURIComponent(cat)}`}
              className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-sm active:scale-[0.99] dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700 sm:p-5"
            >
              <div>
                <h2 className="font-semibold text-zinc-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
                  {cat}
                </h2>
                <p className="mt-0.5 text-sm text-zinc-500">
                  {count} use case{count !== 1 ? "s" : ""}
                  {count === 0 ? " · coming soon" : ""}
                </p>
              </div>
              <span className="text-zinc-300 transition group-hover:text-emerald-500 dark:text-zinc-600">
                →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
