import { ReactNode } from "react";
import Image from "next/image";
import { Container } from "../ui/container";
import { LinkButton } from "../ui/button";
import { CtaGroup, globalCtas } from "../../content/site";

type ProductPageTemplateProps = {
  title: string;
  subtitle: string;
  bullets: string[];
  usage: string;
  advantages: string[];
  cadCam: string;
  delivery: string;
  support: string;
  sidebar?: ReactNode;
  ctas?: CtaGroup;
  heroImage?: string;
  heroImageAlt?: string;
};

export function ProductPageTemplate({
  title,
  subtitle,
  bullets,
  usage,
  advantages,
  cadCam,
  delivery,
  support,
  sidebar,
  ctas = globalCtas,
  heroImage,
  heroImageAlt
}: ProductPageTemplateProps) {
  return (
    <Container className="space-y-10 md:space-y-12">
      <section className="section-shell grid gap-8 px-5 py-7 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] md:px-10 md:py-9">
        <div className="space-y-4">
          {heroImage && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border/40 bg-background/40 mb-4">
              <Image
                src={heroImage}
                alt={heroImageAlt || title}
                fill
                className="object-contain p-4"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          )}
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
            Ürün kategorisi
          </p>
          <h1 className="text-balance text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            {title}
          </h1>
          <p className="max-w-2xl text-sm text-muted md:text-[15px]">
            {subtitle}
          </p>
          <ul className="grid gap-2 text-xs text-muted md:grid-cols-2">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-accent/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <LinkButton href={ctas.primary.href}>
              {ctas.primary.label}
            </LinkButton>
            <LinkButton href={ctas.secondary.href} variant="outline">
              {ctas.secondary.label}
            </LinkButton>
            <LinkButton href={ctas.tertiary.href} variant="ghost">
              {ctas.tertiary.label}
            </LinkButton>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl border border-border/60 bg-surface-alt/60 p-4 text-xs text-muted">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
            Teknik özet
          </p>
          <p>
            Her ürün grubu; implant üst yapı üretiminde mikron düzeyi
            hassasiyet hedefi, CAD/CAM uyumu ve planlı termin yönetimiyle
            tasarlanır. Vaka bazlı tüm sorularınızda doğrudan teknik ekibimize
            ulaşabilirsiniz.
          </p>
          {sidebar}
        </aside>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="section-shell p-5">
          <h2 className="text-sm font-semibold tracking-tight">
            Kullanım senaryosu
          </h2>
          <p className="mt-2 text-xs text-muted">{usage}</p>
        </article>
        <article className="section-shell p-5 md:col-span-2">
          <h2 className="text-sm font-semibold tracking-tight">
            Teknik avantajlar
          </h2>
          <ul className="mt-2 space-y-1.5 text-xs text-muted">
            {advantages.map((adv) => (
              <li key={adv} className="flex gap-2">
                <span className="mt-[5px] h-1 w-1 rounded-full bg-accent/80" />
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="section-shell p-5">
          <h2 className="text-sm font-semibold tracking-tight">
            CAD/CAM uyumu & tasarım süreci
          </h2>
          <p className="mt-2 text-xs text-muted">{cadCam}</p>
        </article>
        <article className="section-shell p-5">
          <h2 className="text-sm font-semibold tracking-tight">
            Termin & teslimat
          </h2>
          <p className="mt-2 text-xs text-muted">{delivery}</p>
        </article>
        <article className="section-shell p-5">
          <h2 className="text-sm font-semibold tracking-tight">
            Teknik destek modeli
          </h2>
          <p className="mt-2 text-xs text-muted">{support}</p>
        </article>
      </section>
    </Container>
  );
}


