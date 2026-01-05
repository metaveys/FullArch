import { Metadata } from "next";
import { Container } from "../../components/ui/container";
import { LinkButton } from "../../components/ui/button";
import { faqPage, globalCtas } from "../../content/site";

export const metadata: Metadata = {
  title: faqPage.title,
  description: faqPage.description
};

export default function FaqPage() {
  return (
    <Container className="space-y-8 md:space-y-10">
      <section className="section-shell px-5 py-7 md:px-10 md:py-9">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
            Sık sorulan sorular
          </p>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            {faqPage.hero.heading}
          </h1>
          <p className="max-w-2xl text-sm text-muted md:text-[15px]">
            {faqPage.hero.subheading}
          </p>
          <ul className="grid gap-2 text-xs text-muted md:grid-cols-2">
            {faqPage.hero.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-accent/80" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <LinkButton href={globalCtas.primary.href}>
              {globalCtas.primary.label}
            </LinkButton>
            <LinkButton href={globalCtas.secondary.href} variant="outline">
              {globalCtas.secondary.label}
            </LinkButton>
            <LinkButton href={globalCtas.tertiary.href} variant="ghost">
              {globalCtas.tertiary.label}
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        {faqPage.items.map((item) => (
          <article key={item.q} className="section-shell p-5 text-xs text-muted">
            <h2 className="text-sm font-semibold tracking-tight text-white">
              {item.q}
            </h2>
            <p className="mt-1.5">{item.a}</p>
          </article>
        ))}
      </section>
    </Container>
  );
}


