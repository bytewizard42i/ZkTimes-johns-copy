import Link from "next/link";
import {
  Shield,
  Zap,
  Users,
  TrendingUp,
  Newspaper,
  Lock,
  BookOpen,
  PenLine,
  ShieldCheck,
  Megaphone,
} from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import StatsCard from "@/components/StatsCard";

const featuredArticles = [
  {
    title: "Bitcoin Surpasses $150K as Institutional Adoption Accelerates",
    excerpt:
      "Major banks now hold BTC on their balance sheets as regulatory clarity improves across the G7 nations, signaling a new era for digital assets.",
    author: "SatoshiFan42",
    truthScore: 94,
    readTime: "5 min",
    views: 12400,
    category: "Crypto",
  },
  {
    title: "Midnight Network Launches Mainnet with Full ZK Privacy",
    excerpt:
      "The long-awaited Midnight blockchain goes live, bringing zero-knowledge proofs to enterprise and consumer applications alike.",
    author: "MidnightDev",
    truthScore: 91,
    readTime: "8 min",
    views: 8700,
    category: "Web3",
  },
  {
    title: "AI Regulation Bill Passes Senate - What It Means for Tech",
    excerpt:
      "New legislation requires transparency labels on AI-generated content. Fact-checkers and decentralized verification systems stand to benefit.",
    author: "PolicyWatch",
    truthScore: 88,
    readTime: "6 min",
    views: 15200,
    category: "Policy",
  },
  {
    title: "Cardano Hydra Processes 1M TPS in Stress Test",
    excerpt:
      "The Layer 2 scaling solution demonstrates unprecedented throughput, opening the door for real-time dApps and micropayments on Cardano.",
    author: "ADABuilder",
    truthScore: 86,
    readTime: "4 min",
    views: 6300,
    category: "Cardano",
  },
  {
    title: "Community Notes Model Proves More Effective Than Traditional Fact-Checking",
    excerpt:
      "New research shows cross-partisan verification outperforms centralized fact-checking by 40% in accuracy and trust ratings.",
    author: "TruthSeeker",
    truthScore: 92,
    readTime: "7 min",
    views: 9100,
    category: "Research",
  },
  {
    title: "IPFS Adoption Hits Record High as Web3 Storage Matures",
    excerpt:
      "Decentralized storage usage grows 300% year-over-year as more applications move away from centralized cloud providers.",
    author: "StorageNerd",
    truthScore: 89,
    readTime: "5 min",
    views: 4800,
    category: "Infrastructure",
  },
];

const features = [
  {
    icon: Shield,
    title: "ZK-Powered Truth",
    description:
      "Every article is verified through a 3-layer system: AI fact-check, human review, and on-chain ZK proofs.",
  },
  {
    icon: Zap,
    title: "Earn by Participating",
    description:
      "Writers, readers, and fact-checkers all earn crypto. Real engagement, real rewards.",
  },
  {
    icon: Users,
    title: "Community Consensus",
    description:
      "Inspired by Community Notes - cross-viewpoint agreement eliminates political bias.",
  },
  {
    icon: Lock,
    title: "Midnight Privacy",
    description:
      "Your identity stays private through Midnight zero-knowledge proofs. Read and write freely.",
  },
  {
    icon: TrendingUp,
    title: "On-Chain Reputation",
    description:
      "Writer scores are transparent, immutable, and earned - not bought.",
  },
  {
    icon: Newspaper,
    title: "Decentralized Publishing",
    description:
      "No central company or country controls information. Articles live on IPFS, verified on-chain.",
  },
];

const roles = [
  {
    icon: PenLine,
    title: "Writers",
    description: "Stake to publish, earn from readers. Honesty is incentivized - bots and propaganda lose stakes.",
    href: "/write",
  },
  {
    icon: BookOpen,
    title: "Readers",
    description: "Read verified news and earn rewards. Your attention has value - advertisers pay for it.",
    href: "/read",
  },
  {
    icon: ShieldCheck,
    title: "Fact Checkers",
    description: "Verify articles, build reputation, earn crypto. The truth economy needs you.",
    href: "/fact-check",
  },
  {
    icon: Megaphone,
    title: "Advertisers",
    description: "Reach real, verified humans. No bots, no fraud - transparent attention marketplace.",
    href: "/ads",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-card-border">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-midnight/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
              <Shield size={14} />
              Powered by Midnight ZK Proofs
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Truth Has a{" "}
              <span className="text-accent">Score.</span>
              <br />
              <span className="text-muted">Reputation is On-Chain.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
              ZK TimeZ is a decentralized information market where writers earn,
              readers earn, and fact-checkers verify - all powered by
              zero-knowledge proofs. No propaganda. No bots. No bias.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/read"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                <BookOpen size={18} />
                Start Reading
              </Link>
              <Link
                href="/write"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-card-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/30"
              >
                <PenLine size={18} />
                Start Writing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-card-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <StatsCard icon={Newspaper} label="Articles" value="12,847" change="324 this week" positive />
            <StatsCard icon={Users} label="Writers" value="2,156" change="89 new" positive />
            <StatsCard icon={ShieldCheck} label="Avg Truth Score" value="91.3%" change="+2.1%" positive />
            <StatsCard icon={Zap} label="Rewards Paid" value="$847K" change="+12.4%" positive />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Latest Verified Articles</h2>
            <p className="text-sm text-muted mt-1">All articles scored by our 3-layer truth verification</p>
          </div>
          <Link
            href="/read"
            className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            View All &rarr;
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article, i) => (
            <ArticleCard key={i} {...article} />
          ))}
        </div>
      </section>

      <section className="border-t border-card-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground">How ZK TimeZ Works</h2>
            <p className="text-sm text-muted mt-2 max-w-lg mx-auto">
              A decentralized information market where truth is verified, reputation is earned, and everyone benefits.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/20"
              >
                <feature.icon size={24} className="text-accent mb-4" />
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground">Choose Your Role</h2>
          <p className="text-sm text-muted mt-2">Everyone earns. Everyone contributes to truth.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, i) => (
            <Link
              key={i}
              href={role.href}
              className="group rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <role.icon
                size={28}
                className="text-accent mb-4 transition-transform group-hover:scale-110"
              />
              <h3 className="text-base font-semibold text-foreground mb-2">
                {role.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {role.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            The 1st Edition Starts Now
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-8">
            Join the decentralized information revolution. Connect your wallet,
            pick a role, and start earning while fighting misinformation.
          </p>
          <Link
            href="/read"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            <Zap size={18} />
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
