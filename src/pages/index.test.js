const printLocation = require('./index')

test('make sure we are in the right spot', () => {
    expect(printLocation()).toBe("Index.js")
})