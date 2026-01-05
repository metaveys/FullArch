import { promises as fs } from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "data");
const submissionsPath = path.join(dbPath, "submissions.json");
const contentPath = path.join(dbPath, "content.json");

// Veritabanı dizinini oluştur
async function ensureDbDir() {
  try {
    await fs.mkdir(dbPath, { recursive: true });
  } catch (error) {
    // Dizin zaten varsa hata vermez
  }
}

export interface FormSubmission {
  id: string;
  fullName: string;
  lab: string;
  phone: string;
  email: string;
  city: string;
  product?: string;
  message: string;
  fileName?: string;
  fileSize?: number;
  createdAt: string;
  read: boolean;
}

// Form gönderilerini oku
export async function getSubmissions(): Promise<FormSubmission[]> {
  await ensureDbDir();
  try {
    const data = await fs.readFile(submissionsPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Form gönderisi ekle
export async function addSubmission(
  submission: Omit<FormSubmission, "id" | "createdAt" | "read">
): Promise<FormSubmission> {
  await ensureDbDir();
  const submissions = await getSubmissions();
  const newSubmission: FormSubmission = {
    ...submission,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    read: false,
  };
  submissions.unshift(newSubmission);
  await fs.writeFile(
    submissionsPath,
    JSON.stringify(submissions, null, 2),
    "utf-8"
  );
  return newSubmission;
}

// Form gönderisini okundu olarak işaretle
export async function markAsRead(id: string): Promise<void> {
  const submissions = await getSubmissions();
  const index = submissions.findIndex((s) => s.id === id);
  if (index !== -1) {
    submissions[index].read = true;
    await fs.writeFile(
      submissionsPath,
      JSON.stringify(submissions, null, 2),
      "utf-8"
    );
  }
}

// Form gönderisini sil
export async function deleteSubmission(id: string): Promise<void> {
  const submissions = await getSubmissions();
  const filtered = submissions.filter((s) => s.id !== id);
  await fs.writeFile(
    submissionsPath,
    JSON.stringify(filtered, null, 2),
    "utf-8"
  );
}

// İçerikleri oku
export async function getContent(): Promise<any> {
  await ensureDbDir();
  try {
    const data = await fs.readFile(contentPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // İlk kez çalışıyorsa, mevcut content/site.ts'den içeriği kopyala
    const siteContent = await import("../content/site");
    const content = {
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
    await saveContent(content);
    return content;
  }
}

// İçerikleri kaydet
export async function saveContent(content: any): Promise<void> {
  await ensureDbDir();
  await fs.writeFile(contentPath, JSON.stringify(content, null, 2), "utf-8");
}

