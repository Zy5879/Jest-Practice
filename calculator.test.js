import calculator from "./calculator";

test("add 2 numbers", () => {
  expect(calculator().sum(3, 3)).toBe(6);
});

test("subtract 2 numbers", () => {
  expect(calculator().subtract(10, 5)).toBe(5);
});

test("multiply 2 numbers", () => {
  expect(calculator().multiply(5, 5)).toBe(25);
});

test("divide 2 numbers", () => {
  expect(calculator().divide(20, 5)).toBe(4);
});
