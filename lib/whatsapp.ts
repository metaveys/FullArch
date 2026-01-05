export function buildWhatsappUrl(base: string, message: string) {
  const encoded = encodeURIComponent(message);
  return `${base}?text=${encoded}`;
}


