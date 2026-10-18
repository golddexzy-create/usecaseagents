import type { MetadataRoute } from "next";
import { useCases } from "@/data/use-cases";

const base = "https://usecaseagents.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/use-cases`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/categories`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/newsletter`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/submit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/sponsors`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];

  const useCaseRoutes: MetadataRoute.Sitemap = useCases.map((uc) => ({
    url: `${base}/use-cases/${uc.slug}`,
    lastModified: new Date(uc.lastUpdated),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...useCaseRoutes];
}
