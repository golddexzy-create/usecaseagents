export const metadata = {
  title: "Sponsors",
  description:
    "Sponsor UseCaseAgents — reach builders looking for working crypto AI agent setups. Limited, clearly marked placements.",
};

export default function SponsorsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
        Sponsor UseCaseAgents
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Reach traders and builders who are actively looking for working agent
        setups. Sponsored placements stay limited and always labeled so the
        directory remains useful.
      </p>

      <div className="mt-8 space-y-4">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-semibold text-zinc-900 dark:text-white">
              Featured placement
            </h2>
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              from $400 / 30 days
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Your tool or agent platform on the home page and in matching
            category views. Clear “Sponsored” label. No fake reviews.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-semibold text-zinc-900 dark:text-white">
              Newsletter mention
            </h2>
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              from $150 / issue
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Short, honest mention in the weekly best-setups email when it fits
            the content.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-semibold text-zinc-900 dark:text-white">
              Category highlight
            </h2>
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              from $250 / 30 days
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Appear at the top of a relevant category (e.g. Solana & Memecoins)
            for a fixed period.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-900 dark:bg-emerald-950/30 sm:p-6">
        <h2 className="font-semibold text-zinc-900 dark:text-white">
          Early partner rates
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          First 3 sponsors get introductory pricing and priority placement while
          we grow traffic. Bundle (featured + one newsletter) available on
          request.
        </p>
        <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
          Interested? Open a GitHub issue titled{" "}
          <span className="font-medium">“Sponsor inquiry”</span> on the repo, or
          reply to outreach with your product URL and preferred slot.
        </p>
        <a
          href="https://github.com/golddexzy-create/usecaseagents/issues/new?title=Sponsor%20inquiry"
          className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Open sponsor inquiry
        </a>
      </div>
    </div>
  );
}
