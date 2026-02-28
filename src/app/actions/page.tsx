import { AppShell } from "@/components/shell";
import { Panel } from "@/components/ui";
import { actionQueue } from "@/lib/mock-data";

export default function ActionsPage() {
  const todo = actionQueue.filter((t) => t.status === "todo");
  const inProgress = actionQueue.filter((t) => t.status === "in_progress");

  return (
    <AppShell title="Action Queue">
      <div className="grid gap-4 md:grid-cols-3">
        <Panel title="Queue Summary">
          <div className="space-y-2 text-sm text-slate-300">
            <p>To do: <span className="font-semibold text-white">{todo.length}</span></p>
            <p>In progress: <span className="font-semibold text-white">{inProgress.length}</span></p>
            <p>High priority: <span className="font-semibold text-white">{actionQueue.filter((x) => x.priority === "high").length}</span></p>
          </div>
        </Panel>

        <div className="md:col-span-2">
          <Panel title="Tasks, Reminders & Next Actions">
            <div className="space-y-3">
              {actionQueue.map((task) => (
                <div key={task.id} className="rounded-xl border border-slate-800 p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{task.title}</p>
                    <div className="flex gap-2 text-[10px] uppercase">
                      <span className="rounded-full border border-slate-600 px-2 py-0.5 text-slate-300">{task.priority}</span>
                      <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-indigo-200">{task.status}</span>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">
                    Owner: {task.owner} • Due: {task.dueAt} {task.relatedMember ? `• Member: ${task.relatedMember}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
