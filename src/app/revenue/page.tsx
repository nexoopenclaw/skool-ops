import { AppShell } from "@/components/shell";
import { Badge, Card, Panel } from "@/components/ui";
import { getKpis } from "@/lib/kpi";
import { members } from "@/lib/mock-data";

export default function RevenuePage() {
  const kpi = getKpis();
  const monthlyActive = members.filter((m) => m.plan === "monthly" && m.status === "active");
  const yearlyUpside = monthlyActive.reduce((acc, m) => acc + m.mrrContribution * 12, 0);

  return (
    <AppShell title="Revenue Module">
      <div className="grid gap-4 md:grid-cols-4">
        <Card title="MRR" value={`$${kpi.mrr}`} hint="Current monthly recurring revenue" />
        <Card title="Annual Conversion Opps" value={String(kpi.annualOpportunities)} />
        <Card title="90-Day Forecast" value={`$${kpi.forecast90}`} />
        <Card title="Annual Upside" value={`$${yearlyUpside}`} hint="If monthly actives convert to annual" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Panel title="Conversion Targets (Monthly → Annual)">
          <div className="space-y-2">
            {monthlyActive.map((member) => (
              <div key={member.id} className="rounded-xl border border-slate-800 p-3 text-sm">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{member.name}</p>
                  <Badge tone="cyan">target</Badge>
                </div>
                <p className="mt-1 text-slate-400">Current MRR: ${member.mrrContribution} • Progress: {member.progressPct}%</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Offer Notes (for closing)">
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Anchor annual plan with clear savings + one implementation bonus.</li>
            <li>Run 72h deadline on annual upgrade campaign each week.</li>
            <li>Use DM follow-up sequence: offer, proof, urgency, close.</li>
          </ul>
        </Panel>
      </div>
    </AppShell>
  );
}
