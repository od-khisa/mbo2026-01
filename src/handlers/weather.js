const weatherService = require("../services/weatherService");

async function handleWeather(request) {
  const location = request.params?.location;

  if (!location) {
    return {
      id: request.id,
      error: {
        message: "location is required"
      }
    };
  }

  const provider = request.params.provider || "mock";

  const weather = await weatherService.getWeather(
      provider,
      request.params.location
  );

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
