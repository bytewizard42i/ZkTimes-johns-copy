"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Newspaper,
  PenLine,
  BookOpen,
  ShieldCheck,
  Star,
  Megaphone,
  Menu,
  X,
} from "lucide-react";
import WalletConnect from "./WalletConnect";

const navLinks = [
  { href: "/", label: "Home", icon: Newspaper },
  { href: "/write", label: "Write", icon: PenLine },
  { href: "/read", label: "Read", icon: BookOpen },
  { href: "/fact-check", label: "Fact Check", icon: ShieldCheck },
  { href: "/reputation", label: "Reputation", icon: Star },
  { href: "/ads", label: "Ads", icon: Megaphone },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white font-bold text-sm transition-transform group-hover:scale-110">
            ZK
          </div>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-accent">ZK</span>{" "}
            <span className="text-foreground">TimeZ</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-card hover:text-foreground"
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <WalletConnect />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-lg p-2 text-muted hover:bg-card hover:text-foreground transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-card-border bg-background px-4 pb-4">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-card hover:text-foreground"
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
