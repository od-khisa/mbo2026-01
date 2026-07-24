const mockProvider = require("./mockWeatherProvider");
const apiProvider = require("./apiWeatherProvider");

async function getWeather(provider, location) {

    switch (provider) {

        case "api":
            return await apiProvider.getWeather(location);

        case "mock":
        default:
            return mockProvider.getWeather(location);
    }
}

module.exports = {
    getWeather
};
