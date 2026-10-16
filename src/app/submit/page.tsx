export const metadata = {
  title: "Submit a Use Case | UseCaseAgents",
};

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
        Submit a use case
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        Found a practical AI agent setup for crypto that actually works? Share
        it. We review every submission for quality and clarity.
      </p>
      <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm text-zinc-500">
          Submission form coming next. For now, reach out with a link or short
          description of the setup (tools, chain, what it does, and why it’s
          useful).
        </p>
      </div>
    </div>
  );
}
