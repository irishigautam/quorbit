import Link from "next/link";

const services = [
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "E-Commerce Management", href: "/services/ecommerce" },
  { label: "All-in-One Digital Marketing", href: "/services/all-in-one" },
  { label: "Website & Automation", href: "/services/website-automation" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-xl font-bold text-white tracking-tight">Quorbit</span>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs">
              Performance-driven digital marketing for ambitious brands. Every channel, one strategy, one outcome.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-4">Get in Touch</p>
            <p className="text-sm text-gray-400 mb-4">
              Ready to grow? Schedule a free strategy call with our team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-white text-gray-950 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule a Call
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Quorbit. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
