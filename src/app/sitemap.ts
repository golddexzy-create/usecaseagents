import type { MetadataRoute } from "next";
import { useCases } from "@/data/use-cases";

const base = "https://usecaseagents.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticDate = new Date("2026-10-18");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: staticDate, changeFrequency: "daily", priority: 1 },
    { url: `${base}/use-cases`, lastModified: staticDate, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/categories`, lastModified: staticDate, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/newsletter`, lastModified: staticDate, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/submit`, lastModified: staticDate, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/sponsors`, lastModified: staticDate, changeFrequency: "monthly", priority: 0.3 },
  ];

  const useCaseRoutes: MetadataRoute.Sitemap = useCases.map((uc) => ({
    url: `${base}/use-cases/${uc.slug}`,
    lastModified: new Date(uc.lastUpdated),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...useCaseRoutes];
}
