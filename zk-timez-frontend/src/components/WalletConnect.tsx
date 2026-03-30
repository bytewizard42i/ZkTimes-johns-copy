"use client";

import { useState } from "react";
import { Wallet, ChevronDown, LogOut, Copy, ExternalLink } from "lucide-react";

export default function WalletConnect() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mockConnect = () => {
    const mockAddr =
      "0x" +
      Array.from({ length: 40 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join("");
    setAddress(mockAddr);
    setConnected(true);
  };

  const disconnect = () => {
    setAddress("");
    setConnected(false);
    setDropdownOpen(false);
  };

  const truncate = (addr: string) =>
    addr.slice(0, 6) + "..." + addr.slice(-4);

  if (!connected) {
    return (
      <button
        onClick={mockConnect}
        className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        <Wallet size={16} />
        Connect Wallet
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 rounded-lg border border-card-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
      >
        <div className="h-2 w-2 rounded-full bg-success" />
        {truncate(address)}
        <ChevronDown size={14} className="text-muted" />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-card-border bg-card p-2 shadow-xl">
          <div className="px-3 py-2 text-xs text-muted">Connected Wallet</div>
          <div className="px-3 py-1 text-sm font-mono text-foreground">
            {truncate(address)}
          </div>
          <div className="my-2 border-t border-card-border" />
          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-background hover:text-foreground">
            <Copy size={14} />
            Copy Address
          </button>
          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-background hover:text-foreground">
            <ExternalLink size={14} />
            View on Explorer
          </button>
          <div className="my-2 border-t border-card-border" />
          <button
            onClick={disconnect}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-danger transition-colors hover:bg-danger/10"
          >
            <LogOut size={14} />
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}
