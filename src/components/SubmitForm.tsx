"use client";

import { useMemo, useState } from "react";
import { categories } from "@/data/use-cases";

const difficulties = ["Beginner", "Intermediate", "Advanced"];
const autonomies = [
  "Human-in-the-loop",
  "Semi-autonomous",
  "Fully autonomous",
];
const costs = ["Free", "Freemium", "Paid"];

const inputClass =
  "mt-1.5 h-11 w-full rounded-xl border border-zinc-200 bg-white px-3.5 text-sm text-zinc-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white";
const labelClass = "block text-sm font-medium text-zinc-700 dark:text-zinc-300";
const areaClass =
  "mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white";

export function SubmitForm() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");
  const [chains, setChains] = useState("");
  const [tools, setTools] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [autonomy, setAutonomy] = useState("");
  const [cost, setCost] = useState("");
  const [steps, setSteps] = useState("");
  const [risks, setRisks] = useState("");
  const [source, setSource] = useState("");

  const issueUrl = useMemo(() => {
    const body = [
      "## Use case submission",
      "",
      `**Title:** ${title || "(fill in)"}`,
      `**Summary:** ${summary || "(fill in)"}`,
      `**Category:** ${category || "(fill in)"}`,
      `**Chains:** ${chains || "(fill in)"}`,
      `**Tools:** ${tools || "(fill in)"}`,
      `**Difficulty:** ${difficulty || "(fill in)"}`,
      `**Autonomy:** ${autonomy || "(fill in)"}`,
      `**Cost:** ${cost || "(fill in)"}`,
      "",
      "### Steps",
      steps || "(optional)",
      "",
      "### Risks / what can go wrong",
      risks || "(required for review)",
      "",
      "### Source / link",
      source || "(optional)",
    ].join("\n");

    const params = new URLSearchParams({
      title: title ? `Use case: ${title}` : "Use case submission",
      body,
    });
    return `https://github.com/golddexzy-create/usecaseagents/issues/new?${params.toString()}`;
  }, [
    title,
    summary,
    category,
    chains,
    tools,
    difficulty,
    autonomy,
    cost,
    steps,
    risks,
    source,
  ]);

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(issueUrl, "_blank", "noopener,noreferrer");
      }}
    >
      <div>
        <label htmlFor="title" className={labelClass}>
          Title
        </label>
        <input
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Solana KOL copy-trade with safety gates"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="summary" className={labelClass}>
          One-line summary
        </label>
        <input
          id="summary"
          required
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="What it does in one sentence"
          className={inputClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="category" className={labelClass}>
            Category
          </label>
          <select
            id="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={inputClass}
          >
            <option value="">Select…</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="difficulty" className={labelClass}>
            Difficulty
          </label>
          <select
            id="difficulty"
            required
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className={inputClass}
          >
            <option value="">Select…</option>
            {difficulties.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="chains" className={labelClass}>
            Chains
          </label>
          <input
            id="chains"
            required
            value={chains}
            onChange={(e) => setChains(e.target.value)}
            placeholder="Solana, Base, …"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="tools" className={labelClass}>
            Tools / agents
          </label>
          <input
            id="tools"
            required
            value={tools}
            onChange={(e) => setTools(e.target.value)}
            placeholder="ElizaOS, Jupiter, …"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="autonomy" className={labelClass}>
            Autonomy
          </label>
          <select
            id="autonomy"
            required
            value={autonomy}
            onChange={(e) => setAutonomy(e.target.value)}
            className={inputClass}
          >
            <option value="">Select…</option>
            {autonomies.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cost" className={labelClass}>
            Cost
          </label>
          <select
            id="cost"
            required
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className={inputClass}
          >
            <option value="">Select…</option>
            {costs.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="steps" className={labelClass}>
          Steps <span className="font-normal text-zinc-400">(optional)</span>
        </label>
        <textarea
          id="steps"
          rows={3}
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder="1. …\n2. …"
          className={areaClass}
        />
      </div>

      <div>
        <label htmlFor="risks" className={labelClass}>
          What can go wrong
        </label>
        <textarea
          id="risks"
          required
          rows={3}
          value={risks}
          onChange={(e) => setRisks(e.target.value)}
          placeholder="Honest failure modes — required for review"
          className={areaClass}
        />
      </div>

      <div>
        <label htmlFor="source" className={labelClass}>
          Source / link{" "}
          <span className="font-normal text-zinc-400">(optional)</span>
        </label>
        <input
          id="source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="https://…"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="h-12 w-full rounded-xl bg-zinc-900 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Open GitHub issue with this form
      </button>
      <p className="text-center text-xs text-zinc-400">
        Opens GitHub with fields filled in. Sign in to submit. We review for
        quality — hype-only gets skipped.
      </p>
    </form>
  );
}
