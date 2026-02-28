import { actionQueue, contentPipeline, members } from "@/lib/mock-data";

export function getKpis() {
  const totalMembers = members.filter((m) => m.status !== "paused").length;
  const churnRisk = members.filter((m) => m.status === "at_risk").length;
  const annualPct = Math.round((members.filter((m) => m.plan === "annual").length / members.length) * 100);
  const contentCompletion = Math.round(
    contentPipeline.reduce((sum, item) => sum + item.completionPct, 0) / contentPipeline.length,
  );
  const pendingFollowups = actionQueue.filter((t) => t.status !== "done").length;

  const mrr = members.reduce((sum, m) => sum + m.mrrContribution, 0);
  const annualOpportunities = members.filter((m) => m.plan === "monthly" && m.status !== "paused").length;
  const forecast90 = Math.round(mrr * 3 * 1.12);

  return { totalMembers, churnRisk, annualPct, contentCompletion, pendingFollowups, mrr, annualOpportunities, forecast90 };
}
