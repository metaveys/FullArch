"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import { Container } from "../../../components/ui/container";

interface FormSubmission {
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

function getAuthHeader() {
  const token = localStorage.getItem("adminToken");
  return token ? { authorization: `Bearer ${token}` } : {};
}

export default function AdminDashboard() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin");
      return;
    }
    loadSubmissions();
  }, [router]);

  const loadSubmissions = async () => {
    try {
      const response = await fetch("/api/admin/submissions", {
        headers: getAuthHeader(),
      });

      if (response.status === 401) {
        localStorage.removeItem("adminToken");
        router.push("/admin");
        return;
      }

      const data = await response.json();
      setSubmissions(data.submissions || []);
      setUnreadCount(data.submissions?.filter((s: FormSubmission) => !s.read).length || 0);
    } catch (error) {
      console.error("Gönderiler yüklenirken hata:", error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      await fetch("/api/admin/submissions", {
        method: "PATCH",
        headers: {
          ...getAuthHeader(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, action: "mark-read" }),
      });
      loadSubmissions();
    } catch (error) {
      console.error("Okundu işaretleme hatası:", error);
    }
  };

  const deleteSubmission = async (id: string) => {
    if (!confirm("Bu gönderiyi silmek istediğinizden emin misiniz?")) return;

    try {
      await fetch(`/api/admin/submissions?id=${id}`, {
        method: "DELETE",
        headers: getAuthHeader(),
      });
      loadSubmissions();
    } catch (error) {
      console.error("Silme hatası:", error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <Container className="py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Admin Paneli</h1>
          <p className="text-sm text-muted mt-1">Form gönderileri ve içerik yönetimi</p>
        </div>
        <Button onClick={handleLogout} variant="outline" className="text-xs">
          Çıkış Yap
        </Button>
      </div>


      <div className="space-y-4">
        {submissions.length === 0 ? (
          <div className="section-shell p-8 text-center text-muted">
            Henüz form gönderisi yok.
          </div>
        ) : (
          submissions.map((submission) => (
              <div
                key={submission.id}
                className={`section-shell p-5 space-y-3 ${
                  !submission.read ? "border-l-4 border-l-primary" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-semibold text-white">
                        {submission.fullName}
                      </h3>
                      <span className="text-xs text-muted">•</span>
                      <span className="text-xs text-muted">{submission.lab}</span>
                      <span className="text-xs text-muted">•</span>
                      <span className="text-xs text-muted">{submission.city}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted flex-wrap">
                      <a
                        href={`tel:${submission.phone}`}
                        className="hover:text-primary transition-colors"
                      >
                        📞 {submission.phone}
                      </a>
                      <a
                        href={`mailto:${submission.email}`}
                        className="hover:text-primary transition-colors"
                      >
                        ✉️ {submission.email}
                      </a>
                      {submission.product && (
                        <span className="inline-flex items-center rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-medium text-primary">
                          {submission.product}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted bg-surface-alt/40 rounded-xl p-3 whitespace-pre-wrap">
                      {submission.message}
                    </div>
                    {submission.fileName && (
                      <div className="text-xs text-muted">
                        📎 Dosya: {submission.fileName} ({(submission.fileSize! / 1024).toFixed(2)} KB)
                      </div>
                    )}
                    <div className="text-[11px] text-border">
                      {formatDate(submission.createdAt)}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!submission.read && (
                      <Button
                        onClick={() => markAsRead(submission.id)}
                        variant="outline"
                        className="text-xs"
                      >
                        Okundu
                      </Button>
                    )}
                    <Button
                      onClick={() => deleteSubmission(submission.id)}
                      variant="ghost"
                      className="text-xs text-red-400 hover:text-red-300"
                    >
                      Sil
                    </Button>
                  </div>
                </div>
              </div>
          ))
        )}
      </div>
    </Container>
  );
}

