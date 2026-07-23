const weatherHandler = require("../src/handlers/weather");

test("location未指定", () => {

    const response = weatherHandler.handleWeather({
        id:1,
        params:{}
    });

    expect(response.error.message)
        .toBe("location is required");

});
