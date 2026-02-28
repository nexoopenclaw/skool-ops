"use client";

import { FormEvent, useMemo, useState } from "react";
import { AppShell } from "@/components/shell";
import { Badge, Panel } from "@/components/ui";
import { members as seedMembers } from "@/lib/mock-data";
import { Member, Plan } from "@/lib/types";

const statusTone: Record<Member["status"], "emerald" | "amber" | "rose"> = {
  active: "emerald",
  at_risk: "amber",
  paused: "rose",
};

const statusLabel: Record<Member["status"], string> = {
  active: "Active",
  at_risk: "At Risk",
  paused: "Paused",
};

export default function MembersPage() {
  const [rows, setRows] = useState<Member[]>(seedMembers);
  const [planFilter, setPlanFilter] = useState<"all" | Plan>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | Member["status"]>("all");
  const [form, setForm] = useState({ name: "", email: "", plan: "monthly" as Plan, status: "active" as Member["status"] });

  const visibleMembers = useMemo(() => {
    return rows.filter((m) => {
      const planOk = planFilter === "all" || m.plan === planFilter;
      const statusOk = statusFilter === "all" || m.status === statusFilter;
      return planOk && statusOk;
    });
  }, [rows, planFilter, statusFilter]);

  const segments = useMemo(
    () => ({
      active: rows.filter((m) => m.status === "active").length,
      atRisk: rows.filter((m) => m.status === "at_risk").length,
      paused: rows.filter((m) => m.status === "paused").length,
    }),
    [rows],
  );

  function handleAddMember(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;

    const newMember: Member = {
      id: `m-${Date.now()}`,
      name: form.name.trim(),
      email: form.email.trim(),
      plan: form.plan,
      status: form.status,
      joinedAt: new Date().toISOString().slice(0, 10),
      lastSeenDays: 0,
      progressPct: 0,
      mrrContribution: form.plan === "annual" ? 99 : 49,
    };

    setRows((prev) => [newMember, ...prev]);
    setForm({ name: "", email: "", plan: "monthly", status: "active" });
  }

  return (
    <AppShell title="Members Module">
      <div className="grid gap-4 md:grid-cols-3">
        <Panel title="Health Segments">
          <div className="flex flex-wrap gap-2">
            <Badge tone="emerald">Active: {segments.active}</Badge>
            <Badge tone="amber">At Risk: {segments.atRisk}</Badge>
            <Badge tone="rose">Paused: {segments.paused}</Badge>
          </div>
        </Panel>

        <Panel title="Filters">
          <div className="flex flex-wrap gap-2 text-xs">
            <select
              value={planFilter}
              onChange={(e) => setPlanFilter(e.target.value as "all" | Plan)}
              className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2"
            >
              <option value="all">All plans</option>
              <option value="monthly">Monthly</option>
              <option value="annual">Annual</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as "all" | Member["status"])}
              className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2"
            >
              <option value="all">All statuses</option>
              <option value="active">Active</option>
              <option value="at_risk">At risk</option>
              <option value="paused">Paused</option>
            </select>
          </div>
        </Panel>

        <Panel title="Quick Add Member (UI)">
          <form onSubmit={handleAddMember} className="grid gap-2 text-xs">
            <input
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Full name"
              className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2"
            />
            <input
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="Email"
              type="email"
              className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2"
            />
            <div className="grid grid-cols-2 gap-2">
              <select
                value={form.plan}
                onChange={(e) => setForm((prev) => ({ ...prev, plan: e.target.value as Plan }))}
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2"
              >
                <option value="monthly">Monthly</option>
                <option value="annual">Annual</option>
              </select>
              <select
                value={form.status}
                onChange={(e) => setForm((prev) => ({ ...prev, status: e.target.value as Member["status"] }))}
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2"
              >
                <option value="active">Active</option>
                <option value="at_risk">At risk</option>
                <option value="paused">Paused</option>
              </select>
            </div>
            <button className="rounded-lg border border-cyan-500/50 bg-cyan-500/10 px-3 py-2 text-cyan-200 transition hover:bg-cyan-500/20">
              Add member
            </button>
          </form>
        </Panel>
      </div>

      <div className="mt-6">
        <Panel title="Member Health, Plans & Actions">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-slate-400">
                <tr>
                  <th className="pb-2">Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Plan</th>
                  <th>Risk Flag</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {visibleMembers.map((m) => (
                  <tr key={m.id}>
                    <td className="py-3 font-medium">{m.name}</td>
                    <td>{m.email}</td>
                    <td>
                      <Badge tone={statusTone[m.status]}>{statusLabel[m.status]}</Badge>
                    </td>
                    <td>
                      <Badge tone={m.plan === "annual" ? "indigo" : "cyan"}>{m.plan}</Badge>
                    </td>
                    <td>
                      {m.lastSeenDays > 7 ? <Badge tone="amber">⚠ Inactive</Badge> : <Badge tone="emerald">Healthy</Badge>}
                    </td>
                    <td>
                      <div className="flex flex-wrap gap-1.5 text-xs">
                        <button className="rounded-md border border-slate-700 px-2 py-1 text-slate-200">Follow-up</button>
                        <button className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-cyan-200">Upgrade</button>
                        <button className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-amber-200">Reactivate</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
