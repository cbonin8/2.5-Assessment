const selectors = require('../supporting/selectors')
const data = require('../supporting/data')
const Functions = require('../supporting/functions')
module.exports = {
    beforeEach : browser =>{
    browser.url ("http://localhost:3000/")
    },

    'Odds and Evens Test' : browser => {
        Functions.checkEvensAndOddsReference(browser, data.OddsAndEvens, selectors["Odds and Evens"])
    },
    'Filter Objects' : browser => {
        Functions.checkFilterObjectsReference(browser, data.FilterObjects, selectors["Filter Objects"])
    },
    'Filter String' : browser => {
        Functions.checkFilterStringReference(browser, data.FilterString, selectors["Filter String"])
    },
    'Palindrome' : browser => {
        Functions.checkPalindromeReference(browser, data.Palindrome, selectors["Palindrome"])
    },
    'Sum' : browser => {
        Functions.checkSumReference(browser, data.Sum, selectors["Sum"])
    }
}
