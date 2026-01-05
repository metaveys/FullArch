import { Container } from "../ui/container";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../../content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface/60">
      <Container className="flex flex-col gap-6 py-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <Link href="/" className="relative h-12 w-12 flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="FullArch Dental Lab Logo"
              fill
              className="object-contain"
            />
          </Link>
          <div className="space-y-1">
            <p className="font-medium text-white">
              FullArch Dental Lab – Premium Titanyum Çözümler
            </p>
            <p>
              CE / ISO / FDA sertifikalı üretim. Mikron düzeyinde hassasiyet hedefi
              ile laboratuvar odaklı üretim disiplini.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 items-center rounded-full bg-surface-alt/80 px-2 text-[11px]">
              CE
            </span>
            <span className="inline-flex h-6 items-center rounded-full bg-surface-alt/80 px-2 text-[11px]">
              ISO
            </span>
            <span className="inline-flex h-6 items-center rounded-full bg-surface-alt/80 px-2 text-[11px]">
              FDA
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={siteConfig.whatsappUrl}
              className="hover:text-primary transition-colors flex items-center gap-1"
              aria-label="WhatsApp"
            >
              <span>💬</span> WhatsApp
            </Link>
            <span className="text-border">•</span>
            <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors flex items-center gap-1">
              <span>📞</span> {siteConfig.phoneDisplay}
            </a>
            <span className="text-border">•</span>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors flex items-center gap-1">
              <span>✉️</span> {siteConfig.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}


