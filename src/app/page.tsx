import Link from "next/link";
import { UseCaseCard } from "@/components/UseCaseCard";
import { getFeaturedUseCases, categories } from "@/data/use-cases";

export default function Home() {
  const featured = getFeaturedUseCases();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
          Practical AI agent setups
          <br />
          <span className="text-emerald-600 dark:text-emerald-400">
            for crypto & trading
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          People waste time and money on agents that don’t work. We collect the
          setups that actually do — trading, research, Solana, memecoins,
          portfolio, risk, and more.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/use-cases"
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Browse all use cases
          </Link>
          <Link
            href="/newsletter"
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Get weekly best setups
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="mt-16">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Featured setups
          </h2>
          <Link
            href="/use-cases"
            className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
          >
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((uc) => (
            <UseCaseCard key={uc.id} useCase={uc} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Browse by category
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/categories?cat=${encodeURIComponent(cat)}`}
              className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-700 transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/30"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="mt-20 grid gap-8 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="font-semibold text-zinc-900 dark:text-white">
            Real setups only
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Every use case is pulled from working examples on X, GitHub, Discord,
            and live products — not theory.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="font-semibold text-zinc-900 dark:text-white">
            Clear constraints
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Tools, chains, difficulty, autonomy level, and cost are shown up
            front so you know what you’re getting into.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="font-semibold text-zinc-900 dark:text-white">
            Updated continuously
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            New high-signal setups are added as they appear. Newsletter delivers
            the best ones weekly.
          </p>
        </div>
      </section>
    </div>
  );
}
