import { NextRequest, NextResponse } from "next/server";
import { getSubmissions, markAsRead, deleteSubmission } from "../../../../lib/db";

// Basit bir auth kontrolü (production'da daha güvenli bir yöntem kullanın)
function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
  return authHeader === `Bearer ${adminPassword}`;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const submissions = await getSubmissions();
    return NextResponse.json({ submissions }, { status: 200 });
  } catch (error) {
    console.error("Gönderileri getirme hatası:", error);
    return NextResponse.json(
      { error: "Gönderiler alınırken bir hata oluştu." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, action } = await request.json();
    
    if (action === "mark-read") {
      await markAsRead(id);
      return NextResponse.json({ success: true }, { status: 200 });
    }
    
    return NextResponse.json({ error: "Geçersiz işlem" }, { status: 400 });
  } catch (error) {
    console.error("Güncelleme hatası:", error);
    return NextResponse.json(
      { error: "Güncelleme sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json({ error: "ID gerekli" }, { status: 400 });
    }
    
    await deleteSubmission(id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Silme hatası:", error);
    return NextResponse.json(
      { error: "Silme sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}

