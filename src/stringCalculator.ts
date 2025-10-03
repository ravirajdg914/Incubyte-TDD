export const add = (input: string): number => {
  if (input === "") return 0;

  let numbersString = input;
  let delimiters = /,|\n/; // default delimiters

  // check for custom delimiter
  if (input.startsWith("//")) {
    const delimiterMatch = input.match(/^\/\/(.)\n/);
    if (delimiterMatch) {
      const customDelimiter = delimiterMatch[1];
      delimiters = new RegExp(customDelimiter);
      numbersString = input.slice(4);
    }
  }

  const numbers = numbersString.split(delimiters).map(Number);

  // check for negative numbers
  const negatives = numbers.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(",")}`);
  }

  // ignore numbers > 100
  const filtered = numbers.filter((n) => n <= 100);

  return filtered.reduce((sum, n) => sum + n, 0);
};
