import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "E-Commerce Management", href: "/services/ecommerce" },
  { label: "All-in-One Digital Marketing", href: "/services/all-in-one" },
  { label: "Website & Automation", href: "/services/website-automation" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-midnight-muted">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="Quorbit"
                width={130}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-ice-muted max-w-xs mb-5">
              A futuristic marketing agency blending AI, automation, creativity, and strategic growth into one connected orbit.
            </p>
            <span className="text-xs font-bold text-yellow tracking-widest uppercase">Business Simplified</span>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold text-ice uppercase tracking-widest mb-5"
             >Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-ice-muted hover:text-yellow transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs font-bold text-ice uppercase tracking-widest mb-5"
             >Get in Touch</p>
            <p className="text-sm text-ice-muted mb-5 leading-relaxed">
              Ready to grow? Schedule a free strategy call. Come with your goals — we come prepared.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-yellow text-midnight text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-yellow-dark transition-colors"
            >
              Schedule a Call
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-midnight-muted flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ice-muted">© {new Date().getFullYear()} Quorbit. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-ice-muted hover:text-ice transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-ice-muted hover:text-ice transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
