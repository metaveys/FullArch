import { Metadata } from "next";
import { Container } from "../../components/ui/container";
import { LinkButton } from "../../components/ui/button";
import { cadCamPage, globalCtas } from "../../content/site";

export const metadata: Metadata = {
  title: cadCamPage.title,
  description: cadCamPage.description
};

export default function CadCamPage() {
  return (
    <Container className="space-y-8 md:space-y-10">
      <section className="section-shell px-5 py-7 md:px-10 md:py-9">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
            CAD/CAM & tasarım süreci
          </p>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            {cadCamPage.hero.heading}
          </h1>
          <p className="max-w-2xl text-sm text-muted md:text-[15px]">
            {cadCamPage.hero.subheading}
          </p>
          <ul className="grid gap-2 text-xs text-muted md:grid-cols-2">
            {cadCamPage.hero.bullets.map((b) => (
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

      <section className="grid gap-6 md:grid-cols-2">
        <article className="section-shell p-5 text-xs text-muted">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Dosya gönderim adımları
          </h2>
          <ol className="mt-2 list-decimal space-y-1.5 pl-4">
            <li>
              Exocad / Blender proje dosyanızı ve ilgili STL çıktılarınızı tek
              bir klasörde toplayın.
            </li>
            <li>
              Klasörü sıkıştırarak, tercih ettiğiniz bulut servisi veya
              tarafımızdan önerilen güvenli kanal üzerinden link olarak
              paylaşın.
            </li>
            <li>
              Mesajınızda; implant sistemi, operasyon tarihi ve özel beklentileri
              kısaca not edin.
            </li>
            <li>
              Teknik ekibimiz, dosyayı analiz ederek kısa bir planlama notu ve
              termin önerisiyle size dönüş yapar.
            </li>
          </ol>
        </article>
        <article className="section-shell p-5 text-xs text-muted">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Revizyon, üretim ve kontrol
          </h2>
          <p className="mt-2">
            Onay öncesi, Exocad / Blender ekran görüntüleri ve kritik kesit
            analizleri sizinle paylaşılır. Revizyon talepleriniz kısa döngülerle
            tamamlanır. Onayınızın ardından üretim başlatılır; ölçüm ve kalite
            kontrol verileri kaydedilir ve gerektiğinde sizinle paylaşılır.
          </p>
        </article>
      </section>
    </Container>
  );
}


