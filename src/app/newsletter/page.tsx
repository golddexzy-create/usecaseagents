export const metadata = {
  title: "Newsletter",
  description:
    "Weekly best crypto AI agent use cases — practical setups only, no noise.",
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
        Weekly setups
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        One email a week with the best new practical AI agent use cases for
        crypto and trading. Tools, steps, and failure modes — not hype.
      </p>

      <form className="mt-8 space-y-3" action="#">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
        />
        <button
          type="button"
          className="h-12 w-full rounded-xl bg-zinc-900 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Notify me when it launches
        </button>
      </form>
      <p className="mt-4 text-center text-xs text-zinc-400">
        No spam. Unsubscribe anytime. Provider wiring comes next.
      </p>
    </div>
  );
}
