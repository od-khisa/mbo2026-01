const weatherService = require("../services/weatherService");

function handleWeather(request) {
  const location = request.params?.location;

  if (!location) {
    return {
      id: request.id,
      error: {
        message: "location is required"
      }
    };
  }

  const weather = weatherService.getWeather(location);

  if (!weather) {
    return {
      id: request.id,
      error: {
        message: "Location not found"
      }
    };
  }

  return {
    id: request.id,
    result: weather
  };
}

module.exports = {
  handleWeather
};
