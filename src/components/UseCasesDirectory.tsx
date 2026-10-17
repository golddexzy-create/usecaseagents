"use client";

import { useMemo, useState } from "react";
import { UseCaseCard } from "@/components/UseCaseCard";
import type { UseCase } from "@/data/use-cases";
import { categories } from "@/data/use-cases";

const difficulties = ["Beginner", "Intermediate", "Advanced"] as const;
const autonomies = [
  "Human-in-the-loop",
  "Semi-autonomous",
  "Fully autonomous",
] as const;
const costs = ["Free", "Freemium", "Paid"] as const;

export function UseCasesDirectory({ useCases }: { useCases: UseCase[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [autonomy, setAutonomy] = useState<string>("");
  const [cost, setCost] = useState<string>("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return useCases.filter((uc) => {
      if (category && uc.category !== category) return false;
      if (difficulty && uc.difficulty !== difficulty) return false;
      if (autonomy && uc.autonomy !== autonomy) return false;
      if (cost && uc.cost !== cost) return false;
      if (!q) return true;
      const haystack = [
        uc.title,
        uc.summary,
        uc.category,
        ...uc.chains,
        ...uc.tools,
        uc.description,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [useCases, query, category, difficulty, autonomy, cost]);

  const clearFilters = () => {
    setQuery("");
    setCategory("");
    setDifficulty("");
    setAutonomy("");
    setCost("");
  };

  const hasFilters = query || category || difficulty || autonomy || cost;

  return (
    <div>
      {/* Search */}
      <div className="mb-6">
        <label htmlFor="search" className="sr-only">
          Search use cases
        </label>
        <input
          id="search"
          type="search"
          placeholder="Search by title, tool, chain, category..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-11 w-full rounded-full border border-zinc-300 bg-white px-5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
        />
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-9 rounded-full border border-zinc-200 bg-white px-3 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
        >
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="h-9 rounded-full border border-zinc-200 bg-white px-3 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
        >
          <option value="">All difficulties</option>
          {difficulties.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select
          value={autonomy}
          onChange={(e) => setAutonomy(e.target.value)}
          className="h-9 rounded-full border border-zinc-200 bg-white px-3 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
        >
          <option value="">All autonomy</option>
          {autonomies.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>

        <select
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="h-9 rounded-full border border-zinc-200 bg-white px-3 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
        >
          <option value="">All costs</option>
          {costs.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="h-9 rounded-full px-3 text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
          >
            Clear filters
          </button>
        )}
      </div>

      <p className="mb-4 text-sm text-zinc-500">
        Showing {filtered.length} of {useCases.length} use cases
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-300 py-16 text-center text-zinc-500 dark:border-zinc-700">
          No use cases match your filters. Try clearing them.
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((uc) => (
            <UseCaseCard key={uc.id} useCase={uc} />
          ))}
        </div>
      )}
    </div>
  );
}
