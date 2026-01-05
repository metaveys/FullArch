import { getContent } from "./db";

let cachedContent: any = null;
let contentPromise: Promise<any> | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5000; // 5 saniye cache süresi (development için kısa)

export async function getSiteContent(forceRefresh = false) {
  const now = Date.now();
  
  // Cache geçerliyse ve force refresh değilse cache'den döndür
  if (cachedContent && !forceRefresh && (now - cacheTimestamp) < CACHE_DURATION) {
    return cachedContent;
  }

  // Eğer zaten bir promise varsa ve force refresh değilse onu bekle
  if (contentPromise && !forceRefresh) {
    return contentPromise;
  }

  // Yeni promise oluştur
  contentPromise = (async () => {
    try {
      const content = await getContent();
      cachedContent = content;
      cacheTimestamp = Date.now();
      return content;
    } catch (error) {
      console.error("İçerik yüklenirken hata:", error);
      // Fallback olarak content/site.ts'den oku
      const siteContent = await import("../content/site");
      const fallbackContent = {
        siteConfig: siteContent.siteConfig,
        globalCtas: siteContent.globalCtas,
        homePage: siteContent.homePage,
        productCategories: siteContent.productCategories,
        productDetails: siteContent.productDetails,
        technologyPage: siteContent.technologyPage,
        cadCamPage: siteContent.cadCamPage,
        qualityPage: siteContent.qualityPage,
        deliveryPage: siteContent.deliveryPage,
        faqPage: siteContent.faqPage,
        contactPage: siteContent.contactPage,
      };
      cachedContent = fallbackContent;
      cacheTimestamp = Date.now();
      return fallbackContent;
    }
  })();

  return contentPromise;
}

// Cache'i temizle (içerik güncellendiğinde)
export function clearContentCache() {
  cachedContent = null;
  contentPromise = null;
  cacheTimestamp = 0;
}

