import { add } from "../src/stringCalculator";

describe("StringCalculator.add", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for single number string", () => {
    expect(add("5")).toBe(5);
  });

  test("returns sum of two numbers separated by a comma", () => {
    expect(add("1,2")).toBe(3);
  });

  test("returns sum of multiple numbers separated by commas", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  test("returns sum of numbers separated by commas and newlines", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom single-character delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("throws error when negative numbers are present", () => {
    expect(() => add("1,-2,3,-4")).toThrow("Negatives not allowed: -2,-4");
  });

  test("ignores numbers greater than 100", () => {
    expect(add("2,100,101,6")).toBe(108);
  });
});
