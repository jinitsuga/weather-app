const container = document.querySelector("#container");
container.classList.add("container");
const inputField = document.createElement("input");
container.appendChild(inputField);
const weatherImg = document.createElement("img");
container.appendChild(weatherImg);

// function that shows gif according to weather!
async function getGifData(weather) {
  try {
    const rawData = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=K36V190uiXKNdVWSvQPos2LEqYbGJUXs&s=" +
        weather,
      { mode: "cors" }
    );
    const jsonData = await rawData.json();
    return jsonData.data.images.original.url;
  } catch (e) {
    console.log(e);
  }
}

// function retrieves API data, returns only what we want
async function getWeatherData(city) {
  try {
    const rawData = await fetch(
      " https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=a7bae7872f54eb3f2103e25c1bfd7043",
      { mode: "cors" }
    );
    jsonData = await rawData.json();

    return {
      weather: jsonData.weather[0].main,
      temp: jsonData.main.temp,
    };
  } catch (err) {
    console.log(err);
  }
}

// print the data to displaying elements
async function printResults() {
  try {
    const cityData = await getWeatherData(inputField.value);
    console.log(cityData.weather);
    const imgSrc = await getGifData(cityData.weather);
    console.log(cityData.temp);
    weatherImg.src = imgSrc;
  } catch (e) {
    console.log(e);
  }
}

// API Logic - key: a7bae7872f54eb3f2103e25c1bfd7043
// different API to test https://api.giphy.com/v1/gifs/translate?api_key=K36V190uiXKNdVWSvQPos2LEqYbGJUXs&s="
