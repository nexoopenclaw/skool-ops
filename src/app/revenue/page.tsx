import { AppShell } from "@/components/shell";
import { Card, Panel } from "@/components/ui";
import { getKpis } from "@/lib/kpi";

export default function RevenuePage() {
  const kpi = getKpis();

  return (
    <AppShell title="Revenue Module">
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="MRR" value={`$${kpi.mrr}`} hint="Current monthly recurring revenue" />
        <Card title="Annual Conversion Opps" value={String(kpi.annualOpportunities)} />
        <Card title="90-Day Forecast" value={`$${kpi.forecast90}`} />
      </div>
      <div className="mt-6">
        <Panel title="Revenue Notes">
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Focus on at-risk annual members first for rapid retention impact.</li>
            <li>Bundle annual upgrade with concierge implementation call.</li>
            <li>Track offer-to-upgrade conversion weekly in Supabase events table.</li>
          </ul>
        </Panel>
      </div>
    </AppShell>
  );
}
