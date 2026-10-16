import Link from "next/link";
import { categories, getUseCasesByCategory } from "@/data/use-cases";

export const metadata = {
  title: "Categories | UseCaseAgents",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
        Categories
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Browse practical AI agent use cases by focus area.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {categories.map((cat) => {
          const count = getUseCasesByCategory(cat).length;
          return (
            <Link
              key={cat}
              href={`/use-cases`}
              className="rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700"
            >
              <h2 className="font-semibold text-zinc-900 dark:text-white">
                {cat}
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                {count} use case{count !== 1 ? "s" : ""}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
