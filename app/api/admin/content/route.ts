import { NextRequest, NextResponse } from "next/server";
import { getContent, saveContent } from "../../../../lib/db";
import { clearContentCache } from "../../../../lib/content";

// Basit bir auth kontrolü
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
    const content = await getContent();
    return NextResponse.json({ content }, { status: 200 });
  } catch (error) {
    console.error("İçerik getirme hatası:", error);
    return NextResponse.json(
      { error: "İçerik alınırken bir hata oluştu." },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { content } = await request.json();
    await saveContent(content);
    clearContentCache(); // Cache'i temizle
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("İçerik kaydetme hatası:", error);
    return NextResponse.json(
      { error: "İçerik kaydedilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}

