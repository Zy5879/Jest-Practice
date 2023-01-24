import capitalize from "./cap";

test("capitalize first letter in string", () => {
  expect(capitalize("string")).toBe("String");
});
