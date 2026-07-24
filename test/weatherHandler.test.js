const weatherHandler = require("../src/handlers/weather");

describe("weatherHandler", () => {

    test("location未指定", async () => {

        const response = await weatherHandler.handleWeather({
            id: 1,
            params: {
                provider: "mock"
            }
        });

        expect(response.error.message)
            .toBe("location is required");

    });

    test("Tokyo", async () => {

        const response = await weatherHandler.handleWeather({
            id: 1,
            params: {
                provider: "mock",
                location: "Tokyo"
            }
        });

        expect(response.result.weather)
            .toBe("Sunny");

    });

});
