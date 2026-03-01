import Link from "next/link";
import { AppShell } from "@/components/shell";
import { Badge, Card, Panel } from "@/components/ui";
import { actionQueue, members } from "@/lib/mock-data";
import { getKpis } from "@/lib/kpi";

export default function Home() {
  const kpi = getKpis();
  const annualUpgradeTargets = members.filter((m) => m.plan === "monthly" && m.status === "active");
  const atRisk = members.filter((m) => m.status === "at_risk");

  return (
    <AppShell title="Home Dashboard">
      <div className="section-accent mb-4" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <Card title="Members" value={String(kpi.totalMembers)} highlight />
        <Card title="Churn Risk" value={String(kpi.churnRisk)} hint="Needs immediate follow-up" />
        <Card title="Annual Upgrade %" value={`${kpi.annualPct}%`} highlight />
        <Card title="Content Completion" value={`${kpi.contentCompletion}%`} />
        <Card title="Pending Followups" value={String(kpi.pendingFollowups)} />
      </div>

      <div className="mt-4 rounded-2xl border brand-border brand-surface p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] brand-text">Go Live</p>
            <p className="text-sm text-slate-200">Definí pricing, checkout y launch desde la sección Offer.</p>
          </div>
          <Link href="/offer" className="brand-button rounded-lg px-3 py-2 text-sm">
            Abrir Offer & Checkout
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Panel title="Top Risk Members" accent>
          <div className="space-y-2">
            {atRisk.map((m) => (
              <div key={m.id} className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-3 text-sm">
                <p className="font-medium">{m.name}</p>
                <p className="text-slate-400">Last seen {m.lastSeenDays} days ago • Progress {m.progressPct}%</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Annual Upgrade Opportunities">
          <div className="space-y-2">
            {annualUpgradeTargets.map((m) => (
              <div key={m.id} className="rounded-xl border brand-border brand-surface p-3 text-sm">
                <p className="font-medium">{m.name}</p>
                <p className="text-slate-300">Monthly → Annual • MRR ${m.mrrContribution}</p>
              </div>
            ))}
            {!annualUpgradeTargets.length ? <p className="text-xs text-slate-400">No immediate targets this week.</p> : null}
          </div>
        </Panel>

        <Panel title="This Week Sprint Focus">
          <ol className="list-decimal space-y-2 pl-4 text-sm text-slate-300">
            <li>Close 2 annual upgrades from active monthly members.</li>
            <li>Publish 2 conversion-focused onboarding assets.</li>
            <li>Resolve all members inactive for +7 days.</li>
          </ol>
        </Panel>
      </div>

      <div className="mt-6">
        <Panel title="Next Revenue Actions" accent>
          <div className="grid gap-2 md:grid-cols-2">
            {actionQueue.slice(0, 4).map((task) => (
              <div key={task.id} className="rounded-xl border border-slate-700 p-3 text-sm">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{task.title}</p>
                  <Badge tone={task.priority === "high" ? "rose" : task.priority === "medium" ? "amber" : "brand"}>{task.priority}</Badge>
                </div>
                <p className="mt-1 text-slate-400">
                  {task.owner} • {task.dueAt}
                </p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
