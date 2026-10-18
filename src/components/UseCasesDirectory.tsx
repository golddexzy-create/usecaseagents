"use client";

import { useEffect, useMemo, useState } from "react";
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

const selectClass =
  "h-10 w-full min-w-0 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 sm:w-auto sm:min-w-[140px]";

export function UseCasesDirectory({
  useCases,
  initialCategory = "",
}: {
  useCases: UseCase[];
  initialCategory?: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [difficulty, setDifficulty] = useState("");
  const [autonomy, setAutonomy] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

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

  const hasFilters = !!(query || category || difficulty || autonomy || cost);

  return (
    <div>
      <div className="mb-5">
        <label htmlFor="search" className="sr-only">
          Search use cases
        </label>
        <input
          id="search"
          type="search"
          placeholder="Search title, tool, chain, category..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-11 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
        />
      </div>

      <div className="mb-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={selectClass}
          aria-label="Filter by category"
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
          className={selectClass}
          aria-label="Filter by difficulty"
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
          className={selectClass}
          aria-label="Filter by autonomy"
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
          className={selectClass}
          aria-label="Filter by cost"
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
            className="col-span-2 h-10 rounded-xl px-3 text-sm font-medium text-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/40 sm:col-span-1"
          >
            Clear filters
          </button>
        )}
      </div>

      <p className="mb-4 text-sm text-zinc-500">
        Showing {filtered.length} of {useCases.length} use cases
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-300 py-14 text-center text-sm text-zinc-500 dark:border-zinc-700">
          No use cases match. Try clearing filters.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {filtered.map((uc) => (
            <UseCaseCard key={uc.id} useCase={uc} />
          ))}
        </div>
      )}
    </div>
  );
}
