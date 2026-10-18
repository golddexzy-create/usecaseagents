export const metadata = {
  title: "Submit a use case",
  description:
    "Share a practical crypto AI agent setup. We review for quality, clarity, and honest risks.",
};

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
        Submit a use case
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Found a setup that actually works? We want tools, chains, what it does,
        how to run it, and what can go wrong. Hype-only submissions get skipped.
      </p>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
          What to include
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li>· Title and one-line summary</li>
          <li>· Category, chains, tools</li>
          <li>· Difficulty and autonomy level</li>
          <li>· Steps (if non-obvious)</li>
          <li>· Honest risks / failure modes</li>
          <li>· Link or source if public</li>
        </ul>
        <p className="mt-5 text-sm text-zinc-500">
          Form shipping soon. Until then, open an issue on the GitHub repo with
          the details above.
        </p>
        <a
          href="https://github.com/golddexzy-create/usecaseagents/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Open GitHub issue
        </a>
      </div>
    </div>
  );
}
