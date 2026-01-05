import { NextRequest, NextResponse } from "next/server";
import { addSubmission } from "../../../lib/db";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get("fullName") as string;
    const lab = formData.get("lab") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const city = formData.get("city") as string;
    const product = formData.get("product") as string;
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    // Validasyon
    if (!fullName || !lab || !phone || !email || !city || !message) {
      return NextResponse.json(
        { error: "Lütfen tüm zorunlu alanları doldurun." },
        { status: 400 }
      );
    }

    // Dosya bilgilerini kaydet
    let fileName: string | undefined;
    let fileSize: number | undefined;
    if (file && file.size > 0) {
      fileName = file.name;
      fileSize = file.size;
      // Dosyayı kaydet (opsiyonel - şimdilik sadece bilgileri kaydediyoruz)
      // İleride dosyaları public/uploads klasörüne kaydedebilirsiniz
    }

    // Veritabanına kaydet
    const submission = await addSubmission({
      fullName,
      lab,
      phone,
      email,
      city,
      product: product || undefined,
      message,
      fileName,
      fileSize,
    });

    return NextResponse.json(
      { success: true, message: "Form başarıyla gönderildi.", id: submission.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form gönderim hatası:", error);
    return NextResponse.json(
      { error: "Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin veya WhatsApp üzerinden iletişime geçin." },
      { status: 500 }
    );
  }
}

