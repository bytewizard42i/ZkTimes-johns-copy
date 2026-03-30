import { Megaphone, Users, Eye, ShieldCheck, BarChart3, Coins, Target, Zap } from "lucide-react";
import StatsCard from "@/components/StatsCard";

const adPackages = [
  { name: "Starter", price: "$50", period: "/week", impressions: "5,000", features: ["Verified human impressions", "Basic analytics dashboard", "Category targeting", "1 active campaign"] },
  { name: "Growth", price: "$200", period: "/week", impressions: "25,000", popular: true, features: ["Everything in Starter", "Advanced audience targeting", "Real-time analytics", "5 active campaigns", "A/B testing"] },
  { name: "Enterprise", price: "Custom", period: "", impressions: "Unlimited", features: ["Everything in Growth", "Dedicated support", "Custom integrations", "Unlimited campaigns", "Priority placement", "On-chain verification reports"] },
];

const benefits = [
  { icon: Users, title: "Real Humans Only", description: "ZK proofs verify every reader is a real person. Zero bot traffic, zero fraud." },
  { icon: ShieldCheck, title: "Brand-Safe Content", description: "Every article is fact-checked. Your ads appear next to verified, truthful content only." },
  { icon: BarChart3, title: "Transparent Metrics", description: "On-chain analytics you can verify yourself. No inflated numbers, no black boxes." },
  { icon: Target, title: "Precision Targeting", description: "Target by category, reader reputation, and engagement level - all privacy-preserving." },
];

export default function AdsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Megaphone size={28} className="text-accent" />
          <h1 className="text-3xl font-bold text-foreground">Advertiser Dashboard</h1>
        </div>
        <p className="text-muted text-sm">Reach real, verified humans. No bots, no fraud - transparent attention marketplace powered by ZK proofs.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <StatsCard icon={Eye} label="Total Impressions" value="2.4M" change="+18%" positive />
        <StatsCard icon={Users} label="Verified Readers" value="48,200" change="+12%" positive />
        <StatsCard icon={Coins} label="Avg CPC" value="$0.08" change="-5%" positive />
        <StatsCard icon={Zap} label="Conversion Rate" value="4.2%" change="+0.8%" positive />
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-6">Why Advertise on ZK TimeZ?</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <div key={i} className="rounded-xl border border-card-border bg-card p-5 transition-all hover:border-accent/20">
              <benefit.icon size={24} className="text-accent mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-1">{benefit.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-foreground mb-6 text-center">Ad Packages</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {adPackages.map((pkg, i) => (
            <div key={i} className={`relative rounded-xl border p-6 transition-all ${pkg.popular ? "border-accent bg-accent/5 shadow-lg shadow-accent/10" : "border-card-border bg-card"}`}>
              {pkg.popular && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">Most Popular</div>)}
              <h3 className="text-lg font-bold text-foreground">{pkg.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-accent">{pkg.price}</span>
                <span className="text-sm text-muted">{pkg.period}</span>
              </div>
              <p className="mt-1 text-xs text-muted">Up to {pkg.impressions} impressions</p>
              <ul className="mt-4 space-y-2">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted">
                    <ShieldCheck size={14} className="text-accent shrink-0" />{feature}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${pkg.popular ? "bg-accent text-white hover:bg-accent-hover" : "border border-card-border bg-background text-foreground hover:border-accent/30"}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
