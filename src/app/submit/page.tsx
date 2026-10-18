import { SubmitForm } from "@/components/SubmitForm";

export const metadata = {
  title: "Submit a use case",
  description:
    "Share a practical crypto AI agent setup. We review for quality, clarity, and honest risks.",
};

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
        Submit a use case
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Found a setup that actually works? Fill this in — tools, chains, how to
        run it, and what can go wrong. Hype-only submissions get skipped.
      </p>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
        <SubmitForm />
      </div>
    </div>
  );
}
