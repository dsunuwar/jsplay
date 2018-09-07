export function sortNumbers(nums: Array<number>) {
  // use camparison function to sort numbers
  return nums.sort((a, b) => a - b);
}

/**
 * above function can also be written as below
 */
function compare(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

export function sorNumbersCompare(nums: Array<number>) {
  return nums.sort(compare);
}

// TEST
// let numbers = [1, 3, 10, 2];
// console.log(numbers); //  [1, 2, 3, 10]
