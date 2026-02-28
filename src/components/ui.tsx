import clsx from "clsx";
import { ReactNode } from "react";

export function Card({
  title,
  value,
  hint,
  highlight = false,
}: {
  title: string;
  value: string;
  hint?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border bg-slate-900/70 p-4",
        highlight ? "brand-border brand-surface brand-glow" : "border-slate-800",
      )}
    >
      <p className={clsx("text-xs uppercase tracking-wide", highlight ? "brand-text" : "text-slate-400")}>{title}</p>
      <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
      {hint ? <p className="mt-1 text-xs text-slate-400">{hint}</p> : null}
    </div>
  );
}

export function Panel({
  title,
  children,
  accent = false,
}: {
  title: string;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <section className={clsx("rounded-2xl border bg-slate-900/70 p-4", accent ? "brand-border" : "border-slate-800")}>
      <h2 className={clsx("mb-3 text-sm font-semibold", accent ? "brand-text" : "text-slate-200")}>{title}</h2>
      {children}
    </section>
  );
}

const badgeMap = {
  slate: "border-slate-600 bg-slate-800/70 text-slate-200",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-200",
  rose: "border-rose-500/30 bg-rose-500/10 text-rose-200",
  indigo: "border-indigo-500/30 bg-indigo-500/10 text-indigo-200",
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-200",
  brand: "brand-chip-active",
} as const;

export function Badge({
  children,
  tone = "slate",
}: {
  children: ReactNode;
  tone?: keyof typeof badgeMap;
}) {
  return <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] uppercase ${badgeMap[tone]}`}>{children}</span>;
}

export function PrimaryButton({ children, className }: { children: ReactNode; className?: string }) {
  return <button className={clsx("rounded-lg px-3 py-2 text-xs font-medium brand-button", className)}>{children}</button>;
}
