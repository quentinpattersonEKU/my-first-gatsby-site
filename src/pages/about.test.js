const printLocation = require('./about')

test('make sure we are in the right spot', () => {
    expect(printLocation()).toBe("about.js")
})