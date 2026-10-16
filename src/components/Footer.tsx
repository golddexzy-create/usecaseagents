import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold text-zinc-900 dark:text-white">
              UseCaseAgents
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Practical AI agent setups for crypto & trading. No fluff.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-300">
            <Link href="/use-cases" className="hover:text-zinc-900 dark:hover:text-white">
              Use Cases
            </Link>
            <Link href="/sponsors" className="hover:text-zinc-900 dark:hover:text-white">
              Sponsors
            </Link>
            <Link href="/newsletter" className="hover:text-zinc-900 dark:hover:text-white">
              Newsletter
            </Link>
          </div>
        </div>
        <p className="mt-6 text-xs text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} UseCaseAgents. Curated for builders and traders who want what actually works.
        </p>
      </div>
    </footer>
  );
}
