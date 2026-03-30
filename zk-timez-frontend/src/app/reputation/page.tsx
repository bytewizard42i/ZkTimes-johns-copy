import { Star, TrendingUp, TrendingDown, Award, Clock, FileCheck, Users, AlertTriangle } from "lucide-react";
import TruthBadge from "@/components/TruthBadge";

const topWriters = [
  { rank: 1, name: "SatoshiFan42", score: 97, articles: 142, accuracy: 96, flagged: 1, earnings: "$12,450", trend: "up" },
  { rank: 2, name: "MidnightDev", score: 95, articles: 89, accuracy: 94, flagged: 0, earnings: "$8,230", trend: "up" },
  { rank: 3, name: "PolicyWatch", score: 93, articles: 204, accuracy: 91, flagged: 3, earnings: "$15,780", trend: "up" },
  { rank: 4, name: "TruthSeeker", score: 91, articles: 67, accuracy: 93, flagged: 0, earnings: "$5,120", trend: "up" },
  { rank: 5, name: "ADABuilder", score: 88, articles: 53, accuracy: 89, flagged: 2, earnings: "$3,890", trend: "down" },
];

const reputationFactors = [
  { icon: FileCheck, label: "Article Accuracy", effect: "positive", description: "High truth scores boost reputation" },
  { icon: Star, label: "Not Flagged", effect: "positive", description: "Clean publishing record adds points" },
  { icon: Clock, label: "Time on Platform", effect: "positive", description: "Longevity builds trust" },
  { icon: Users, label: "Reader Count", effect: "positive", description: "More readers = more credibility" },
  { icon: Award, label: "Fact Checker Rating", effect: "positive", description: "Verified by top checkers" },
  { icon: AlertTriangle, label: "False / Hype / Bots", effect: "negative", description: "Misleading content tanks score and earnings" },
];

export default function ReputationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Star size={28} className="text-accent" />
          <h1 className="text-3xl font-bold text-foreground">Reputation Leaderboard</h1>
        </div>
        <p className="text-muted text-sm">On-chain reputation scores. Transparent, immutable, earned - not bought.</p>
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">How Reputation is Scored</h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {reputationFactors.map((factor, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-card-border bg-card p-4">
              <factor.icon size={20} className={factor.effect === "positive" ? "text-success mt-0.5" : "text-danger mt-0.5"} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">{factor.label}</span>
                  <span className={`text-xs font-bold ${factor.effect === "positive" ? "text-success" : "text-danger"}`}>
                    {factor.effect === "positive" ? "+" : "-"}
                  </span>
                </div>
                <p className="text-xs text-muted mt-0.5">{factor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Top Writers</h2>
        <div className="rounded-xl border border-card-border overflow-hidden">
          <div className="hidden md:grid grid-cols-8 gap-4 bg-card px-5 py-3 text-xs font-medium text-muted uppercase tracking-wider border-b border-card-border">
            <div>Rank</div><div className="col-span-2">Writer</div><div>Score</div><div>Articles</div><div>Accuracy</div><div>Flagged</div><div>Earnings</div>
          </div>
          {topWriters.map((writer) => (
            <div key={writer.rank} className="grid grid-cols-2 md:grid-cols-8 gap-4 items-center px-5 py-4 border-b border-card-border last:border-0 hover:bg-card/50 transition-colors">
              <div className="text-lg font-bold text-accent">#{writer.rank}</div>
              <div className="md:col-span-2 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-midnight-light flex items-center justify-center text-xs font-bold text-accent">
                  {writer.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <span className="text-sm font-semibold text-foreground">{writer.name}</span>
                  <div className="flex items-center gap-1">
                    {writer.trend === "up" ? <TrendingUp size={12} className="text-success" /> : <TrendingDown size={12} className="text-danger" />}
                  </div>
                </div>
              </div>
              <div><TruthBadge score={writer.score} /></div>
              <div className="text-sm text-foreground">{writer.articles}</div>
              <div className="text-sm text-foreground">{writer.accuracy}%</div>
              <div className={`text-sm font-medium ${writer.flagged > 0 ? "text-warning" : "text-success"}`}>{writer.flagged}</div>
              <div className="text-sm font-semibold text-accent">{writer.earnings}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
