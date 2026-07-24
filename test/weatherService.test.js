const weatherService = require("../src/services/weatherService");

describe("weatherService", () => {

    test("モック(Tokyo)の天気を取得", async () => {

        const result = await weatherService.getWeather("mock", "Tokyo");

        expect(result.location).toBe("Tokyo");
        expect(result.weather).toBe("Sunny");
        expect(result.temperature).toBe(30);

    });

    test("存在しない都市", async () => {

        const result = await weatherService.getWeather("mock", "Nagoya");

        expect(result).toBeNull();

    });

});
