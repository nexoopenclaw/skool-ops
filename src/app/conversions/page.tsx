import { AppShell } from "@/components/shell";
import { Badge, Card, Panel } from "@/components/ui";
import { conversionEvents } from "@/lib/mock-data";

const eventTone = {
  upgrade: "indigo",
  reactivation: "amber",
  new_member: "emerald",
} as const;

export default function ConversionsPage() {
  const totalValue = conversionEvents.reduce((acc, e) => acc + e.value, 0);
  const upgrades = conversionEvents.filter((e) => e.eventType === "upgrade").length;
  const reactivations = conversionEvents.filter((e) => e.eventType === "reactivation").length;
  const newMembers = conversionEvents.filter((e) => e.eventType === "new_member").length;

  return (
    <AppShell title="Conversion Tracker">
      <div className="grid gap-4 md:grid-cols-4">
        <Card title="Tracked Events" value={String(conversionEvents.length)} />
        <Card title="Total Conversion Value" value={`$${totalValue}`} />
        <Card title="Upgrades" value={String(upgrades)} hint="Monthly → Annual" />
        <Card title="Reactivations" value={String(reactivations)} hint="Recovered churn/trial" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Panel title="Event Mix">
          <div className="space-y-2 text-sm text-slate-300">
            <p>New members: <span className="font-semibold text-white">{newMembers}</span></p>
            <p>Upgrades: <span className="font-semibold text-white">{upgrades}</span></p>
            <p>Reactivations: <span className="font-semibold text-white">{reactivations}</span></p>
          </div>
        </Panel>

        <div className="lg:col-span-2">
          <Panel title="Conversion Events Feed (Mock Seed)">
            <div className="space-y-3">
              {conversionEvents.map((event) => (
                <div key={event.id} className="rounded-xl border border-slate-800 p-3 text-sm">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium">{event.memberName}</p>
                    <Badge tone={eventTone[event.eventType]}>{event.eventType.replace("_", " ")}</Badge>
                  </div>
                  <p className="mt-1 text-slate-400">
                    {event.fromPlan} → {event.toPlan} • ${event.value} • {event.channel}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{event.createdAt}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
