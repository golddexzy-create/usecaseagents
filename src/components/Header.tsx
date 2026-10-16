import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            UseCaseAgents
          </span>
          <span className="hidden rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 sm:inline">
            Crypto
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-300 sm:gap-6">
          <Link
            href="/use-cases"
            className="hover:text-zinc-900 dark:hover:text-white"
          >
            Use Cases
          </Link>
          <Link
            href="/categories"
            className="hidden hover:text-zinc-900 dark:hover:text-white sm:inline"
          >
            Categories
          </Link>
          <Link
            href="/newsletter"
            className="hover:text-zinc-900 dark:hover:text-white"
          >
            Newsletter
          </Link>
          <Link
            href="/submit"
            className="rounded-full bg-zinc-900 px-3 py-1.5 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Submit
          </Link>
        </nav>
      </div>
    </header>
  );
}
