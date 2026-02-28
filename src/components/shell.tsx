"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import clsx from "clsx";

const nav = [
  { href: "/", label: "Dashboard" },
  { href: "/members", label: "Members" },
  { href: "/conversions", label: "Conversions" },
  { href: "/content", label: "Content" },
  { href: "/revenue", label: "Revenue" },
  { href: "/actions", label: "Action Queue" },
];

export function AppShell({ title, children }: { title: string; children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#090c12] text-slate-100">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8 sm:px-8">
        <aside className="sticky top-8 hidden h-fit w-60 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 lg:block">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] brand-text">Skool Ops</p>
          <nav className="space-y-2">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "block rounded-lg px-3 py-2 text-sm transition",
                    active ? "brand-chip-active brand-glow" : "text-slate-300 hover:bg-slate-800 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1">
          <div className="mb-6 rounded-2xl border brand-border bg-gradient-to-r from-[rgba(212,232,58,0.18)] to-[rgba(212,232,58,0.05)] p-5 brand-glow">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] brand-text">Creator Revenue OS</p>
                <h1 className="mt-2 text-2xl font-semibold">{title}</h1>
              </div>
              <span className="rounded-full border brand-border brand-surface px-3 py-1 text-xs text-slate-100">MVP Online</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 lg:hidden">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "rounded-lg border px-3 py-1.5 text-xs transition",
                      active ? "brand-chip-active" : "border-slate-700 text-slate-200",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}
