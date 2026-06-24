import Link from "next/link";

interface RowGroup {
  heading: string;
  rows: {
    feature: string;
    launch: string | boolean;
    ascent: string | boolean;
    orbit: string | boolean;
  }[];
}

const groups: RowGroup[] = [
  {
    heading: "Pricing",
    rows: [
      { feature: "Monthly Retainer", launch: "$1,200/mo", ascent: "$2,100/mo", orbit: "$3,500/mo" },
      { feature: "Setup Fee", launch: "Custom Quote", ascent: "Custom Quote", orbit: "Custom Quote" },
    ],
  },
  {
    heading: "Performance Marketing",
    rows: [
      { feature: "Google Search & Shopping", launch: true, ascent: true, orbit: true },
      { feature: "Meta (Facebook + Instagram)", launch: true, ascent: true, orbit: true },
      { feature: "LinkedIn Advertising", launch: false, ascent: true, orbit: true },
      { feature: "Display & YouTube", launch: false, ascent: true, orbit: true },
      { feature: "Programmatic / CTV", launch: false, ascent: false, orbit: true },
      { feature: "Ad platforms covered", launch: "2", ascent: "4", orbit: "Unlimited" },
    ],
  },
  {
    heading: "Social Media",
    rows: [
      { feature: "Platforms managed", launch: "2", ascent: "3", orbit: "All major" },
      { feature: "Posts per platform / month", launch: "8", ascent: "12", orbit: "Unlimited" },
      { feature: "Content calendar & copy", launch: true, ascent: true, orbit: true },
      { feature: "Community management", launch: "Basic", ascent: true, orbit: "Advanced" },
      { feature: "Influencer & UGC strategy", launch: false, ascent: "Guidance", orbit: true },
      { feature: "Social commerce integration", launch: false, ascent: false, orbit: true },
    ],
  },
  {
    heading: "SEO",
    rows: [
      { feature: "Technical SEO audit & fixes", launch: true, ascent: true, orbit: true },
      { feature: "On-page optimization", launch: "Up to 10 pages", ascent: "Unlimited", orbit: "Unlimited" },
      { feature: "Keyword research & mapping", launch: true, ascent: true, orbit: true },
      { feature: "Blog & content production", launch: false, ascent: "4 articles/mo", orbit: "8+ articles/mo" },
      { feature: "Link building", launch: false, ascent: true, orbit: "At scale" },
      { feature: "International / multilingual", launch: false, ascent: false, orbit: "If applicable" },
    ],
  },
  {
    heading: "AEO / GEO (AI Search)",
    rows: [
      { feature: "AI search visibility audit", launch: true, ascent: true, orbit: true },
      { feature: "Structured data & schema", launch: true, ascent: true, orbit: "Full site" },
      { feature: "AI answer optimization", launch: "Core", ascent: true, orbit: "Advanced" },
      { feature: "Voice search optimization", launch: false, ascent: true, orbit: true },
      { feature: "Knowledge graph & entity SEO", launch: false, ascent: false, orbit: true },
      { feature: "Dedicated AEO/GEO strategist", launch: false, ascent: false, orbit: true },
    ],
  },
  {
    heading: "Email Marketing",
    rows: [
      { feature: "Welcome & onboarding sequence", launch: false, ascent: true, orbit: true },
      { feature: "Promotional campaigns", launch: false, ascent: "4/month", orbit: "Unlimited" },
      { feature: "Lifecycle automation flows", launch: false, ascent: true, orbit: true },
      { feature: "List segmentation & hygiene", launch: false, ascent: true, orbit: "Advanced" },
      { feature: "SMS marketing integration", launch: false, ascent: false, orbit: true },
      { feature: "Behavioral segmentation", launch: false, ascent: false, orbit: true },
    ],
  },
  {
    heading: "SDR Program",
    rows: [
      { feature: "LinkedIn outbound prospecting", launch: false, ascent: "50 contacts/mo", orbit: "100+ contacts/mo" },
      { feature: "Cold email outreach sequences", launch: false, ascent: true, orbit: true },
      { feature: "Account-based marketing (ABM)", launch: false, ascent: false, orbit: true },
      { feature: "Intent data integration", launch: false, ascent: false, orbit: true },
      { feature: "CRM buildout & optimization", launch: false, ascent: false, orbit: true },
    ],
  },
  {
    heading: "Reporting & Strategy",
    rows: [
      { feature: "Monthly performance report", launch: true, ascent: true, orbit: true },
      { feature: "Custom reporting dashboard", launch: false, ascent: false, orbit: true },
      { feature: "Bi-weekly strategy calls", launch: false, ascent: false, orbit: true },
      { feature: "Quarterly business review (QBR)", launch: false, ascent: false, orbit: true },
      { feature: "Full attribution modeling", launch: false, ascent: false, orbit: true },
      { feature: "Dedicated account team", launch: false, ascent: false, orbit: true },
    ],
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <td className="px-4 py-3.5 text-center">
        <svg className="w-4 h-4 text-yellow mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </td>
    );
  }
  if (value === false) {
    return (
      <td className="px-4 py-3.5 text-center">
        <span className="text-ice-muted/30 text-sm">—</span>
      </td>
    );
  }
  return (
    <td className="px-4 py-3.5 text-center text-xs text-ice-muted">
      {value}
    </td>
  );
}

