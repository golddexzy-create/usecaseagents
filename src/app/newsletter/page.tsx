export const metadata = {
  title: "Newsletter | UseCaseAgents",
  description: "Get the best new crypto AI agent use cases delivered weekly.",
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 text-center">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
        Weekly best setups
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        One short email with the highest-signal new AI agent use cases for
        crypto and trading. No fluff, no daily noise.
      </p>

      <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <input
          type="email"
          placeholder="you@example.com"
          className="h-11 w-full rounded-full border border-zinc-300 bg-white px-4 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 sm:w-64"
          required
        />
        <button
          type="submit"
          className="h-11 rounded-full bg-zinc-900 px-6 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-3 text-xs text-zinc-400">
        Coming soon — form is a placeholder. We’ll wire a real provider next.
      </p>
    </div>
  );
}
