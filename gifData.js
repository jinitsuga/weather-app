// function that gives gif URL according to weather!
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
export { getGifData };
