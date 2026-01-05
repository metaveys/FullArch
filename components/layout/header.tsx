import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/container";
import { LinkButton } from "../ui/button";
import { siteConfig } from "../../content/site";

export function Header() {
  const phoneHref = `tel:${siteConfig.phone}`;
  const whatsappHref = siteConfig.whatsappUrl;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="FullArch Dental Lab Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold tracking-tight">
              FullArch Dental Lab
            </span>
            <span className="text-[11px] text-muted">
              Premium titanyum implant üst yapı çözümleri
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-xs font-medium text-muted md:flex">
          <Link href="/urunler" className="hover:text-white">
            Ürünler
          </Link>
          <Link href="/teknoloji" className="hover:text-white">
            Teknoloji
          </Link>
          <Link href="/cad-cam" className="hover:text-white">
            CAD/CAM Süreci
          </Link>
          <Link href="/kalite-sertifikalar" className="hover:text-white">
            Kalite & Sertifikalar
          </Link>
          <Link href="/teslimat-destek" className="hover:text-white">
            Teslimat & Destek
          </Link>
          <Link href="/sss" className="hover:text-white">
            SSS
          </Link>
          <Link href="/iletisim" className="hover:text-white">
            İletişim
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LinkButton
            href={phoneHref}
            variant="ghost"
            className="hidden text-xs md:inline-flex transition-all hover:scale-105"
          >
            📞 Ara
          </LinkButton>
          <LinkButton
            href={whatsappHref}
            variant="primary"
            className="text-xs transition-all hover:scale-105"
          >
            💬 WhatsApp'tan Hemen Yaz
          </LinkButton>
        </div>
      </Container>
    </header>
  );
}


