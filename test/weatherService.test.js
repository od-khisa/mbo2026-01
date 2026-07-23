const weatherService = require("../src/services/weatherService");

test("Tokyoの天気を取得できる", () => {

    const result = weatherService.getWeather("Tokyo");

    expect(result.weather).toBe("Sunny");

});

test("存在しない都市", () => {

    const result = weatherService.getWeather("Nagoya");

    expect(result).toBeNull();

});
