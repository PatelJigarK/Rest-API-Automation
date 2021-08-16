const expect = require("chai").expect

function convertFahrenheitToCelsius(tempInF) {
    return parseFloat(((tempInF-32)*5/9).toFixed(2))
}

describe("Fahrenheit To Celsius Conversion", () => {

    it("Temp 80°F should be equal to 26.67°C", () => {
        expect(convertFahrenheitToCelsius(80)).to.equal(26.67)
    })

    it("Temp 30°F should be equal to -1.11°C", () => {
        expect(convertFahrenheitToCelsius(30)).to.equal(-1.11)
    })
})