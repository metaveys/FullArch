"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import { Container } from "../../../components/ui/container";

function getAuthHeader(): HeadersInit {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    return {};
  }
  return {
    authorization: `Bearer ${token}`,
  };
}

interface FieldConfig {
  type: "text" | "textarea" | "array" | "object" | "image" | "url";
  label: string;
  description?: string;
}

const fieldConfigs: Record<string, Record<string, FieldConfig>> = {
  siteConfig: {
    name: { type: "text", label: "Site Adı" },
    phone: { type: "text", label: "Telefon" },
    phoneDisplay: { type: "text", label: "Telefon (Görünen)" },
    email: { type: "text", label: "E-posta" },
    whatsappBase: { type: "url", label: "WhatsApp Base URL" },
    url: { type: "url", label: "Site URL" },
    address: { type: "text", label: "Adres" },
  },
  globalCtas: {
    primary: { type: "object", label: "Birincil CTA" },
    secondary: { type: "object", label: "İkincil CTA" },
    tertiary: { type: "object", label: "Üçüncül CTA" },
  },
};

export default function ContentEditor() {
  const router = useRouter();
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("homePage");
  const [editedContent, setEditedContent] = useState<any>(null);
  const [expandedFields, setExpandedFields] = useState<Set<string>>(new Set());

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin");
      return;
    }
    loadContent();
  }, [router]);

  const loadContent = async () => {
    try {
      const response = await fetch("/api/admin/content", {
        headers: getAuthHeader(),
      });

      if (response.status === 401) {
        localStorage.removeItem("adminToken");
        router.push("/admin");
        return;
      }

      const data = await response.json();
      setContent(data.content);
      setEditedContent(JSON.parse(JSON.stringify(data.content))); // Deep copy
    } catch (error) {
      console.error("İçerik yüklenirken hata:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editedContent) return;

    setSaving(true);
    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: {
          ...getAuthHeader(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: editedContent }),
      });

      if (response.ok) {
        const result = await response.json();
        alert("✅ İçerik başarıyla kaydedildi!\n\nNot: Değişikliklerin sitede görünmesi için sayfayı yenilemeniz gerekebilir.");
        loadContent();
      } else {
        const error = await response.json();
        alert(`❌ Kaydetme sırasında bir hata oluştu: ${error.error || "Bilinmeyen hata"}`);
      }
    } catch (error) {
      console.error("Kaydetme hatası:", error);
      alert("❌ Kaydetme sırasında bir hata oluştu.");
    } finally {
      setSaving(false);
    }
  };

  const updateField = (path: string[], value: any) => {
    if (!editedContent) return;

    const newContent = JSON.parse(JSON.stringify(editedContent));
    let current: any = newContent;

    for (let i = 0; i < path.length - 1; i++) {
      if (!current[path[i]]) {
        current[path[i]] = {};
      }
      if (typeof current[path[i]] === "object" && !Array.isArray(current[path[i]])) {
        current[path[i]] = { ...current[path[i]] };
      }
      current = current[path[i]];
    }

    current[path[path.length - 1]] = value;
    setEditedContent(newContent);
  };

  const addArrayItem = (path: string[], defaultValue: any) => {
    if (!editedContent) return;

    const newContent = JSON.parse(JSON.stringify(editedContent));
    let current: any = newContent;

    for (let i = 0; i < path.length; i++) {
      if (!current[path[i]]) {
        current[path[i]] = [];
      }
      current = current[path[i]];
    }

    if (Array.isArray(current)) {
      current.push(defaultValue);
      setEditedContent(newContent);
    }
  };

  const removeArrayItem = (path: string[], index: number) => {
    if (!editedContent) return;
    if (!confirm("Bu öğeyi silmek istediğinizden emin misiniz?")) return;

    const newContent = JSON.parse(JSON.stringify(editedContent));
    let current: any = newContent;

    for (let i = 0; i < path.length; i++) {
      current = current[path[i]];
    }

    if (Array.isArray(current)) {
      current.splice(index, 1);
      setEditedContent(newContent);
    }
  };

  const toggleField = (path: string) => {
    const newExpanded = new Set(expandedFields);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedFields(newExpanded);
  };

  const renderField = (
    key: string,
    value: any,
    path: string[] = [],
    label?: string
  ): JSX.Element | null => {
    const currentPath = [...path, key];
    const pathKey = currentPath.join(".");
    const isExpanded = expandedFields.has(pathKey);
    const fieldLabel = label || key.replace(/([A-Z])/g, " $1").trim();

    if (value === null || value === undefined) {
      return (
        <div key={key} className="space-y-2 rounded-xl border border-border/40 bg-surface-alt/30 p-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-white">{fieldLabel}</label>
            <Button
              onClick={() => updateField(currentPath, "")}
              variant="ghost"
              className="text-[10px] h-6 px-2"
            >
              Ekle
            </Button>
          </div>
        </div>
      );
    }

    if (typeof value === "string") {
      const isUrl = value.startsWith("http") || value.startsWith("/") || value.startsWith("mailto:") || value.startsWith("tel:");
      const isImageUrl = isUrl && (value.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i) || value.includes("image") || key.toLowerCase().includes("image") || key.toLowerCase().includes("logo") || key.toLowerCase().includes("photo"));
      const isLong = value.length > 100;

      return (
        <div key={key} className="space-y-1.5">
          <label className="text-xs font-medium text-white flex items-center gap-2">
            {fieldLabel}
            {isUrl && <span className="text-[10px] text-accent">({isImageUrl ? "Görsel URL" : "URL"})</span>}
          </label>
          {isImageUrl && value && (
            <div className="mb-2 rounded-lg border border-border/60 bg-background/40 p-2">
              <img 
                src={value} 
                alt="Preview" 
                className="max-w-full h-32 object-contain rounded"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}
          {isLong ? (
            <textarea
              value={value}
              onChange={(e) => updateField(currentPath, e.target.value)}
              className="w-full rounded-xl border border-border/70 bg-surface-alt/60 px-3 py-2 text-xs text-white outline-none placeholder:text-border/80 focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all resize-none font-mono"
              rows={isLong ? 6 : 4}
            />
          ) : (
            <input
              type={isUrl ? "url" : "text"}
              value={value}
              onChange={(e) => updateField(currentPath, e.target.value)}
              className="w-full rounded-xl border border-border/70 bg-surface-alt/60 px-3 py-2 text-xs text-white outline-none placeholder:text-border/80 focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all"
            />
          )}
        </div>
      );
    } else if (Array.isArray(value)) {
      return (
        <div key={key} className="space-y-3 rounded-xl border border-border/40 bg-surface-alt/20 p-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-white">{fieldLabel}</label>
            <Button
              onClick={() => toggleField(pathKey)}
              variant="ghost"
              className="text-[10px] h-6 px-2"
            >
              {isExpanded ? "▼" : "▶"}
            </Button>
          </div>
          {isExpanded && (
            <div className="space-y-3">
              {value.map((item: any, index: number) => (
                <div
                  key={index}
                  className="rounded-lg border border-border/60 bg-background/40 p-3 space-y-2"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-medium text-muted">
                      Öğe #{index + 1}
                    </span>
                    <Button
                      onClick={() => removeArrayItem(currentPath, index)}
                      variant="ghost"
                      className="text-[10px] h-6 px-2 text-red-400 hover:text-red-300"
                    >
                      ✕ Sil
                    </Button>
                  </div>
                  {typeof item === "string" ? (
                    <input
                      value={item}
                      onChange={(e) => {
                        const newArray = [...value];
                        newArray[index] = e.target.value;
                        updateField(currentPath, newArray);
                      }}
                      className="w-full rounded-lg border border-border/70 bg-surface-alt/60 px-3 py-2 text-xs text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
                    />
                  ) : (
                    <div className="space-y-2">
                      {Object.entries(item).map(([subKey, subValue]) =>
                        renderField(subKey, subValue, [...currentPath, index.toString()])
                      )}
                    </div>
                  )}
                </div>
              ))}
              <Button
                onClick={() => {
                  const defaultValue =
                    value.length > 0 && typeof value[0] === "object"
                      ? JSON.parse(JSON.stringify(value[0])) // Deep copy
                      : "";
                  addArrayItem(currentPath, defaultValue);
                }}
                variant="outline"
                className="w-full text-xs"
              >
                ➕ Yeni Öğe Ekle
              </Button>
            </div>
          )}
        </div>
      );
    } else if (typeof value === "object" && value !== null) {
      return (
        <div key={key} className="space-y-3 rounded-xl border border-border/40 bg-surface-alt/20 p-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-white">{fieldLabel}</label>
            <Button
              onClick={() => toggleField(pathKey)}
              variant="ghost"
              className="text-[10px] h-6 px-2"
            >
              {isExpanded ? "▼" : "▶"}
            </Button>
          </div>
          {isExpanded && (
            <div className="space-y-3 pl-2">
              {Object.entries(value).map(([subKey, subValue]) =>
                renderField(subKey, subValue, currentPath)
              )}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  const renderSection = () => {
    if (!editedContent || !activeSection) return null;

    const section = editedContent[activeSection];
    if (!section) return null;

    return (
      <div className="space-y-4">
        {Object.entries(section).map(([key, value]) => renderField(key, value, [activeSection]))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted">Yükleniyor...</div>
      </div>
    );
  }

  const sections = [
    { key: "siteConfig", label: "⚙️ Site Ayarları", icon: "⚙️" },
    { key: "globalCtas", label: "🔘 Global Butonlar", icon: "🔘" },
    { key: "homePage", label: "🏠 Ana Sayfa", icon: "🏠" },
    { key: "contactPage", label: "📞 İletişim Sayfası", icon: "📞" },
    { key: "technologyPage", label: "🔬 Teknoloji Sayfası", icon: "🔬" },
    { key: "cadCamPage", label: "💻 CAD/CAM Sayfası", icon: "💻" },
    { key: "qualityPage", label: "✅ Kalite Sayfası", icon: "✅" },
    { key: "deliveryPage", label: "🚚 Teslimat Sayfası", icon: "🚚" },
    { key: "faqPage", label: "❓ SSS Sayfası", icon: "❓" },
    { key: "productCategories", label: "📦 Ürün Kategorileri", icon: "📦" },
    { key: "productDetails", label: "🔧 Ürün Detayları", icon: "🔧" },
  ];

  return (
    <Container className="py-8">
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">İçerik Düzenleyici</h1>
          <p className="text-sm text-muted mt-1">
            Tüm site içeriklerini buradan düzenleyebilirsiniz
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => router.push("/admin/dashboard")} variant="outline" className="text-xs">
            ← Geri Dön
          </Button>
          <Button onClick={handleSave} disabled={saving} className="text-xs">
            {saving ? "⏳ Kaydediliyor..." : "💾 Kaydet"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="section-shell p-4 space-y-2 max-h-[85vh] overflow-y-auto">
          <h3 className="text-sm font-semibold text-white mb-3 sticky top-0 bg-surface/70 backdrop-blur-sm py-2">
            📋 Bölümler
          </h3>
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => {
                setActiveSection(section.key);
                setExpandedFields(new Set());
              }}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all ${
                activeSection === section.key
                  ? "bg-primary/20 text-primary border-2 border-primary/40 shadow-md"
                  : "text-muted hover:text-white hover:bg-surface-alt/40 border border-transparent"
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label.replace(/^[^\s]+\s/, "")}
            </button>
          ))}
        </div>

        <div className="lg:col-span-4 section-shell p-6 max-h-[85vh] overflow-y-auto">
          {activeSection && (
            <div className="mb-4 pb-4 border-b border-border/60">
              <h2 className="text-lg font-semibold text-white">
                {sections.find((s) => s.key === activeSection)?.label}
              </h2>
              <p className="text-xs text-muted mt-1">
                Bu bölümdeki tüm alanları düzenleyebilirsiniz. Değişiklikleri kaydetmeyi unutmayın!
              </p>
            </div>
          )}
          {renderSection()}
        </div>
      </div>
    </Container>
  );
}