export default function ComparisonTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        {/* Sticky header */}
        <thead>
          <tr className="border-b border-midnight-muted">
            <th className="px-4 py-4 text-left font-semibold text-ice-muted text-xs uppercase tracking-wider w-[40%]">
              Feature
            </th>
            <th className="px-4 py-4 text-center font-black text-ice text-sm w-[20%]">
              Launch
              <div className="text-xs font-normal text-ice-muted mt-0.5">$1,200/mo</div>
            </th>
            <th className="px-4 py-4 text-center w-[20%] relative">
              <div className="font-black text-yellow text-sm">Ascent</div>
              <div className="text-xs font-normal text-ice-muted mt-0.5">$2,100/mo</div>
            </th>
            <th className="px-4 py-4 text-center font-black text-ice text-sm w-[20%]">
              Orbit
              <div className="text-xs font-normal text-ice-muted mt-0.5">$3,500/mo</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <>
              <tr key={group.heading} className="bg-midnight-muted/30">
                <td
                  colSpan={4}
                  className="px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-yellow"
                >
                  {group.heading}
                </td>
              </tr>
              {group.rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-midnight-muted/50 hover:bg-midnight-muted/20 transition-colors ${
                    i % 2 === 0 ? "bg-midnight" : "bg-midnight-light/40"
                  }`}
                >
                  <td className="px-4 py-3.5 text-sm text-ice-muted">{row.feature}</td>
                  <Cell value={row.launch} />
                  <Cell value={row.ascent} />
                  <Cell value={row.orbit} />
                </tr>
              ))}
            </>
          ))}
        </tbody>
        {/* Footer CTA row */}
        <tfoot>
          <tr className="border-t border-midnight-muted bg-midnight-light">
            <td className="px-4 py-6" />
            <td className="px-4 py-6 text-center">
              <Link
                href="/packages/launch"
                className="inline-flex items-center gap-1.5 border border-midnight-muted text-ice hover:border-yellow/40 hover:text-yellow text-xs font-bold px-4 py-2 rounded-lg transition-all"
              >
                View Launch
              </Link>
            </td>
            <td className="px-4 py-6 text-center">
              <Link
                href="/packages/ascent"
                className="inline-flex items-center gap-1.5 bg-yellow text-midnight hover:bg-yellow-dark text-xs font-bold px-4 py-2 rounded-lg transition-all"
              >
                View Ascent
              </Link>
            </td>
            <td className="px-4 py-6 text-center">
              <Link
                href="/packages/orbit"
                className="inline-flex items-center gap-1.5 border border-midnight-muted text-ice hover:border-yellow/40 hover:text-yellow text-xs font-bold px-4 py-2 rounded-lg transition-all"
              >
                View Orbit
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
