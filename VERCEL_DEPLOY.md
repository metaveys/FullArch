# Vercel Deploy Rehberi

## 1. GitHub Repository'yi Vercel'e Bağlama

1. [Vercel Dashboard](https://vercel.com/dashboard) üzerinden "Add New Project" butonuna tıklayın
2. GitHub repository'nizi seçin: `metaveys/FullArch`
3. "Import" butonuna tıklayın

## 2. Environment Variables Ayarlama

Vercel Dashboard'da projenize gidin ve **Settings > Environment Variables** bölümüne gidin.

Aşağıdaki environment variable'ı ekleyin:

- **Name:** `ADMIN_PASSWORD`
- **Value:** Admin paneli için şifreniz (güçlü bir şifre seçin)
- **Environment:** Production, Preview, Development (hepsini seçin)

## 3. Build Ayarları

Vercel otomatik olarak Next.js projelerini algılar. Aşağıdaki ayarlar zaten yapılandırılmış:

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next` (otomatik)
- **Install Command:** `npm install`

## 4. Deploy

1. Environment variable'ı ekledikten sonra **Deployments** sekmesine gidin
2. En son deployment'ı kontrol edin veya yeni bir deploy tetikleyin
3. Deploy tamamlandıktan sonra site canlıya alınacak

## 5. Domain Bağlama

1. Vercel Dashboard'da projenize gidin
2. **Settings > Domains** bölümüne gidin
3. Domain'inizi ekleyin
4. DNS ayarlarını yapın (Vercel size gerekli DNS kayıtlarını gösterecek)

## Önemli Notlar

- Admin paneli verileri `/tmp` klasöründe saklanır (Vercel'de geçici)
- Production'da veriler kalıcı değildir (her deploy'da sıfırlanabilir)
- Kalıcı veri için Vercel KV veya başka bir veritabanı kullanmanız önerilir

## Sorun Giderme

### Build Hatası Alıyorsanız:

1. **Environment Variables:** `ADMIN_PASSWORD` ayarlandığından emin olun
2. **Node.js Versiyonu:** Vercel otomatik olarak uygun versiyonu kullanır (18+)
3. **Build Logs:** Vercel Dashboard'da build loglarını kontrol edin

### Deploy Başarısız Oluyorsa:

1. Local'de `npm run build` komutunu çalıştırıp hata olup olmadığını kontrol edin
2. GitHub repository'nizin güncel olduğundan emin olun
3. Vercel Dashboard'daki build loglarını inceleyin

