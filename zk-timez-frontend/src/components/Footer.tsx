import { GitBranch, MessageCircle, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-white font-bold text-xs">
              ZK
            </div>
            <span className="text-sm font-semibold">
              <span className="text-accent">ZK</span>{" "}
              <span className="text-foreground">TimeZ</span>
            </span>
            <span className="text-xs text-muted ml-2">1st Edition</span>
          </div>
          <p className="text-xs text-muted text-center">
            Decentralized Information Market &mdash; Powered by Midnight ZK Proofs
          </p>
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-foreground">
              <GitBranch size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-foreground">
              <MessageCircle size={18} />
            </a>
            <a href="https://midnight.network" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-foreground">
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
