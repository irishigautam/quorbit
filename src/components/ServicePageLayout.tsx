import Link from "next/link";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import ScrollReveal from "@/components/ScrollReveal";

interface MetricRow { metric: string; description: string; }
interface FAQ { question: string; answer: string; }
interface ProcessStep { title: string; body: string; }
interface ServiceSection { title: string; body: string; }

interface Props {
  badge: string;
  headline: string;
  subheadline: string;
  opening: string;
  whatIncluded: ServiceSection[];
  process: ProcessStep[];
  whoFor: string[];
  metrics: MetricRow[];
  faqs: FAQ[];
  ctaHeadline: string;
  ctaBody: string;
  ctaBottom: string;
  heroImage?: string;
}

export default function ServicePageLayout({
  badge, headline, subheadline, opening, whatIncluded, process,
  whoFor, metrics, faqs, ctaHeadline, ctaBody, ctaBottom, heroImage,
}: Props) {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative bg-midnight pt-24 pb-28 px-6 overflow-hidden"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,201,25,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      >
        <div className="relative max-w-4xl mx-auto">
          <ServiceHero badge={badge} headline={headline} subheadline={subheadline} />
        </div>
      </section>

      {/* Hero image */}
      {heroImage && (
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <Image src={heroImage} alt="" fill className="object-cover opacity-30" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight" />
        </div>
      )}

      {/* ── OPENING ── */}
      <section className="py-20 px-6 bg-midnight border-b border-midnight-muted">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-xl text-ice leading-relaxed border-l-4 border-yellow pl-6">{opening}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 px-6 bg-midnight">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline justify-between mb-12 border-b border-midnight-muted pb-5">
              <h2 className="text-2xl font-black text-ice">What&apos;s Included</h2>
              <span className="text-xs text-ice-muted uppercase tracking-widest">{whatIncluded.length} services</span>
            </div>
          </ScrollReveal>
          <div className="divide-y divide-midnight-muted">
            {whatIncluded.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <div className="py-7 grid grid-cols-1 md:grid-cols-[2rem_1fr_2fr] gap-4 md:gap-8 items-start">
                  <span className="text-xs font-bold text-ice-muted/40 pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-bold text-ice text-lg leading-snug">{item.title}</h3>
                  <p className="text-sm text-ice-muted leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 px-6 bg-midnight-light border-y border-midnight-muted">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-black text-ice mb-12 border-b border-midnight-muted pb-5">How We Work</h2>
          </ScrollReveal>
          <div>
            {process.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.08}>
                <div className="flex gap-6 pb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-yellow text-midnight flex items-center justify-center text-sm font-black flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < process.length - 1 && <div className="w-px flex-1 bg-midnight-muted mt-2" />}
                  </div>
                  <div className="pt-1.5 pb-2">
                    <h3 className="font-bold text-ice mb-1.5">{step.title}</h3>
                    <p className="text-sm text-ice-muted leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-20 px-6 bg-midnight">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-black text-ice mb-10 border-b border-midnight-muted pb-5">Who This Is Built For</h2>
          </ScrollReveal>
          <ul className="divide-y divide-midnight-muted">
            {whoFor.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <li className="flex items-start gap-4 py-4">
                  <svg className="w-4 h-4 text-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-ice-muted leading-relaxed">{item}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="py-20 px-6 bg-midnight-light border-y border-midnight-muted">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-black text-ice mb-10 border-b border-midnight-muted pb-5">
              The Numbers We&apos;re Accountable To
            </h2>
          </ScrollReveal>
          <div className="divide-y divide-midnight-muted">
            {metrics.map((row, i) => (
              <ScrollReveal key={row.metric} delay={i * 0.05}>
                <div className="flex items-center gap-6 py-5">
                  <span className="font-mono text-sm font-black text-yellow w-28 shrink-0">{row.metric}</span>
                  <span className="w-px h-4 bg-midnight-muted flex-shrink-0" />
                  <span className="text-sm text-ice-muted">{row.description}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 px-6 bg-midnight">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-black text-ice mb-10 border-b border-midnight-muted pb-5">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <div className="divide-y divide-midnight-muted">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.question} delay={i * 0.06}>
                <div className="py-6">
                  <h3 className="font-bold text-ice mb-2">{faq.question}</h3>
                  <p className="text-sm text-ice-muted leading-relaxed">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-28 px-6 bg-midnight-light border-t border-midnight-muted">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-5">Get Started</span>
            <div className="w-12 h-0.5 bg-yellow mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-black text-ice mb-5 leading-tight">{ctaHeadline}</h2>
            <p className="text-ice-muted text-lg mb-10 leading-relaxed">{ctaBody}</p>
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-8 py-4 rounded-lg hover:bg-yellow-dark transition-all text-sm"
            >
              Schedule My Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-xs text-ice-muted mt-5">{ctaBottom}</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
