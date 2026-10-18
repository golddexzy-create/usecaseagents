import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/85 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/85">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:h-15 sm:px-6">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2">
          <span className="truncate text-lg font-bold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
            UseCaseAgents
          </span>
          <span className="hidden rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 sm:inline">
            Crypto
          </span>
        </Link>

        <nav className="flex items-center gap-0.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 sm:gap-1">
          <Link
            href="/use-cases"
            className="rounded-lg px-2.5 py-2 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            Use Cases
          </Link>
          <Link
            href="/categories"
            className="hidden rounded-lg px-2.5 py-2 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white sm:inline"
          >
            Categories
          </Link>
          <Link
            href="/newsletter"
            className="hidden rounded-lg px-2.5 py-2 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white md:inline"
          >
            Newsletter
          </Link>
          <Link
            href="/submit"
            className="ml-1 rounded-full bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 sm:text-sm"
          >
            Submit
          </Link>
        </nav>
      </div>
    </header>
  );
}
