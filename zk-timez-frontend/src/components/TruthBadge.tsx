import { ShieldCheck } from "lucide-react";

interface TruthBadgeProps {
  score: number;
}

export default function TruthBadge({ score }: TruthBadgeProps) {
  const getColor = () => {
    if (score >= 85) return "text-success border-success/30 bg-success/10";
    if (score >= 60) return "text-warning border-warning/30 bg-warning/10";
    return "text-danger border-danger/30 bg-danger/10";
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getColor()}`}
    >
      <ShieldCheck size={12} />
      {score}% Truth
    </span>
  );
}
