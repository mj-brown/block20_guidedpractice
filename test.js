const luckyNumber = require('./index.js');
const getMeNumber = require('./nottobe.js');
const total = require('./closeto.js');
const forSale = require('./forsale.js');

test('adds 5 + 12 to equal 17', () => {
    expect(luckyNumber(5, 12)).toBe(17);
})

test('adds 7 + 12 to not equal 8', () => {
    expect(getMeNumber(7, 12)).not.toBe(8);
})

test('adds 5.51021 + 4.01123 to equal 9.52', () => {
    expect(total(5.51021, 4.01123)).toBeCloseTo(9.52);
})

test('checks to see if the key nice.oven is in the kitchen property', () => {
    expect(forSale).toHaveProperty(['kitchen', 'nice.oven']);
})

test('checks to see if the first item in amenities is oven', () => {
    expect(forSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
})