import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Schedule a Strategy Call — Quorbit",
  description:
    "Book a free 30-minute strategy call with the Quorbit team. Discuss your business goals, review your current marketing, and explore the right growth package — no obligation required.",
  openGraph: {
    title: "Schedule a Strategy Call — Quorbit",
    description:
      "Book a free 30-minute strategy call. No commitment, no sales deck — just a direct conversation about your growth.",
    url: "https://quorbit.io/schedule-a-call",
  },
  alternates: { canonical: "https://quorbit.io/schedule-a-call" },
};

export default function ScheduleACallPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative bg-midnight pt-24 pb-20 px-6 overflow-hidden border-b border-midnight-muted"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,201,25,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="relative max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-6">
            Free Strategy Call
          </span>
          <div className="w-12 h-0.5 bg-yellow mb-7" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-ice mb-7 max-w-3xl">
            Schedule a Strategy Call
          </h1>
          <p className="text-lg text-ice-muted leading-relaxed max-w-xl">
            Let&apos;s discuss your business goals, current marketing efforts, and the best strategy
            for sustainable growth. Choose a convenient time below to book your free consultation.
          </p>
        </div>
      </section>

      {/* ── BOOKING CALENDAR ── */}
      <section className="py-12 px-6 bg-midnight-light border-b border-midnight-muted">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="border border-midnight-muted rounded-xl overflow-hidden bg-midnight">
              <iframe
                src="https://outlook.office.com/book/QuorbitFullStackMarketingAutomationAgency@thequorbit.com/?ismsaljsauthenabled"
                title="Book a Strategy Call — Quorbit"
                width="100%"
                loading="lazy"
                allow="camera; microphone; autoplay; clipboard-write; encrypted-media"
                className="block border-0 w-full"
                style={{ minHeight: "900px" }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TRUST SECTION ── */}
      <section className="py-20 px-6 bg-midnight">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-xl text-ice leading-relaxed border-l-4 border-yellow pl-6">
              Every successful partnership starts with understanding your business. During this
              strategy session, we&apos;ll discuss your goals, evaluate your current marketing
              efforts, and recommend whether Launch, Ascent, Orbit, or a custom engagement is
              the best fit for your business.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
