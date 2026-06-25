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

            {/* Booking card */}
            <ScrollReveal delay={0.1}>
              <div className="border border-midnight-muted rounded-xl overflow-hidden bg-midnight">

                {/* Card header */}
                <div
                  className="relative flex flex-col items-center justify-center py-14 px-8 border-b border-midnight-muted"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,201,25,0.07) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-yellow/10 border border-yellow/20 flex items-center justify-center mb-5">
                    <svg
                      className="w-8 h-8 text-yellow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">
                    Microsoft Bookings
                  </span>
                </div>

                {/* Card body */}
                <div className="p-8 sm:p-10">
                  <div className="w-10 h-0.5 bg-yellow mb-6" />
                  <h2 className="text-2xl sm:text-3xl font-black text-ice leading-tight mb-5">
                    Book Your Free Strategy Call
                  </h2>
                  <p className="text-ice-muted leading-relaxed mb-3">
                    Our scheduling portal is hosted on Microsoft Bookings — a secure, dedicated
                    platform for managing appointments. Clicking the button below will open a new
                    tab where you can select your preferred date and time.
                  </p>
                  <p className="text-ice-muted leading-relaxed mb-10">
                    The process takes under two minutes. Choose a slot that works for you and
                    receive an instant calendar confirmation.
                  </p>

                  {/* Steps */}
                  <div className="space-y-3 mb-10 pb-10 border-b border-midnight-muted">
                    {[
                      "Click the button to open the booking portal",
                      "Choose your preferred date and time",
                      "Enter your name and email address",
                      "Receive an instant calendar confirmation",
                    ].map((step, i) => (
                      <div key={step} className="flex items-center gap-4">
                        <span className="w-6 h-6 rounded-full bg-midnight-muted flex items-center justify-center text-xs font-bold text-ice-muted flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-sm text-ice-muted">{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="https://bookings.cloud.microsoft/book/QuorbitFullStackMarketingAutomationAgency@thequorbit.com/?ismsaljsauthenabled"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-yellow text-midnight font-bold px-8 py-4 rounded-lg hover:bg-yellow-dark transition-all text-sm uppercase tracking-widest"
                  >
                    Open Booking Calendar
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>

                  {/* Trust line */}
                  <div className="flex items-center justify-center gap-2.5 mt-5">
                    <svg
                      className="w-3.5 h-3.5 text-ice-muted/50 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <p className="text-xs text-ice-muted/60 text-center">
                      Secure Microsoft Bookings portal · Opens in a new tab · No account required
                    </p>
                  </div>
                </div>
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
