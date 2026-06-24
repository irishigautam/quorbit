import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  message: string;
  nextPackage: string;
  nextHref: string;
  nextDescription: string;
}

export default function UpgradePath({ message, nextPackage, nextHref, nextDescription }: Props) {
  return (
    <section className="bg-midnight py-20 px-6 border-t border-midnight-muted">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 p-8 border border-midnight-muted rounded-xl bg-midnight-light">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-3">
                Ready to Scale Further?
              </span>
              <h2 className="text-xl font-black text-ice mb-2">Upgrade to {nextPackage}</h2>
              <p className="text-sm text-ice-muted leading-relaxed max-w-md">{message}</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
              <p className="text-xs text-ice-muted max-w-48 md:text-right">{nextDescription}</p>
              <Link
                href={nextHref}
                className="inline-flex items-center gap-2 border border-yellow/40 text-yellow hover:bg-yellow hover:text-midnight font-bold px-5 py-2.5 rounded-lg transition-all text-sm"
              >
                Explore {nextPackage}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
