import { add } from "../src/stringCalculator";

describe("StringCalculator.add", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for single number string", () => {
    expect(add("5")).toBe(5);
  });
});
