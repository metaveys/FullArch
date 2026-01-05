import { Metadata } from "next";
import { Container } from "../components/ui/container";
import { Button, LinkButton } from "../components/ui/button";
import { globalCtas, homePage, productCategories } from "../content/site";

export const metadata: Metadata = {
  title: homePage.title,
  description: homePage.description
};

export default function HomePage() {
  return (
    <Container className="space-y-10 md:space-y-14">
      <section className="section-shell relative overflow-hidden px-5 py-8 md:px-10 md:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(127,212,255,0.16),_transparent_60%)]" />
        <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] md:items-center">
          <div className="space-y-5">
            <p className="inline-flex items-center rounded-full border border-primary/40 bg-primary-soft/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-accent">
              {homePage.hero.eyebrow}
            </p>
            <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              {homePage.hero.heading}
            </h1>
            <p className="max-w-2xl text-sm text-muted md:text-[15px]">
              {homePage.hero.subheading}
            </p>
            <ul className="grid gap-2 text-xs text-muted md:grid-cols-2">
              {homePage.hero.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-accent/80" />
                  <span>{item}</span>
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
          <div className="space-y-5 rounded-3xl border border-border/60 bg-surface-alt/60 p-5 text-xs text-muted shadow-soft">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
              Üretim yaklaşımımız
            </p>
            <p>
              Her parça; mikron düzeyi tolerans yaklaşımı, kayıtlı kalite
              kontrol verisi ve laboratuvar odaklı termin yönetimi ile
              üretilir. Operasyon kapanana kadar teknik ekibimiz doğrudan
              erişilebilir durumdadır.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border/60 bg-background/40 p-3">
                <p className="text-[11px] font-medium text-muted">
                  Sertifikalar
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  CE / ISO / FDA
                </p>
                <p className="mt-1 text-[11px] text-muted">
                  Kayıtlı ve denetlenebilir üretim altyapısı üzerinde çalışırız.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background/40 p-3">
                <p className="text-[11px] font-medium text-muted">
                  Teslimat modeli
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  İstanbul aynı gün, Türkiye 24 saat
                </p>
                <p className="mt-1 text-[11px] text-muted">
                  Operasyon takviminize göre planlı termin yönetimi sunarız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              {homePage.usp.items[0].title.split(" ")[0]} odaklı üretim
            </h2>
            <p className="max-w-2xl text-xs text-muted">
              Ürün gamımızın tamamı; hassasiyet, yüzey teknolojisi ve operasyon
              desteği ekseninde laboratuvar iş akışlarına göre tasarlandı.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {homePage.usp.items.map((usp) => (
            <article
              key={usp.title}
              className="section-shell flex flex-col gap-2 p-4"
            >
              <h3 className="text-sm font-semibold">{usp.title}</h3>
              <p className="text-xs text-muted">{usp.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              {homePage.productIntro.title}
            </h2>
            <p className="max-w-2xl text-xs text-muted">
              {homePage.productIntro.description}
            </p>
          </div>
          <LinkButton href="/urunler" variant="outline" className="text-xs">
            Tüm ürünleri incele
          </LinkButton>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {productCategories.map((p) => (
            <article
              key={p.slug}
              className="section-shell flex flex-col justify-between p-4"
            >
              <div className="space-y-1.5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-accent">
                  {p.short}
                </p>
                <h3 className="text-sm font-semibold">{p.name}</h3>
                <p className="text-xs text-muted">{p.description}</p>
              </div>
              <div className="pt-3">
                <LinkButton
                  href={`/urunler/${p.slug}`}
                  variant="ghost"
                  className="text-[11px]"
                >
                  Detayları gör
                </LinkButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-8 px-5 py-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.4fr)] md:px-10 md:py-8">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight">
            {homePage.cadCamFlow.title}
          </h2>
          <p className="max-w-xl text-xs text-muted">
            CAD/CAM sürecinizin her adımı; dosya gönderimi, tasarım, revizyon,
            üretim ve teslim olarak net şekilde kurgulanmıştır.
          </p>
          <div className="grid gap-3 text-xs text-muted sm:grid-cols-2">
            {homePage.cadCamFlow.steps.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border/60 bg-surface-alt/40 p-3"
              >
                <p className="text-[11px] font-semibold text-white">
                  {s.title}
                </p>
                <p className="mt-1 text-[11px] text-muted">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-primary/40 bg-primary-soft/30 p-5 text-xs text-muted">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
            Sertifikalar & teslimat modeli
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex h-7 items-center rounded-full border border-border/60 bg-surface/80 px-3 text-[11px] font-medium">
              CE
            </span>
            <span className="inline-flex h-7 items-center rounded-full border border-border/60 bg-surface/80 px-3 text-[11px] font-medium">
              ISO
            </span>
            <span className="inline-flex h-7 items-center rounded-full border border-border/60 bg-surface/80 px-3 text-[11px] font-medium">
              FDA
            </span>
          </div>
          <p className="text-[11px]">
            Sertifikasyon altyapımız; izlenebilir lot yönetimi, kayıtlı ölçüm
            verisi ve yüzey kontrolleri ile desteklenir. İstanbul içi aynı gün,
            Türkiye geneli 24 saat kargo hedefiyle üretim takvimimizi
            planlıyoruz.
          </p>
          <div className="rounded-2xl border border-border/60 bg-background/40 p-3 text-[11px]">
            <p className="font-semibold text-white">
              Üretim kapasitesi & operasyon desteği
            </p>
            <ul className="mt-2 space-y-1">
              {homePage.capacityBlock.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[5px] h-1 w-1 rounded-full bg-accent/80" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell flex flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-7">
        <div className="space-y-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
            Vakanızı şimdi planlayın
          </p>
          <h2 className="text-base font-semibold tracking-tight md:text-lg">
            Teklif alın, dosyanızı gönderin, operasyon takviminizi birlikte
            netleştirelim.
          </h2>
          <p className="max-w-xl text-xs text-muted">
            Laboratuvarınızın vaka yoğunluğuna ve iş akışına göre; termin,
            tasarım ve üretim detaylarını beraber planlayalım.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <LinkButton href={globalCtas.primary.href}>
            {globalCtas.primary.label}
          </LinkButton>
          <LinkButton href={globalCtas.secondary.href} variant="outline">
            {globalCtas.secondary.label}
          </LinkButton>
        </div>
      </section>
    </Container>
  );
}


