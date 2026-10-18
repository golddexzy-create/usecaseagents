import Link from "next/link";
import { notFound } from "next/navigation";
import { getUseCaseBySlug, useCases } from "@/data/use-cases";
import { UseCaseCard } from "@/components/UseCaseCard";

export function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) return { title: "Not found" };
  return {
    title: `${uc.title} | UseCaseAgents`,
    description: uc.summary,
  };
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) notFound();

  const related = useCases
    .filter(
      (u) =>
        u.id !== uc.id &&
        (u.category === uc.category ||
          u.chains.some((c) => uc.chains.includes(c)))
    )
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href="/use-cases"
        className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
      >
        ← All use cases
      </Link>

      <h1 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
        {uc.title}
      </h1>
      <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
        {uc.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
          {uc.category}
        </span>
        <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {uc.difficulty}
        </span>
        <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {uc.autonomy}
        </span>
        <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {uc.cost}
        </span>
      </div>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            What it does
          </h2>
          <p className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">
            {uc.description}
          </p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2">
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Chains
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {uc.chains.map((c) => (
                <span
                  key={c}
                  className="rounded-md bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Tools / agents
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {uc.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-sky-50 px-2.5 py-1 text-sm text-sky-800 dark:bg-sky-950/40 dark:text-sky-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>

        {uc.steps && uc.steps.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              How to run it
            </h2>
            <ol className="mt-3 list-decimal space-y-2.5 pl-5 text-zinc-700 dark:text-zinc-300">
              {uc.steps.map((step, i) => (
                <li key={i} className="leading-relaxed pl-1">
                  {step}
                </li>
              ))}
            </ol>
          </section>
        )}

        {uc.risks && uc.risks.length > 0 && (
          <section className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4 dark:border-amber-900/50 dark:bg-amber-950/30 sm:p-5">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300">
              What can go wrong
            </h2>
            <ul className="mt-2 space-y-1.5 text-sm text-amber-900/90 dark:text-amber-200/90">
              {uc.risks.map((r, i) => (
                <li key={i} className="flex gap-2">
                  <span className="shrink-0">·</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="text-xs text-zinc-400">
          Last verified: {uc.lastUpdated}
          {uc.source ? ` · Source: ${uc.source}` : ""}
        </p>
      </div>

      {related.length > 0 && (
        <section className="mt-14 border-t border-zinc-200 pt-10 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Related setups
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <UseCaseCard key={r.id} useCase={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
