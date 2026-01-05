"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", password);
        router.push("/admin/dashboard");
      } else {
        setError(data.error || "Geçersiz şifre");
      }
    } catch (err) {
      setError("Giriş sırasında bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="section-shell w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-white">Admin Girişi</h1>
          <p className="text-sm text-muted">FullArch Dental Lab Yönetim Paneli</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="rounded-2xl border border-red-500/50 bg-red-500/10 p-3 text-xs text-red-400">
              {error}
            </div>
          )}
          <div>
            <label htmlFor="password" className="block text-xs font-medium text-white mb-2">
              Şifre
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-border/70 bg-surface-alt/60 px-4 py-2.5 text-sm text-white outline-none placeholder:text-border/80 focus:border-primary focus:ring-1 focus:ring-primary/60"
              placeholder="Admin şifresini girin"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </Button>
        </form>
      </div>
    </div>
  );
}

