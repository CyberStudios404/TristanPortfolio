
const weatherData = {
  storm: {
    name: "Storm",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFeXN8Y8oiMjxEhP60ExDOXXp3Zx5Gc6eI3HQRhFYHLg&s=10",
    description: "A data-driven environmental system designed for scalable, modular weather simulation in Unity.",
    info: "Intensity: Heavy<br>Wind: 42 km/h<br>Particles: Active<br>Audio: Dynamic"
  },
  clear: {
    name: "Clear",
    image: "https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F0d4019dd40503fbe2770057a5d37cc078538e6e8-810x455.jpg%3Frect%3D1%2C0%2C808%2C455%26w%3D860%26h%3D484%26fit%3Dcrop&w=3840&q=75",
    description: "Bright conditions with low atmospheric interference and clean visibility.",
    info: "Intensity: Calm<br>Wind: 8 km/h<br>Particles: Minimal<br>Audio: Ambient"
  },
  snow: {
    name: "Snow",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfZkCkMuQU1hCKMMMgiX_9jpDgy7vDc2N8Y4C4I-zsA&s=10",
    description: "Cold weather state with low temperature visuals, drifting particles, and soft ambient motion.",
    info: "Intensity: Moderate<br>Wind: 15 km/h<br>Particles: Heavy<br>Audio: Muffled"
  },
  fog: {
    name: "Fog",
    image: "https://cdn.80.lv/api/upload/meta/14404/images/5f9feb0ac2ca9/contain_1200x630.jpg",
    description: "Low-visibility state focused on atmosphere, depth, and environmental tension.",
    info: "Intensity: Light<br>Wind: 5 km/h<br>Particles: Dense<br>Audio: Distant"
  }
};

const heroImage = document.getElementById("heroImage");
const weatherState = document.getElementById("weatherState");
const weatherInfo = document.getElementById("weatherInfo");
const weatherDescription = document.getElementById("weatherDescription");
const buttons = document.querySelectorAll(".weather-btn");

function updateHeight() {
  window.parent.postMessage({
    type: "framework-height",
    height: document.body.scrollHeight
  }, "*");
}

function setWeather(key) {
  const weather = weatherData[key];
  if (!weather) return;

  heroImage.style.opacity = "0.15";

  setTimeout(() => {
    heroImage.src = weather.image;
    heroImage.alt = weather.name + " background";
    weatherState.textContent = weather.name;
    weatherInfo.innerHTML = weather.info;
    weatherDescription.textContent = weather.description;

    buttons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.weather === key);
    });

    heroImage.style.opacity = "1";
    updateHeight();
  }, 180);
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    setWeather(button.dataset.weather);
  });
});

window.addEventListener("load", updateHeight);
window.addEventListener("resize", updateHeight);
setTimeout(updateHeight, 500);
