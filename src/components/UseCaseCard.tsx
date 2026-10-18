import Link from "next/link";
import type { UseCase } from "@/data/use-cases";

export function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <Link
      href={`/use-cases/${useCase.slug}`}
      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition duration-150 hover:border-emerald-300 hover:shadow-md active:scale-[0.99] dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700 sm:p-5"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[15px] font-semibold leading-snug text-zinc-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400 sm:text-base">
          {useCase.title}
        </h3>
        <span className="shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {useCase.difficulty}
        </span>
      </div>

      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {useCase.summary}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
          {useCase.category}
        </span>
        {useCase.chains.slice(0, 2).map((chain) => (
          <span
            key={chain}
            className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {chain}
          </span>
        ))}
        {useCase.tools.slice(0, 1).map((tool) => (
          <span
            key={tool}
            className="rounded-md bg-sky-50 px-2 py-0.5 text-[11px] text-sky-800 dark:bg-sky-950/50 dark:text-sky-300"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-3 text-[11px] text-zinc-400 dark:border-zinc-800">
        <span className="truncate">{useCase.autonomy}</span>
        <span className="shrink-0">{useCase.cost}</span>
      </div>
    </Link>
  );
}
