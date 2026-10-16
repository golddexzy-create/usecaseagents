import Link from "next/link";
import { notFound } from "next/navigation";
import { getUseCaseBySlug, useCases } from "@/data/use-cases";

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

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/use-cases"
        className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
      >
        ← All use cases
      </Link>

      <h1 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
        {uc.title}
      </h1>
      <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
        {uc.summary}
      </p>

      {/* Meta chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
          {uc.category}
        </span>
        <span className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {uc.difficulty}
        </span>
        <span className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {uc.autonomy}
        </span>
        <span className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {uc.cost}
        </span>
      </div>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            What it does
          </h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">{uc.description}</p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
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
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Tools / agents
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {uc.tools.map((t) => (
              <span
                key={t}
                className="rounded-md bg-blue-50 px-2.5 py-1 text-sm text-blue-700 dark:bg-blue-950/40 dark:text-blue-300"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {uc.steps && uc.steps.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              How to run it
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
              {uc.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>
        )}

        <p className="text-xs text-zinc-400">
          Last updated: {uc.lastUpdated}
        </p>
      </div>
    </div>
  );
}
