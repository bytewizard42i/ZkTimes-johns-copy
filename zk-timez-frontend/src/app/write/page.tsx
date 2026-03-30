"use client";

import { useState } from "react";
import { PenLine, Upload, AlertTriangle, Coins, FileText } from "lucide-react";

const categories = [
  "Crypto", "Web3", "Policy", "Technology", "Science", "World News", "Finance", "Cardano", "Midnight",
];

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [stakeAmount, setStakeAmount] = useState("5");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <PenLine size={28} className="text-accent" />
          <h1 className="text-3xl font-bold text-foreground">Write an Article</h1>
        </div>
        <p className="text-muted text-sm">
          Stake crypto to publish. Earn from readers. Honesty is rewarded.
        </p>
      </div>
      <div className="mb-8 rounded-xl border border-warning/30 bg-warning/5 p-4 flex items-start gap-3">
        <AlertTriangle size={20} className="text-warning mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-medium text-foreground">Staking Required to Publish</p>
          <p className="text-xs text-muted mt-1">
            You must stake $2-$10 worth of crypto to publish. If your article is flagged as spam, AI-generated,
            propaganda, biased, or not legitimate - you lose your stake + earnings.
          </p>
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Article Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your article title..."
            className="w-full rounded-lg border border-card-border bg-card px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setCategory(cat)}
                className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${category === cat ? "border-accent bg-accent/10 text-accent" : "border-card-border bg-card text-muted hover:border-accent/30 hover:text-foreground"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Article Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)}
            placeholder="Write your article here... Be honest, be factual, cite your sources."
            rows={16}
            className="w-full rounded-lg border border-card-border bg-card px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-y font-mono text-sm leading-relaxed" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            <FileText size={14} className="inline mr-1" />Sources &amp; References
          </label>
          <textarea placeholder="Add links to your sources, one per line..." rows={4}
            className="w-full rounded-lg border border-card-border bg-card px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-y text-sm" />
        </div>
        <div className="rounded-xl border border-card-border bg-card p-5">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <Coins size={16} className="text-accent" />Stake Amount
          </label>
          <div className="flex items-center gap-4">
            <input type="range" min="2" max="10" step="1" value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)} className="flex-1 accent-accent" />
            <span className="rounded-lg border border-card-border bg-background px-4 py-2 text-lg font-bold text-accent min-w-[80px] text-center">
              ${stakeAmount}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button className="rounded-lg border border-card-border bg-card px-6 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground hover:border-accent/30">
            Save Draft
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover">
            <Upload size={16} />Stake ${stakeAmount} &amp; Publish
          </button>
        </div>
      </div>
    </div>
  );
}
