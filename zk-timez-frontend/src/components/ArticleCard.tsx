import { Clock, User, Eye } from "lucide-react";
import TruthBadge from "./TruthBadge";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  truthScore: number;
  readTime: string;
  views: number;
  category: string;
}

export default function ArticleCard({
  title,
  excerpt,
  author,
  truthScore,
  readTime,
  views,
  category,
}: ArticleCardProps) {
  return (
    <article className="group rounded-xl border border-card-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <div className="flex items-center justify-between mb-3">
        <span className="rounded-md bg-midnight-light px-2.5 py-1 text-xs font-medium text-accent">
          {category}
        </span>
        <TruthBadge score={truthScore} />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted line-clamp-3 mb-4">{excerpt}</p>
      <div className="flex items-center justify-between text-xs text-muted">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <User size={12} />
            {author}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {readTime}
          </span>
        </div>
        <span className="flex items-center gap-1">
          <Eye size={12} />
          {views.toLocaleString()}
        </span>
      </div>
    </article>
  );
}
