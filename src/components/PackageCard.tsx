import Link from "next/link";

interface Props {
  name: string;
  tagline: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  href: string;
  featured?: boolean;
}

export default function PackageCard({
  name,
  tagline,
  price,
  period = "/month",
  description,
  features,
  href,
  featured = false,
}: Props) {
  return (
    <div
      className={`relative flex flex-col rounded-xl border transition-colors duration-300 ${
        featured
          ? "border-yellow/40 bg-midnight-light hover:border-yellow/70"
          : "border-midnight-muted bg-midnight-light hover:border-ice/20"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-6">
          <span className="bg-yellow text-midnight text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-6 pb-6 border-b border-midnight-muted">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-2">
            {name}
          </span>
          <p className="text-ice-muted text-sm mb-5">{tagline}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-ice tabular-nums">{price}</span>
            <span className="text-sm text-ice-muted">{period}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-ice-muted leading-relaxed mb-6">{description}</p>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
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
              <span className="text-sm text-ice-muted">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={href}
          className={`flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-lg transition-all text-sm ${
            featured
              ? "bg-yellow text-midnight hover:bg-yellow-dark"
              : "border border-midnight-muted text-ice hover:border-yellow/40 hover:text-yellow"
          }`}
        >
          Explore {name}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
