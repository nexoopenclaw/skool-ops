import { ActionTask, ContentItem, Member } from "@/lib/types";

export const members: Member[] = [
  { id: "m1", name: "Ava Ruiz", email: "ava@creator.com", status: "active", plan: "annual", joinedAt: "2025-10-14", lastSeenDays: 1, progressPct: 82, mrrContribution: 119 },
  { id: "m2", name: "Leo Park", email: "leo@agency.io", status: "at_risk", plan: "monthly", joinedAt: "2025-11-02", lastSeenDays: 12, progressPct: 34, mrrContribution: 49 },
  { id: "m3", name: "Mina Costa", email: "mina@studio.co", status: "active", plan: "monthly", joinedAt: "2026-01-09", lastSeenDays: 3, progressPct: 66, mrrContribution: 49 },
  { id: "m4", name: "Jon Hale", email: "jon@ops.dev", status: "paused", plan: "monthly", joinedAt: "2025-09-25", lastSeenDays: 28, progressPct: 18, mrrContribution: 0 },
  { id: "m5", name: "Nora Bell", email: "nora@build.ai", status: "at_risk", plan: "annual", joinedAt: "2025-07-03", lastSeenDays: 9, progressPct: 41, mrrContribution: 109 },
];

export const contentPipeline: ContentItem[] = [
  { id: "c1", title: "Launch Offer Audit", stage: "published", completionPct: 100, dueDate: "2026-02-10", owner: "Jordi" },
  { id: "c2", title: "Skool Onboarding Sprint", stage: "production", completionPct: 72, dueDate: "2026-03-04", owner: "Ops Team" },
  { id: "c3", title: "Annual Upgrade Playbook", stage: "production", completionPct: 58, dueDate: "2026-03-10", owner: "Growth" },
  { id: "c4", title: "Retention Automation Templates", stage: "ideation", completionPct: 23, dueDate: "2026-03-17", owner: "CS" },
];

export const actionQueue: ActionTask[] = [
  { id: "t1", title: "Call Leo Park re: churn signals", owner: "CS", dueAt: "Today 18:00", priority: "high", relatedMember: "Leo Park", status: "todo" },
  { id: "t2", title: "Upsell annual to Mina Costa", owner: "Sales", dueAt: "Mon 10:30", priority: "medium", relatedMember: "Mina Costa", status: "in_progress" },
  { id: "t3", title: "Publish onboarding sprint module", owner: "Content", dueAt: "Mon 16:00", priority: "high", status: "todo" },
  { id: "t4", title: "Review inactive members list", owner: "Ops", dueAt: "Tue 09:00", priority: "low", status: "todo" },
];
