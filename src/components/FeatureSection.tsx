import ScrollReveal from "@/components/ScrollReveal";

interface FeatureItem {
  title: string;
  description: string;
}

interface Props {
  badge?: string;
  title: string;
  items: FeatureItem[];
  background?: "dark" | "light";
  bordered?: boolean;
}

export default function FeatureSection({
  badge,
  title,
  items,
  background = "dark",
  bordered = true,
}: Props) {
  const bg = background === "light" ? "bg-midnight-light" : "bg-midnight";
  const border = bordered ? "border-y border-midnight-muted" : "";

  return (
    <section className={`${bg} ${border} py-20 px-6`}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-baseline justify-between mb-12 border-b border-midnight-muted pb-5">
            <div>
              {badge && (
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-2">
                  {badge}
                </span>
              )}
              <h2 className="text-2xl font-black text-ice">{title}</h2>
            </div>
            <span className="text-xs text-ice-muted uppercase tracking-widest hidden sm:block">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>
        </ScrollReveal>
        <div className="divide-y divide-midnight-muted">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.07}>
              <div className="py-7 grid grid-cols-1 md:grid-cols-[2rem_1fr_2fr] gap-4 md:gap-8 items-start">
                <span className="text-xs font-bold text-ice-muted/40 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold text-ice text-base leading-snug">{item.title}</h3>
                </div>
                <p className="text-sm text-ice-muted leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
