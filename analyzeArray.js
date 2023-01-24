function analyzeArray(arr) {
  let object = {
    average: average(arr),
    length: arr.length,
    min: arr.sort(compareNumbers)[0],
    max: arr.sort(compareNumbers).pop(),
  };
  return object;
}

function average(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

function compareNumbers(a, b) {
  return a - b;
}

const object = analyzeArray([1, 2, 4, 5]);
console.log(object);

export { analyzeArray, average, compareNumbers };
