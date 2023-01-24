import { analyzeArray, average, compareNumbers } from "./analyzeArray";

test("calculate the average of an array", () => {
  expect(average([1, 2, 4, 5])).toBe(3);
});

test("sort array numbers in order starting from 0", () => {
  const arr = [15, 30, 12, 20];
  expect(arr.sort(compareNumbers)).toStrictEqual([12, 15, 20, 30]);
});

test("properly displays length of array", () => {
  const arr = [15, 30, 12, 20];
  expect(arr.length).toBe(4);
});

test("object is displayed correctly", () => {
  expect(analyzeArray([1, 2, 4, 5])).toStrictEqual({
    average: 3,
    length: 4,
    max: 5,
    min: 1,
  });
});
