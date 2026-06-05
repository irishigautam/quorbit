import Link from "next/link";

interface MetricRow {
  metric: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ProcessStep {
  title: string;
  body: string;
}

interface ServiceSection {
  title: string;
  body: string;
}

interface Props {
  badge: string;
  headline: string;
  subheadline: string;
  ctaLabel?: string;
  opening: string;
  whatIncluded: ServiceSection[];
  process: ProcessStep[];
  whoFor: string[];
  metrics: MetricRow[];
  faqs: FAQ[];
  ctaHeadline: string;
  ctaBody: string;
  ctaBottom: string;
}

export default function ServicePageLayout({
  badge,
  headline,
  subheadline,
  opening,
  whatIncluded,
  process,
  whoFor,
  metrics,
  faqs,
  ctaHeadline,
  ctaBody,
  ctaBottom,
}: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-950 text-white pt-20 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 border border-gray-700 rounded-full px-3 py-1 mb-6">
            {badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {subheadline}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-950 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule a Free Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Opening */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">{opening}</p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-950 mb-12">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatIncluded.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 border border-gray-100">
                <h3 className="font-semibold text-gray-950 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-950 mb-12">How We Work</h2>
          <div className="space-y-8">
            {process.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-950 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-950 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-950 mb-8">Who This Is Built For</h2>
          <ul className="space-y-3">
            {whoFor.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-950 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-950 mb-10">The Numbers We&apos;re Accountable To</h2>
          <div className="border border-gray-100 rounded-2xl overflow-hidden">
            {metrics.map((row, i) => (
              <div
                key={row.metric}
                className={`flex items-center gap-6 px-6 py-5 ${i !== metrics.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <span className="font-mono text-sm font-bold text-gray-950 w-20 shrink-0">{row.metric}</span>
                <span className="text-sm text-gray-600">{row.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-950 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-gray-950 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-gray-950 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{ctaHeadline}</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">{ctaBody}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-950 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors mb-4"
          >
            Schedule My Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-sm text-gray-500 mt-4">{ctaBottom}</p>
        </div>
      </section>
    </div>
  );
}
