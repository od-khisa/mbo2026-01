const weatherData = require("../mock/weather.json");

function getWeather(location) {
  const result = weatherData[location];

  if (!result) {
    return null;
  }

  return {
    location,
    weather: result.weather,
    temperature: result.temperature
  };
}

module.exports = {
  getWeather
};
