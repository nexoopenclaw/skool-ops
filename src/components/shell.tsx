import Link from "next/link";
import { ReactNode } from "react";

const nav = [
  { href: "/", label: "Dashboard" },
  { href: "/members", label: "Members" },
  { href: "/content", label: "Content" },
  { href: "/revenue", label: "Revenue" },
  { href: "/actions", label: "Action Queue" },
];

export function AppShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#090c12] text-slate-100">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8 sm:px-8">
        <aside className="sticky top-8 hidden h-fit w-60 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 lg:block">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-slate-400">Skool Ops</p>
          <nav className="space-y-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1">
          <div className="mb-6 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-600/20 to-cyan-500/10 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">Creator Revenue OS</p>
            <h1 className="mt-2 text-2xl font-semibold">{title}</h1>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
