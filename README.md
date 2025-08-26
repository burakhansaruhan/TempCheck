# Hava Durumu Uygulaması 🌤️

Kullanıcının seçtiği **şehir**, **gün (bugün/yarın)** ve **saat** bilgisine göre hava durumunu gösteren bir React uygulaması.  
Arka planda, girilen şehre ait görsel Unsplash API üzerinden alınır.

## 🚀 Özellikler

- Şehir arama (ör. İstanbul, Berlin)
- Bugün veya yarın için saatlik hava durumu
- Seçilen saate özel sıcaklık, durum (güneşli, yağmurlu vb.)
- Arka planda otomatik şehir fotoğrafı (Unsplash)
- Responsive tasarım (mobil/desktop uyumlu)
- Vercel üzerinde canlı demo

## 🛠 Kullanılan Teknolojiler

- [React (Vite)](https://vitejs.dev/)
- [WeatherAPI](https://www.weatherapi.com/) – Hava durumu verisi
- [Unsplash API](https://unsplash.com/developers) – Şehir görselleri
- [Vercel](https://vercel.com/) – Hosting & CI/CD

## 📦 Kurulum (Local Geliştirme)

Projeyi kendi bilgisayarında çalıştırmak için:

````bash
# 1. Repo'yu klonla
git clone https://github.com/<kullanıcı>/<repo>.git
cd <repo>

# 2. Bağımlılıkları yükle
npm install

# 3. Ortam değişkenlerini ayarla (.env.local)
VITE_WEATHER_KEY=BURAYA_WEATHER_API_KEYİN
VITE_UNSPLASH_KEY=BURAYA_UNSPLASH_ACCESS_KEYİN

# 4. Geliştirme sunucusunu başlat
npm run dev
# Hava Durumu Uygulaması 🌤️

Kullanıcının seçtiği **şehir**, **gün (bugün/yarın)** ve **saat** bilgisine göre hava durumunu gösteren bir React uygulaması.
Arka planda, girilen şehre ait görsel Unsplash API üzerinden alınır.

## 🚀 Özellikler
- Şehir arama (ör. İstanbul, Berlin)
- Bugün veya yarın için saatlik hava durumu
- Seçilen saate özel sıcaklık, durum (güneşli, yağmurlu vb.)
- Arka planda otomatik şehir fotoğrafı (Unsplash)
- Responsive tasarım (mobil/desktop uyumlu)
- Vercel üzerinde canlı demo

## 🛠 Kullanılan Teknolojiler
- [React (Vite)](https://vitejs.dev/)
- [WeatherAPI](https://www.weatherapi.com/) – Hava durumu verisi
- [Unsplash API](https://unsplash.com/developers) – Şehir görselleri
- [Vercel](https://vercel.com/) – Hosting & CI/CD

## 📦 Kurulum (Local Geliştirme)
Projeyi kendi bilgisayarında çalıştırmak için:

```bash
# 1. Repo'yu klonla
git clone https://github.com/<kullanıcı>/<repo>.git
cd <repo>

# 2. Bağımlılıkları yükle
npm install

# 3. Ortam değişkenlerini ayarla (.env.local)
VITE_WEATHER_KEY=BURAYA_WEATHER_API_KEYİN
VITE_UNSPLASH_KEY=BURAYA_UNSPLASH_ACCESS_KEYİN

# 4. Geliştirme sunucusunu başlat
npm run dev
````
Tarayıcıda http://localhost:5173 adresine git.

🔑 Ortam Değişkenleri

Projede API anahtarları .env.local dosyasından okunur:

VITE_WEATHER_KEY: [WeatherAPI](https://www.weatherapi.com/)
 hesabından alınır.

VITE_UNSPLASH_KEY: [Unsplash API](https://unsplash.com/developers)
 hesabından alınır.(Access Key)

🌍 Canlı Demo

[Vercel üzerinde canlı denemek için tıkla](https://temp-check-seven.vercel.app/)
