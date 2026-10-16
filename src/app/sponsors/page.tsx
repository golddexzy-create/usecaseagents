export const metadata = {
  title: "Sponsors | UseCaseAgents",
};

export default function SponsorsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
        Sponsor UseCaseAgents
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        Reach traders and builders looking for working AI agent setups. Sponsored
        placements are clearly marked and limited so the directory stays useful.
      </p>

      <div className="mt-10 space-y-6">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="font-semibold text-zinc-900 dark:text-white">
            Featured placement
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Your tool or agent platform highlighted on the home page and in
            relevant category views. Clear “Sponsored” label.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="font-semibold text-zinc-900 dark:text-white">
            Newsletter mention
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Short, honest mention in the weekly best-setups email when relevant.
          </p>
        </div>
      </div>

      <p className="mt-8 text-sm text-zinc-500">
        Pricing and availability will be published once the site has initial
        traffic. Interested early? Reach out.
      </p>
    </div>
  );
}
