import { Metadata } from "next";
import { Container } from "../../components/ui/container";
import { LinkButton } from "../../components/ui/button";
import { globalCtas, productCategories } from "../../content/site";

export const metadata: Metadata = {
  title: "Ürünler – Titanyum implant üst yapı çözümleri",
  description:
    "Titanium, EMAX, Toronto, All-on-Four, All-on-Six ve Custom Abutment ürün gruplarımızla laboratuvarlara yönelik titanyum çözümler."
};

export default function ProductsPage() {
  return (
    <Container className="space-y-8 md:space-y-10">
      <section className="section-shell px-5 py-7 md:px-10 md:py-9">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
            Ürün gamı
          </p>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            Titanyum implant üst yapı çözümlerimiz
          </h1>
          <p className="max-w-2xl text-sm text-muted md:text-[15px]">
            Laboratuvar odaklı olarak kurguladığımız Titanium, EMAX, Toronto,
            All-on-Four, All-on-Six ve Custom Abutment ürün grupları ile;
            günlük vaka akışınızdan kompleks full arch planlamalara kadar tüm
            ihtiyaçları kapsıyoruz.
          </p>
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

      <section className="grid gap-4 md:grid-cols-3">
        {productCategories.map((p) => (
          <article
            key={p.slug}
            className="section-shell flex flex-col justify-between p-4"
          >
            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
                {p.short}
              </p>
              <h2 className="text-sm font-semibold">{p.name}</h2>
              <p className="text-xs text-muted">{p.description}</p>
            </div>
            <div className="pt-3">
              <LinkButton
                href={`/urunler/${p.slug}`}
                variant="ghost"
                className="text-[11px]"
              >
                Ürün detayını incele
              </LinkButton>
            </div>
          </article>
        ))}
      </section>
    </Container>
  );
}


