export type Plan = "monthly" | "annual";

export interface Member {
  id: string;
  name: string;
  email: string;
  status: "active" | "at_risk" | "paused";
  plan: Plan;
  joinedAt: string;
  lastSeenDays: number;
  progressPct: number;
  mrrContribution: number;
}

export interface ContentItem {
  id: string;
  title: string;
  stage: "ideation" | "production" | "published";
  completionPct: number;
  dueDate: string;
  owner: string;
}

export interface ActionTask {
  id: string;
  title: string;
  owner: string;
  dueAt: string;
  priority: "high" | "medium" | "low";
  relatedMember?: string;
  status: "todo" | "in_progress" | "done";
}
