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
  return numbers.reduce((sum, n) => sum + n, 0);
};
