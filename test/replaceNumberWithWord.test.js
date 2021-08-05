const expect = require("chai").expect

function replaceNumbersWithWords(maxNum) {
    let editedNumbers = []
    for (let i = 1; i <= maxNum; i++) {
        if (i%3 === 0 && i%5 === 0) {editedNumbers.push('FizzBuzz')}
        else if (i%3 === 0) {editedNumbers.push('Fizz')}
        else if (i%5 === 0) {editedNumbers.push('Buzz')}
        else {editedNumbers.push(`${i}`)}
    }
    return editedNumbers
}

describe("Replace Number With Word", () => {

    it("Set maxNum to 15 should have 4 Fizz, 2 Buzz, 1 FizzBuzz and 8 numbers", () => {
        let finalArray = replaceNumbersWithWords(15)
        console.log(finalArray)
        let numbersToCheck = [0, 0, 0, 0]
        let expectedNumber = [4, 2, 1, 8]
        for (const value of finalArray) {
            if (value === 'Fizz') {numbersToCheck[0] = numbersToCheck[0]+1}
            else if (value === 'Buzz') {numbersToCheck[1] = numbersToCheck[1]+1}
            else if (value === 'FizzBuzz') {numbersToCheck[2] = numbersToCheck[2]+1}
            else {numbersToCheck[3] = numbersToCheck[3]+1}
        }
        expect(numbersToCheck).to.eql(expectedNumber)
    })
})