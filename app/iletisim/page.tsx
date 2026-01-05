import { Metadata } from "next";
import { Container } from "../../components/ui/container";
import { LinkButton } from "../../components/ui/button";
import { contactPage, globalCtas, siteConfig } from "../../content/site";
import { buildWhatsappUrl } from "../../lib/whatsapp";
import { ContactForm } from "../../components/sections/contact-form";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.description
};

export default function ContactPage() {
  const whatsappLeadUrl = buildWhatsappUrl(
    siteConfig.whatsappBase,
    "Merhaba, laboratuvarımız için implant üst yapı çözümleriniz hakkında termin ve teklif rica ediyorum."
  );

  return (
    <Container className="space-y-8 md:space-y-10">
      <section className="section-shell px-5 py-7 md:px-10 md:py-9">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
            İletişim & teklif al
          </p>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            {contactPage.hero.heading}
          </h1>
          <p className="max-w-2xl text-sm text-muted md:text-[15px]">
            {contactPage.hero.subheading}
          </p>
          <ul className="grid gap-2 text-xs text-muted md:grid-cols-2">
            {contactPage.hero.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-accent/80" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <LinkButton href={globalCtas.secondary.href}>
              WhatsApp'tan Hemen Yaz
            </LinkButton>
            <LinkButton href={`tel:${siteConfig.phone}`} variant="outline">
              Telefonla Ara
            </LinkButton>
            <LinkButton href={`mailto:${siteConfig.email}`} variant="ghost">
              E-posta Gönder
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)]">
        <ContactForm />
        <aside className="section-shell flex flex-col justify-between gap-5 p-6 text-xs text-muted md:p-7">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
              <span>📞</span>
              İletişim kanalları
            </h2>
            <p className="leading-relaxed">
              Vaka öncesi hızlı bilgi almak veya dosya paylaşmak isterseniz;
              WhatsApp ve telefon hattımız üzerinden direkt teknik ekibe
              ulaşabilirsiniz.
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <span className="text-base">📱</span>
                <div>
                  <span className="font-medium text-white">Telefon: </span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-base">✉️</span>
                <div>
                  <span className="font-medium text-white">E-posta: </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-primary transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-base">💬</span>
                <div>
                  <span className="font-medium text-white">WhatsApp: </span>
                  <a
                    href={whatsappLeadUrl}
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Teknik ekip hattı
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border/70 bg-background/40 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-accent flex items-center gap-1.5 mb-2">
              <span>📍</span>
              Konum (opsiyonel)
            </p>
            <p className="mt-1 leading-relaxed">
              İstanbul, Türkiye merkezli üretim. Detaylı adres ve rota
              bilgisini, operasyon planlaması aşamasında paylaşıyoruz.
            </p>
          </div>
        </aside>
      </section>
    </Container>
  );
}


