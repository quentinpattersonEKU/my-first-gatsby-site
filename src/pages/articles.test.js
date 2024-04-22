const printLocation = require('./articles')

test('make sure we are in the right spot', () => {
    expect(printLocation()).toBe("articles.js")
})