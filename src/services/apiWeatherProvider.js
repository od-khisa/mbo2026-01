const CITY = {
    Tokyo: {
        latitude: 35.6762,
        longitude: 139.6503
    },
    Osaka: {
        latitude: 34.6937,
        longitude: 135.5023
    },
    Sapporo: {
        latitude: 43.0618,
        longitude: 141.3545
    },
    Fukuoka: {
        latitude: 33.5902,
        longitude: 130.4017
    }
};

const WEATHER = {
    0: "Sunny",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Cloudy",
    45: "Fog",
    51: "Drizzle",
    61: "Rain",
    71: "Snow"
};

async function getWeather(location) {

    const city = CITY[location];

    if (!city) {
        return null;
    }

    const url =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${city.latitude}` +
        `&longitude=${city.longitude}` +
        `&current=temperature_2m,weather_code`;

    const response = await fetch(url);
    const json = await response.json();

    return {
        location,
        weather: WEATHER[json.current.weather_code] ?? "Unknown",
        temperature: json.current.temperature_2m
    };
}

module.exports = {
    getWeather
};
