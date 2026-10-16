import Link from "next/link";
import type { UseCase } from "@/data/use-cases";

export function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <Link
      href={`/use-cases/${useCase.slug}`}
      className="group block rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-snug text-zinc-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
          {useCase.title}
        </h3>
        <span className="shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {useCase.difficulty}
        </span>
      </div>

      <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
        {useCase.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
          {useCase.category}
        </span>
        {useCase.chains.slice(0, 2).map((chain) => (
          <span
            key={chain}
            className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {chain}
          </span>
        ))}
        {useCase.tools.slice(0, 2).map((tool) => (
          <span
            key={tool}
            className="rounded-md bg-blue-50 px-2 py-0.5 text-xs text-blue-700 dark:bg-blue-950/40 dark:text-blue-300"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
        <span>{useCase.autonomy}</span>
        <span>Updated {useCase.lastUpdated}</span>
      </div>
    </Link>
  );
}
