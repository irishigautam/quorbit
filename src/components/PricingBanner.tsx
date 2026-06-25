import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

interface Props {
  price: string;
  period?: string;
  setupFee: string;
  note?: string;
  background?: "dark" | "light";
}

export default function PricingBanner({
  price,
  period = "per month",
  setupFee,
  note,
  background = "light",
}: Props) {
  const bg = background === "light" ? "bg-midnight-light" : "bg-midnight";

  return (
    <section className={`${bg} border-y border-midnight-muted py-14 px-6`}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-black text-yellow tabular-nums">{price}</span>
              <span className="text-base text-ice-muted">{period}</span>
            </div>
            <div className="flex flex-col sm:items-end gap-2">
              <div className="inline-flex items-center gap-2 bg-midnight-muted/60 border border-midnight-muted rounded-lg px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-ice-muted">Setup Fee</span>
                <span className="w-px h-3 bg-midnight-muted" />
                <span className="text-sm font-black text-ice">{setupFee}</span>
                <span className="text-xs text-ice-muted">one-time</span>
              </div>
              {note && <p className="text-xs text-ice-muted">{note}</p>}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-midnight-muted flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-6 py-3.5 rounded-lg hover:bg-yellow-dark transition-all text-sm"
            >
              Get Started with This Package
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-xs text-ice-muted">No commitment required. Talk to a strategist first.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
