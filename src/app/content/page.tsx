import { AppShell } from "@/components/shell";
import { Badge, Panel } from "@/components/ui";
import { contentPipeline } from "@/lib/mock-data";

export default function ContentPage() {
  return (
    <AppShell title="Content Module">
      <Panel title="Pipeline + Completion Tracking">
        <div className="space-y-3">
          {contentPipeline.map((item) => (
            <div key={item.id} className="rounded-xl border border-slate-800 p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-medium">{item.title}</p>
                <Badge tone={item.stage === "published" ? "emerald" : item.stage === "production" ? "indigo" : "amber"}>{item.stage}</Badge>
              </div>
              <div className="h-2 rounded bg-slate-800">
                <div className="h-2 rounded bg-cyan-400" style={{ width: `${item.completionPct}%` }} />
              </div>
              <p className="mt-2 text-xs text-slate-400">Owner: {item.owner} • Due: {item.dueDate}</p>
            </div>
          ))}
        </div>
      </Panel>
    </AppShell>
  );
}
