import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
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

const expectations = [
  "30-minute strategy session",
  "Discuss your business goals",
  "Review your current marketing efforts",
  "Explore the best Quorbit package",
  "Ask questions about our services",
  "No obligation consultation",
];

export default function ScheduleACallPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative bg-midnight pt-24 pb-28 px-6 overflow-hidden border-b border-midnight-muted"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,201,25,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="relative max-w-4xl mx-auto">
          <ServiceHero
            badge="Free Strategy Call"
            headline="Schedule a Strategy Call"
            subheadline="Let's discuss your business goals, current marketing efforts, and the best strategy for sustainable growth. Choose a convenient time below to book your free consultation."
          />
        </div>
      </section>

      {/* ── BOOKING SECTION ── */}
      <section className="py-16 px-6 bg-midnight-light border-b border-midnight-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">

            {/* What to Expect card */}
            <ScrollReveal>
              <div className="border border-midnight-muted rounded-xl bg-midnight p-7 lg:sticky lg:top-24">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-5">
                  What to Expect
                </span>
                <div className="w-8 h-0.5 bg-yellow mb-6" />
                <ul className="space-y-4">
                  {expectations.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-yellow flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-ice-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Booking iframe */}
            <ScrollReveal delay={0.1}>
              <div className="border border-midnight-muted rounded-xl overflow-hidden bg-midnight">
                <iframe
                  src="https://outlook.office.com/book/QuorbitFullStackMarketingAutomationAgency@thequorbit.com/?ismsaljsauthenabled"
                  title="Book a Strategy Call — Quorbit"
                  loading="lazy"
                  allow="camera; microphone; autoplay; clipboard-write"
                  className="w-full border-0 block"
                  style={{ minHeight: "950px" }}
                />
              </div>
            </ScrollReveal>

          </div>
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
