import { Metadata } from "next";
import { Container } from "../../components/ui/container";
import { LinkButton } from "../../components/ui/button";
import { globalCtas, qualityPage } from "../../content/site";

export const metadata: Metadata = {
  title: qualityPage.title,
  description: qualityPage.description
};

export default function QualityPage() {
  return (
    <Container className="space-y-8 md:space-y-10">
      <section className="section-shell px-5 py-7 md:px-10 md:py-9">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
            Kalite & sertifikalar
          </p>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            {qualityPage.hero.heading}
          </h1>
          <p className="max-w-2xl text-sm text-muted md:text-[15px]">
            {qualityPage.hero.subheading}
          </p>
          <ul className="grid gap-2 text-xs text-muted md:grid-cols-2">
            {qualityPage.hero.bullets.map((b) => (
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

      <section className="grid gap-6 md:grid-cols-3">
        <article className="section-shell p-5 text-xs text-muted">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Sertifikasyon yapısı
          </h2>
          <p className="mt-2">
            CE, ISO ve FDA sertifikaları ile uyumlu süreçler üzerinde çalışırız.
            Sertifikasyon ekosistemi, üretimden sevkiyata kadar tüm adımların
            kayıt altına alınmasını ve denetlenebilir olmasını sağlar.
          </p>
        </article>
        <article className="section-shell p-5 text-xs text-muted">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            İzlenebilirlik
          </h2>
          <p className="mt-2">
            Her lot; üretim parametreleri, ölçüm sonuçları ve yüzey kontrol
            verileriyle birlikte takip edilir. Geri bildirim veya revizyon
            gerektiğinde, geçmiş üretim verilerine hızla erişebiliriz.
          </p>
        </article>
        <article className="section-shell p-5 text-xs text-muted">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Üretim kapasitesi & raporlama
          </h2>
          <p className="mt-2">
            Yüksek üretim kapasitesi, planlı termin takvimleri ve laboratuvar
            odaklı raporlama yaklaşımı ile; seri üretim yapan laboratuvarların
            yükünü öngörülebilir hale getiriyoruz.
          </p>
        </article>
      </section>
    </Container>
  );
}


