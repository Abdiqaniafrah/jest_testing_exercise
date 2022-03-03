const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
  actual = sum (275, 725)
  expected = 1000;
  expect(actual).toBe(expected);    
  });

  test('can add two negative numbers', () => {
    actual = sum (-275, -725)
    expected = -1000;
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    actual = sum (10, 0)
    expected = 10;
    expect(actual).toBe(expected);  
  });

  test('can add two zeros', () => {
    actual = sum (0, 0)
    expected = 0;
    expect(actual).toBe(expected);  
  });

});

describe('subtract', () => {
  
  test('can subtract two small positive numbers', () => {
    expected = 7;
    actual = subtract(10, 3);
    expect(actual).toBe(expected);
  });
  
  test('can subtract two large positive numbers', () => {
    expected = 725;
    actual = subtract(1000, 275);
    expect(actual).toBe(expected);
  });
  
  test('can subtract a negative number from positive number', () => {
    expected = 13;
    actual = subtract(10, -3);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -2;
    actual = subtract(-5, -3);
    expect(actual).toBe(expected);
  });

  test('can subtract positive number from a negative number', () => {
    expected = -13;
    actual = subtract(-10, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract a negative number from zero', () => {
    expected = 3;
    actual = subtract(0, -3);
    expect(actual).toBe(expected);
  });

  test('can subtract two zeros', () => {
    expected = 0;
    actual = subtract(0, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
