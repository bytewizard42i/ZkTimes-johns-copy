import { type LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
}

export default function StatsCard({
  icon: Icon,
  label,
  value,
  change,
  positive,
}: StatsCardProps) {
  return (
    <div className="rounded-xl border border-card-border bg-card p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted uppercase tracking-wider">
          {label}
        </span>
        <Icon size={18} className="text-accent" />
      </div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      {change && (
        <div
          className={`mt-1 text-xs font-medium ${
            positive ? "text-success" : "text-danger"
          }`}
        >
          {positive ? "+" : ""}
          {change}
        </div>
      )}
    </div>
  );
}
