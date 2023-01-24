import caesar from "./caesarCipher";

test("each character in a string is shifted", () => {
  expect(caesar("abcdefghijklmnopqrstuvwxyz")).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test("all characters in string return lowercase", () => {
  expect(caesar("STRING")).toBe("trings");
});

test("punctuation shifts as well", () => {
  expect(caesar("strin/g")).toBe("trin/gs");
});
