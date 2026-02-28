import { AppShell } from "@/components/shell";
import { Panel } from "@/components/ui";
import { members } from "@/lib/mock-data";

export default function MembersPage() {
  return (
    <AppShell title="Members Module">
      <Panel title="Member Health & Plans">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-slate-400">
              <tr>
                <th className="pb-2">Name</th><th>Email</th><th>Status</th><th>Plan</th><th>Risk Flag</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {members.map((m) => (
                <tr key={m.id}>
                  <td className="py-3 font-medium">{m.name}</td>
                  <td>{m.email}</td>
                  <td>{m.status}</td>
                  <td>{m.plan}</td>
                  <td>{m.lastSeenDays > 7 ? "⚠️ Inactive" : "Healthy"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </AppShell>
  );
}
