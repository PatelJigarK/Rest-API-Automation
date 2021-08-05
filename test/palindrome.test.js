const expect = require("chai").expect

function checkIfStringIsPalindrome(testString) {
    let palindromeString
    if (testString === "" || testString === " ") {palindromeString = false}
    else if (testString.toUpperCase() === testString.split("").reverse().join("").toUpperCase()) {palindromeString = true}
    else {palindromeString = false}
    return palindromeString
}

describe("Palindrome String check", () => {

    it("Empty string should not consider as palindrome string", () => {
        expect(checkIfStringIsPalindrome("")).to.equal(false)
    })

    it("String with only space should not consider as palindrome string", () => {
        expect(checkIfStringIsPalindrome(" ")).to.equal(false)
    })

    it("Dad string should consider as palindrome string", () => {
        expect(checkIfStringIsPalindrome("Dad")).to.equal(true)
    })

    it("Hello string should not consider as palindrome string", () => {
        expect(checkIfStringIsPalindrome("Hello")).to.equal(false)
    })
})