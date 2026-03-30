import { ShieldCheck, Bot, Users, FileCheck, ArrowRight, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import TruthBadge from "@/components/TruthBadge";

const pendingArticles = [
  { id: 1, title: "Central Bank Digital Currencies to Replace Cash by 2030", author: "FintechDaily", submitted: "2 hours ago", aiScore: 72, status: "needs_review" },
  { id: 2, title: "New Study Links Screen Time to Cognitive Decline", author: "HealthWriter", submitted: "5 hours ago", aiScore: 81, status: "needs_review" },
  { id: 3, title: "SpaceX Announces Mars Colony Timeline Acceleration", author: "SpaceReport", submitted: "8 hours ago", aiScore: 65, status: "flagged" },
];

const recentVerifications = [
  { title: "Bitcoin Surpasses $150K as Institutional Adoption Accelerates", verdict: "verified", truthScore: 94, checkers: 12 },
  { title: "Midnight Network Launches Mainnet with Full ZK Privacy", verdict: "verified", truthScore: 91, checkers: 8 },
  { title: "Fake: Government Bans All Cryptocurrency Trading", verdict: "rejected", truthScore: 12, checkers: 15 },
];

export default function FactCheckPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck size={28} className="text-accent" />
          <h1 className="text-3xl font-bold text-foreground">Fact Check Center</h1>
        </div>
        <p className="text-muted text-sm">Verify articles, earn crypto. Our 3-layer truth verification keeps the information market honest.</p>
      </div>
      <div className="mb-12 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-card-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-sm">1</div>
            <Bot size={20} className="text-accent" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">AI Pre-Check</h3>
          <p className="text-xs text-muted leading-relaxed">AI checks facts, sources, location, AI-altered media, and plagiarism. Generates initial truth score.</p>
        </div>
        <div className="rounded-xl border border-card-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-sm">2</div>
            <Users size={20} className="text-accent" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">Human Review</h3>
          <p className="text-xs text-muted leading-relaxed">High-reputation reviewers vote on accuracy. Cross-viewpoint agreement required.</p>
        </div>
        <div className="rounded-xl border border-card-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-sm">3</div>
            <FileCheck size={20} className="text-accent" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">ZK Proof</h3>
          <p className="text-xs text-muted leading-relaxed">Verification results are anchored on-chain via Midnight ZK proofs. Immutable, transparent, private.</p>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Pending Reviews</h2>
        <div className="space-y-3">
          {pendingArticles.map((article) => (
            <div key={article.id} className="flex flex-col md:flex-row md:items-center justify-between rounded-xl border border-card-border bg-card p-4 gap-4">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground">{article.title}</h3>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted">
                  <span>by {article.author}</span>
                  <span>{article.submitted}</span>
                  {article.status === "flagged" && (<span className="flex items-center gap-1 text-warning"><AlertTriangle size={12} />Flagged</span>)}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xs text-muted">AI Score: <span className="font-semibold text-foreground">{article.aiScore}%</span></div>
                <button className="inline-flex items-center gap-1 rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-hover">Review<ArrowRight size={12} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Recent Verifications</h2>
        <div className="space-y-3">
          {recentVerifications.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between rounded-xl border border-card-border bg-card p-4 gap-3">
              <div className="flex items-center gap-3 flex-1">
                {item.verdict === "verified" ? <CheckCircle2 size={20} className="text-success shrink-0" /> : <XCircle size={20} className="text-danger shrink-0" />}
                <span className="text-sm font-medium text-foreground">{item.title}</span>
              </div>
              <div className="flex items-center gap-4">
                <TruthBadge score={item.truthScore} />
                <span className="text-xs text-muted">{item.checkers} checkers</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
