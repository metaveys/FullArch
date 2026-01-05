"use client";

import { siteConfig } from "../../content/site";
import { LinkButton } from "../ui/button";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-surface/95 px-3 py-2.5 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2 text-[11px] font-medium">
        <LinkButton href={siteConfig.whatsappUrl} variant="primary">
          WhatsApp
        </LinkButton>
        <LinkButton href={`tel:${siteConfig.phone}`} variant="outline">
          Ara
        </LinkButton>
        <LinkButton href="/iletisim" variant="ghost">
          Teklif Al
        </LinkButton>
      </div>
    </div>
  );
}


