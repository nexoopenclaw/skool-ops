import Link from "next/link";
import { AppShell } from "@/components/shell";
import { Badge, Panel } from "@/components/ui";

const tiers = [
  {
    name: "Monthly",
    price: "$49/mo",
    note: "Para validar rápido",
    bullets: ["Dashboard Skool Ops", "Action Queue", "Conversion tracker"],
    cta: "Crear checkout Monthly",
  },
  {
    name: "Annual",
    price: "$348/yr",
    note: "Mejor valor",
    bullets: ["Todo Monthly", "Playbooks de retención", "Templates de follow-up"],
    cta: "Crear checkout Annual",
    featured: true,
  },
  {
    name: "Founder 20",
    price: "$197 único",
    note: "Oferta limitada",
    bullets: ["Acceso de por vida", "Priority feedback", "Badge founder"],
    cta: "Activar Founder deal",
  },
];

export default function OfferPage() {
  return (
    <AppShell title="Offer & Checkout Plan">
      <Panel title="Skool Ops AI — Offer One-Liner" accent>
        <p className="text-base text-slate-100">
          Convertí tu comunidad en un sistema que <span className="brand-text">retiene</span>,
          <span className="brand-text"> convierte a anual</span> y escala ingresos sin caos.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge tone="brand">cashflow-first</Badge>
          <Badge tone="brand">creator ops</Badge>
          <Badge tone="brand">retention + conversion</Badge>
        </div>
      </Panel>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {tiers.map((tier) => (
          <section
            key={tier.name}
            className={`rounded-2xl border p-5 ${tier.featured ? "brand-border brand-surface brand-glow" : "border-slate-800 bg-slate-900/70"}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              {tier.featured ? <Badge tone="brand">recommended</Badge> : null}
            </div>
            <p className="mt-2 text-3xl font-bold text-white">{tier.price}</p>
            <p className="mt-1 text-sm text-slate-400">{tier.note}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {tier.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
            <button className="brand-button mt-5 w-full rounded-lg px-3 py-2 text-sm">{tier.cta}</button>
          </section>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
        <h4 className="text-sm font-semibold brand-text">Go-live in &lt; 7 hours</h4>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-300">
          <li>Crear 3 checkouts (Monthly / Annual / Founder) en Hotmart.</li>
          <li>Pegar URLs en este módulo y en CTA del Home.</li>
          <li>Publicar secuencia de 3 stories con CTA “SKOOL OPS”.</li>
          <li>Trackear primeras conversiones en /conversions.</li>
        </ol>
        <Link href="/conversions" className="mt-4 inline-block text-sm brand-text underline">
          Ir a Conversions →
        </Link>
      </div>
    </AppShell>
  );
}
