import { Metadata } from "next";
import { Container } from "../../components/ui/container";
import { LinkButton } from "../../components/ui/button";
import { globalCtas, technologyPage } from "../../content/site";

export const metadata: Metadata = {
  title: technologyPage.title,
  description: technologyPage.description
};

export default function TechnologyPage() {
  return (
    <Container className="space-y-8 md:space-y-10">
      <section className="section-shell px-5 py-7 md:px-10 md:py-9">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
            Üretim teknolojisi
          </p>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            {technologyPage.hero.heading}
          </h1>
          <p className="max-w-2xl text-sm text-muted md:text-[15px]">
            {technologyPage.hero.subheading}
          </p>
          <ul className="grid gap-2 text-xs text-muted md:grid-cols-2">
            {technologyPage.hero.bullets.map((b) => (
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
        <article className="section-shell p-5">
          <h2 className="text-sm font-semibold tracking-tight">
            Yüzey teknolojisi
          </h2>
          <p className="mt-2 text-xs text-muted">
            Sulu kazıma, kontrollü yüzey pürüzlendirme ve çok aşamalı temizleme
            süreçleriyle; her parçanın yüzeyi, laboratuvar iş akışınız için
            stabil ve öngörülebilir hale getirilir. Yüzey kontaminasyonu
            riskini minimize eden proses adımlarını kayıt altında tutuyoruz.
          </p>
        </article>
        <article className="section-shell p-5">
          <h2 className="text-sm font-semibold tracking-tight">
            Thread tasarımı
          </h2>
          <p className="mt-2 text-xs text-muted">
            Thread (vida dişi) geometrisi; tork aktarımı, yük dağılımı ve uzun
            dönem stabiliteyi birlikte ele alacak şekilde optimize edilir.
            Mikron düzeyi tolerans hedefiyle, implant–üst yapı etkileşiminde
            tekrarlanabilir uyum yaklaşımı benimsenir.
          </p>
        </article>
        <article className="section-shell p-5">
          <h2 className="text-sm font-semibold tracking-tight">
            Mikron hassasiyet & kalite kontrol
          </h2>
          <p className="mt-2 text-xs text-muted">
            Her lot için ölçüm verileri kaydedilir, kritik bağlantı bölgeleri
            mikron hassasiyetle kontrol edilir. İzlenebilirlik sayesinde, geri
            dönüşlerde önceki üretim parametrelerine hızla erişebiliriz.
          </p>
        </article>
      </section>
    </Container>
  );
}


