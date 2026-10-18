import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="font-semibold text-zinc-900 dark:text-white">
              UseCaseAgents
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              Practical AI agent setups for crypto & trading. Every entry
              includes constraints and what can go wrong — not marketing copy.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-zinc-600 dark:text-zinc-300">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Explore
              </span>
              <Link href="/use-cases" className="hover:text-zinc-900 dark:hover:text-white">
                Use cases
              </Link>
              <Link href="/categories" className="hover:text-zinc-900 dark:hover:text-white">
                Categories
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Community
              </span>
              <Link href="/newsletter" className="hover:text-zinc-900 dark:hover:text-white">
                Newsletter
              </Link>
              <Link href="/submit" className="hover:text-zinc-900 dark:hover:text-white">
                Submit a setup
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Business
              </span>
              <Link href="/sponsors" className="hover:text-zinc-900 dark:hover:text-white">
                Sponsors
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-zinc-100 pt-6 text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
          © {new Date().getFullYear()} UseCaseAgents. Not financial advice.
          Always verify tools and start with capital you can afford to lose.
        </p>
      </div>
    </footer>
  );
}
