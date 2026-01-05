import { Metadata } from "next";
import { Container } from "../../components/ui/container";
import { LinkButton } from "../../components/ui/button";
import { deliveryPage, globalCtas } from "../../content/site";

export const metadata: Metadata = {
  title: deliveryPage.title,
  description: deliveryPage.description
};

export default function DeliverySupportPage() {
  return (
    <Container className="space-y-8 md:space-y-10">
      <section className="section-shell px-5 py-7 md:px-10 md:py-9">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
            Teslimat & operasyon desteği
          </p>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            {deliveryPage.hero.heading}
          </h1>
          <p className="max-w-2xl text-sm text-muted md:text-[15px]">
            {deliveryPage.hero.subheading}
          </p>
          <ul className="grid gap-2 text-xs text-muted md:grid-cols-2">
            {deliveryPage.hero.bullets.map((b) => (
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
            İstanbul içi aynı gün
          </h2>
          <p className="mt-2">
            Belirlediğimiz saatten önce onaylanan tasarımlar, aynı gün içinde
            üretime alınır ve kuryeye teslim edilir. Operasyon saatine göre size
            özel teslim penceresi planlanır.
          </p>
        </article>
        <article className="section-shell p-5 text-xs text-muted">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Türkiye geneli 24 saat
          </h2>
          <p className="mt-2">
            Türkiye geneli için, standart iş günlerinde kargo çıkışlarımızı 24
            saatlik teslim hedefiyle planlıyoruz. Uzak bölge ve kargo
            yoğunlukları için sizi önceden bilgilendiriyoruz.
          </p>
        </article>
        <article className="section-shell p-5 text-xs text-muted">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Operasyon bitene kadar destek
          </h2>
          <p className="mt-2">
            Vaka açılışından operasyonun tamamlanmasına kadar; telefon,
            WhatsApp ve gerektiğinde uzaktan bağlantı ile teknik ekibimiz
            devrededir. Gerekirse klinikteki ekiple de doğrudan iletişime geçer
            ve vaka bazlı destek sunarız.
          </p>
        </article>
      </section>
    </Container>
  );
}


