"use client";

import { useState } from "react";
import { BookOpen, Search, SlidersHorizontal } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";

const allArticles = [
  { title: "Bitcoin Surpasses $150K as Institutional Adoption Accelerates", excerpt: "Major banks now hold BTC on their balance sheets as regulatory clarity improves across the G7 nations.", author: "SatoshiFan42", truthScore: 94, readTime: "5 min", views: 12400, category: "Crypto" },
  { title: "Midnight Network Launches Mainnet with Full ZK Privacy", excerpt: "The long-awaited Midnight blockchain goes live, bringing zero-knowledge proofs to enterprise applications.", author: "MidnightDev", truthScore: 91, readTime: "8 min", views: 8700, category: "Web3" },
  { title: "AI Regulation Bill Passes Senate", excerpt: "New legislation requires transparency labels on AI-generated content.", author: "PolicyWatch", truthScore: 88, readTime: "6 min", views: 15200, category: "Policy" },
  { title: "Cardano Hydra Processes 1M TPS in Stress Test", excerpt: "The Layer 2 scaling solution demonstrates unprecedented throughput for real-time dApps.", author: "ADABuilder", truthScore: 86, readTime: "4 min", views: 6300, category: "Cardano" },
  { title: "Community Notes Model Proves More Effective Than Traditional Fact-Checking", excerpt: "New research shows cross-partisan verification outperforms centralized fact-checking by 40%.", author: "TruthSeeker", truthScore: 92, readTime: "7 min", views: 9100, category: "Research" },
  { title: "IPFS Adoption Hits Record High as Web3 Storage Matures", excerpt: "Decentralized storage usage grows 300% year-over-year.", author: "StorageNerd", truthScore: 89, readTime: "5 min", views: 4800, category: "Infrastructure" },
  { title: "Ethereum Layer 2 TVL Crosses $100 Billion", excerpt: "Rollup adoption continues to accelerate as gas fees push users to scaling solutions.", author: "ETHMaxi", truthScore: 90, readTime: "4 min", views: 7600, category: "Crypto" },
  { title: "Decentralized Identity Standards Finalized by W3C", excerpt: "The web standards body officially ratifies DID specifications.", author: "IdentityGuru", truthScore: 95, readTime: "6 min", views: 5200, category: "Web3" },
];

const categories = ["All", "Crypto", "Web3", "Policy", "Cardano", "Research", "Infrastructure"];

export default function ReadPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = allArticles.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch = search === "" || a.title.toLowerCase().includes(search.toLowerCase()) || a.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen size={28} className="text-accent" />
          <h1 className="text-3xl font-bold text-foreground">Read Articles</h1>
        </div>
        <p className="text-muted text-sm">Browse verified articles. Earn rewards for reading.</p>
      </div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles or authors..."
            className="w-full rounded-lg border border-card-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors" />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <SlidersHorizontal size={14} className="text-muted" />
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${activeCategory === cat ? "border-accent bg-accent/10 text-accent" : "border-card-border bg-card text-muted hover:border-accent/30"}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>
      {filtered.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, i) => (<ArticleCard key={i} {...article} />))}
        </div>
      ) : (
        <div className="text-center py-16"><p className="text-muted">No articles match your search.</p></div>
      )}
      <div className="mt-12 rounded-xl border border-accent/20 bg-accent/5 p-6 text-center">
        <p className="text-sm font-medium text-foreground">You earn crypto for reading verified articles</p>
        <p className="text-xs text-muted mt-1">Connect your wallet to start accumulating reader rewards.</p>
      </div>
    </div>
  );
}
