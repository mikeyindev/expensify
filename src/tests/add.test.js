const add = (a, b) => a + b;

const generateGreeting = (name) => `Hello ${name}`;

// test('should add 2 numbers', () => {
//   const result = add(3, 4);
//   if (result !== 7) {
//     throw new Error(`The result was ${result}. Expect 7`);
//   }
// });

test("should add 2 numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should greet by name", () => {
  const result = generateGreeting('Mike');
  expect(result).toBe('Hello Mike');
});