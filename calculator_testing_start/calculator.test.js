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

  test('can add two decimals', () => {
    actual = sum (0.3, 0.6)
    expected = 0.9;
    // use toBeCloseTo due to floating point issues
    // expect(actual).toBeCloseTo(expected);
    expect(actual).toBeCloseTo(expected);  
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

  test('can subtract two decimals', () => {
    actual = sum (0.3, -0.6)
    expected = -0.3;
    // use toBeCloseTo due to floating point issues
    expect(actual).toBeCloseTo(expected);  
  });

});

describe('multiply', () => {

  test('can multiply two small numbers', () => {
    expected = 30;
    actual = multiply(10, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two big numbers', () => {
    expected = 200000;
    actual = multiply(1000, 200);
    expect(actual).toBe(expected);
  });

  test('can multiply number with zero', () => {
    expected = 0;
    actual = multiply(10, 0);
    expect(actual).toBe(expected);
  });

  test('can multiply two zeros', () => {
    expected = 0;
    actual = multiply(0, 0);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 50;
    actual = multiply(-10, -5);
    expect(actual).toBe(expected);
  });

  test('can multiply a positive with a negative number', () => {
    expected = -50;
    actual = multiply(-10, 5);
    expect(actual).toBe(expected);
  });

  test('can multiply two decimal numbers', () => {
    expected = 0.05;
    actual = multiply(0.5, 0.1);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
