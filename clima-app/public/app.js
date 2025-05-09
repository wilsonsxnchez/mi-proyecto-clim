const apiKey = "369ef5f02ac50f1bdbb0896110a7f007";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const refreshBtn = document.getElementById("refreshBtn");

const cityCountryEl = document.getElementById("cityCountry");
const lastUpdateEl = document.getElementById("lastUpdate");
const mainTempEl = document.getElementById("mainTemp");
const mainIconEl = document.getElementById("mainIcon");
const feelsLikeEl = document.getElementById("feelsLike");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const pressureEl = document.getElementById("pressure");
const visibilityEl = document.getElementById("visibility");

let currentCity = "Buenos Aires";

function weatherToEmoji(code) {
  const map = {
    "01d": "🌞",
    "01n": "🌙",
    "02d": "⛅",
    "02n": "☁️",
    "03d": "☁️",
    "03n": "☁️",
    "04d": "☁️",
    "04n": "☁️",
    "09d": "🌧️",
    "09n": "🌧️",
    "10d": "🌦️",
    "10n": "🌦️",
    "11d": "⛈️",
    "11n": "⛈️",
    "13d": "❄️",
    "13n": "❄️",
    "50d": "🌫️",
    "50n": "🌫️",
  };
  return map[code] || "❔";
}

function updateWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&units=metric&lang=es&appid=${apiKey}`
  )
    .then((res) => {
      if (!res.ok) throw new Error("Ciudad no encontrada");
      return res.json();
    })
    .then((data) => {
      currentCity = data.name;

      cityCountryEl.textContent = `${data.name}, ${data.sys.country}`;
      lastUpdateEl.textContent = `Actualizado: ${new Date().toLocaleTimeString()}`;
      mainTempEl.textContent = `${Math.round(data.main.temp)}°C`;
      mainIconEl.textContent = weatherToEmoji(data.weather[0].icon);
      feelsLikeEl.textContent = `${Math.round(data.main.feels_like)}°C`;
      humidityEl.textContent = `${data.main.humidity}%`;
      windEl.textContent = `${data.wind.speed} km/h`;
      pressureEl.textContent = `${data.main.pressure} hPa`;
      visibilityEl.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
    })
    .catch((err) => {
      alert(err.message);
      console.error(err);
    });
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    updateWeather(city);
    cityInput.value = "";
  }
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value.trim();
    if (city) {
      updateWeather(city);
      cityInput.value = "";
    }
  }
});

refreshBtn.addEventListener("click", (e) => {
  e.preventDefault();
  updateWeather(currentCity);
});

// Carga inicial
window.addEventListener("load", () => {
  updateWeather(currentCity);
});


