import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usecaseagents.com"),
  title: {
    default: "UseCaseAgents – Practical AI Agent Setups for Crypto & Trading",
    template: "%s | UseCaseAgents",
  },
  description:
    "Find real, working AI agent setups for crypto trading, research, Solana, memecoins, portfolio management, risk, and more. No fluff. Just what works — with honest failure modes.",
  keywords: [
    "crypto AI agents",
    "AI trading agents",
    "Solana agents",
    "memecoin agents",
    "crypto agent use cases",
    "AI agent setups",
    "ElizaOS",
    "Hyperliquid agents",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://usecaseagents.com",
    siteName: "UseCaseAgents",
    title: "UseCaseAgents – Practical AI Agent Setups for Crypto",
    description:
      "Working AI agent recipes for crypto and trading — with tools, steps, and what can go wrong.",
  },
  twitter: {
    card: "summary_large_image",
    title: "UseCaseAgents – Practical crypto AI agent setups",
    description:
      "Real setups for trading, Solana, research, and portfolio agents. Honest risks included.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-zinc-900 dark:text-zinc-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
