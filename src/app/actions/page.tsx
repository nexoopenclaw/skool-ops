import { AppShell } from "@/components/shell";
import { Panel } from "@/components/ui";
import { actionQueue } from "@/lib/mock-data";

export default function ActionsPage() {
  return (
    <AppShell title="Action Queue">
      <Panel title="Tasks, Reminders & Next Actions">
        <div className="space-y-3">
          {actionQueue.map((task) => (
            <div key={task.id} className="rounded-xl border border-slate-800 p-3">
              <div className="flex items-center justify-between">
                <p className="font-medium">{task.title}</p>
                <span className="text-xs uppercase text-slate-400">{task.priority}</span>
              </div>
              <p className="mt-1 text-sm text-slate-400">
                Owner: {task.owner} • Due: {task.dueAt} {task.relatedMember ? `• Member: ${task.relatedMember}` : ""}
              </p>
            </div>
          ))}
        </div>
      </Panel>
    </AppShell>
  );
}
