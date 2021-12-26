// function retrieves API data, returns only what we want
async function getWeatherCity(city) {
  try {
    const rawData = await fetch(
      " https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=a7bae7872f54eb3f2103e25c1bfd7043",
      { mode: "cors" }
    );
    const jsonData = await rawData.json();
    console.log(jsonData);

    return {
      weather: jsonData.weather[0].main,
      temp: jsonData.main.temp,
      humidity: jsonData.main.humidity,
    };
  } catch (err) {
    console.log(err);
  }
}
export { getWeatherCity };
