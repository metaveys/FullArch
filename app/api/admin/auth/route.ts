import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
    
    if (password === adminPassword) {
      return NextResponse.json({ success: true }, { status: 200 });
    }
    
    return NextResponse.json({ error: "Geçersiz şifre" }, { status: 401 });
  } catch (error) {
    return NextResponse.json(
      { error: "Giriş sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}

