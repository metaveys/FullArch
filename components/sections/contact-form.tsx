"use client";

import { useState, FormEvent } from "react";
import { Button, LinkButton } from "../ui/button";
import { contactPage, siteConfig } from "../../content/site";
import { buildWhatsappUrl } from "../../lib/whatsapp";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Form gönderilirken bir hata oluştu.");
      }

      // Başarılı gönderim
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLeadUrl = buildWhatsappUrl(
    siteConfig.whatsappBase,
    "Merhaba, laboratuvarımız için implant üst yapı çözümleriniz hakkında termin ve teklif rica ediyorum."
  );

  return (
    <div className="section-shell p-6 md:p-8">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 text-xs text-muted"
        >
          {error && (
            <div className="rounded-2xl border border-red-500/50 bg-red-500/10 p-4 text-xs text-red-400 flex items-start gap-2">
              <span className="text-base">⚠️</span>
              <span>{error}</span>
            </div>
          )}
          <div className="grid gap-4 md:grid-cols-2">
            {contactPage.form.fields.slice(0, 4).map((field) => {
              const common = {
                id: field.name,
                name: field.name,
                required: field.required,
                className:
                  "mt-1 w-full rounded-2xl border border-border/70 bg-surface-alt/60 px-4 py-2.5 text-xs text-white outline-none ring-0 placeholder:text-[11px] placeholder:text-border/80 focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all"
              };

              return (
                <div key={field.name} className="flex flex-col gap-1.5">
                  <label
                    htmlFor={field.name}
                    className="text-[11px] font-medium text-white flex items-center gap-1"
                  >
                    {field.label}{" "}
                    {field.required && (
                      <span className="text-accent">*</span>
                    )}
                  </label>
                  <input
                    {...(common as any)}
                    type={field.type}
                  />
                </div>
              );
            })}
          </div>
          
          {contactPage.form.fields.slice(4).map((field) => {
            const common = {
              id: field.name,
              name: field.name,
              required: field.required,
              className:
                "mt-1 w-full rounded-2xl border border-border/70 bg-surface-alt/60 px-4 py-2.5 text-xs text-white outline-none ring-0 placeholder:text-[11px] placeholder:text-border/80 focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all"
            };

            return (
              <div key={field.name} className="flex flex-col gap-1.5">
                <label
                  htmlFor={field.name}
                  className="text-[11px] font-medium text-white flex items-center gap-1"
                >
                  {field.label}{" "}
                  {field.required && (
                    <span className="text-accent">*</span>
                  )}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    {...(common as any)}
                    rows={5}
                    placeholder="Vaka bilgisi, implant sistemi, operasyon tarihi vb."
                    className="resize-none"
                  />
                ) : field.type === "select" ? (
                  <select
                    {...(common as any)}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seçiniz
                    </option>
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : field.type === "file" ? (
                  <div className="relative">
                    <input
                      {...(common as any)}
                      type="file"
                      className="mt-1 w-full rounded-2xl border border-border/70 bg-surface-alt/60 px-3 py-2.5 text-[11px] text-muted file:mr-3 file:rounded-xl file:border-0 file:bg-primary/20 file:px-4 file:py-2 file:text-[11px] file:font-medium file:text-primary hover:file:bg-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all cursor-pointer"
                      accept=".stl,.dentalProject,.zip,.rar,.7z"
                    />
                    <p className="mt-1.5 text-[10px] text-border/70">
                      Desteklenen formatlar: STL, Exocad, ZIP, RAR, 7Z
                    </p>
                  </div>
                ) : (
                  <input
                    {...(common as any)}
                    type={field.type}
                  />
                )}
              </div>
            );
          })}
          <div className="pt-3">
            <Button 
              type="submit" 
              className="w-full md:w-auto text-xs px-8" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Gönderiliyor...
                </>
              ) : (
                <>
                  <span className="mr-2">📤</span>
                  Teklif Al / Termin Sor
                </>
              )}
            </Button>
          </div>
          <p className="text-[11px] text-border/80 leading-relaxed">
            Form gönderimi sonrasında, verileriniz yalnızca sizinle iletişim
            kurmak ve vaka planlamasını yapmak amacıyla kullanılır. KVKK kapsamında verileriniz güvende tutulur.
          </p>
        </form>
      ) : (
        <div className="space-y-4 text-xs text-muted text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="text-3xl">✅</span>
            <h2 className="text-base font-semibold tracking-tight text-white">
              {contactPage.form.thankYouTitle}
            </h2>
          </div>
          <p className="leading-relaxed">{contactPage.form.thankYouBody}</p>
          <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
            <LinkButton href={whatsappLeadUrl} className="text-xs">
              <span className="mr-2">💬</span>
              WhatsApp'tan Devam Et
            </LinkButton>
            <Button onClick={() => setSubmitted(false)} variant="outline" className="text-xs">
              Yeni Form Gönder
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

