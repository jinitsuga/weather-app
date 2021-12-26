import { getWeatherCity } from "./weatherData.js";
import { getGifData } from "./gifData.js";

// Elements
const container = document.querySelector("#container");
container.classList.add("container");
const inputField = document.createElement("input");
inputField.placeholder = "Type a city or location";
const weatherImg = document.createElement("img");
const goBtn = document.createElement("button");
goBtn.textContent = "GO!";
const weatherTxt = document.createElement("p");
const tempTxt = document.createElement("p");
const humidity = document.createElement("p");
container.append(inputField, goBtn, weatherImg, weatherTxt, tempTxt, humidity);

const elementos = Array.from(container.childNodes);
elementos.forEach((elemento) => elemento.classList.add("element"));

goBtn.addEventListener("click", printResults);

// print the data to displaying elements
async function printResults() {
  try {
    const cityData = await getWeatherCity(inputField.value);
    // flow ctrl to avoid "clear" gif searches showing random things unrelated to weather.
    if (cityData.weather == "Clear") {
      const imgSrc = await getGifData("blue sky");
      weatherImg.src = imgSrc;
    } else {
      const imgSrc = await getGifData(cityData.weather);
      weatherImg.src = imgSrc;
    }
    weatherTxt.textContent = cityData.weather;
    tempTxt.textContent = cityData.temp + " degrees";
    humidity.textContent = "Humidity: " + cityData.humidity;
  } catch (e) {
    console.log(e);
  }
}

// different API to test https://api.giphy.com/v1/gifs/translate?api_key=K36V190uiXKNdVWSvQPos2LEqYbGJUXs&s="
