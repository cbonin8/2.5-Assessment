const selectors = require('./selectors')
const data = require('./data')

//don't worry about browser, refer to data by data.insertNameHere and same for selectors, write the fuction the same way you would do a test
// data.evenOddData references the item evenOddData in your data.js file
let checkEvensAndOdds = (browser, data, selectors) => {
    browser
    .setValue(selectors.dataEntry, data.evenOddData)
    .click(selectors.splitBtn)
    .verify.containsText(selectors.evenText, data.evenText)
    .verify.containsText(selectors.oddText, data.oddText)

}
let checkFilterObjects = (browser, data, selectors) => {
    browser
    .setValue(selectors.filterInput, data.filterObjectData)
    .click(selectors.filterBtn)
    .verify.containsText(selectors.filterText, data.filterResults)
}
let checkFilterString = (browser, data, selectors) => {
    browser
    .setValue(selectors.stringInput, data.filterStringData)
    .click(selectors.stringBtn)
    .verify.containsText(selectors.stringResults, data.filterStringResults)
}
let checkPalindrome = (browser, data, selectors) => {
    browser
    .setValue(selectors.palInput, data.palData)
    .click(selectors.checkBtn)
    .verify.containsText(selectors.palResults, data.palResults)
}
let checkSum = (browser, data, selectors) => {
    browser
    .setValue(selectors.firstSumInput, data.firstSumData)
    .setValue(selectors.secondSumInput, data.secondSumData)
    .click(selectors.addBtn)
    .verify.containsText(selectors.sumResults, data.sumResults)
}
module.exports = {
        checkEvensAndOddsReference : checkEvensAndOdds,
        checkFilterObjectsReference : checkFilterObjects,
        checkFilterStringReference : checkFilterString,
        checkPalindromeReference : checkPalindrome,
        checkSumReference : checkSum
    }