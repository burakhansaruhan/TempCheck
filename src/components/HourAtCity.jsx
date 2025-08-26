import { useState, useMemo } from "react";

const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
console.log(import.meta.env.VITE_WEATHER_KEY);


export default function HourAtCity() {
  const [city, setCity] = useState("");
  const [day, setDay] = useState("today"); // today | tomorrow
  const [hour, setHour] = useState("00");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [data, setData] = useState(null);
  const [bgUrl, setBgUrl] = useState("");

  // 00..23 saatleri
  const hours = useMemo(
    () => Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0")),
    []
  );

  async function handleGet() {
    setErr("");
    setData(null);

    const q = city.trim();
    if (!q) return setErr("Şehir gir.");

    setLoading(true);
    try {
      // WeatherAPI'den bugün + yarın tahminlerini al
      const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY}&q=${encodeURIComponent(
        q
      )}&days=2&aqi=no&alerts=no&lang=tr`;

      const res = await fetch(weatherUrl);
      if (!res.ok) throw new Error("Hava durumu alınamadı");
      const json = await res.json();

      const dayIndex = day === "today" ? 0 : 1;
      const hoursArr = json?.forecast?.forecastday?.[dayIndex]?.hour || [];
      const match = hoursArr.find((h) => h.time.slice(11, 13) === hour);

      if (!match) return setErr("Bu saat için veri yok.");

      setData({
        city: `${json.location?.name}, ${json.location?.country}`,
        tz: json.location?.tz_id,
        date: json.forecast.forecastday[dayIndex]?.date,
        time: match.time,
        temp: match.temp_c,
        text: match.condition?.text,
        icon: match.condition?.icon,
      });

      // Unsplash'tan şehir fotoğrafı
      const imgRes = await fetch(
        `https://api.unsplash.com/photos/random?query=${encodeURIComponent(
          q
        )}&orientation=landscape`,
        { headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` } }
      );
      const imgJson = await imgRes.json();
      if (imgJson?.urls?.full) setBgUrl(imgJson.urls.full);
    } catch {
      setErr("Veri alınamadı. Şehir veya API anahtarlarını kontrol et.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="hour-at-city"
      style={{
        backgroundImage: bgUrl ? `url(${bgUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="content-box">
        <div className="input-group">
          <input
            className="city-input"
            placeholder="İstanbul"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <select
            className="day-select"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            <option value="today">Bugün</option>
            <option value="tomorrow">Yarın</option>
          </select>
          <select
            className="hour-select"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          >
            {hours.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
          <button
            className="fetch-button"
            onClick={handleGet}
            disabled={loading}
          >
            {loading ? "Yükleniyor..." : "Getir"}
          </button>
        </div>

        {err && <p className="error-text">{err}</p>}

        {data && (
          <div className="result">
            <p className="result-location">
              <strong>{data.city}</strong> — {data.date} {data.time} (
              {data.tz})
            </p>
            <p className="result-weather">
              {data.icon && (
                <img
                  className="weather-icon"
                  src={`https:${data.icon}`}
                  alt={data.text}
                  width="32"
                  height="32"
                />
              )}
              <span className="weather-text">
                {data.temp} °C — {data.text}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
