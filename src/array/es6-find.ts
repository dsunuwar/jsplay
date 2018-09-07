/** returns first matching element */
export function findItem(callback, arr) {
  return arr.find(callback);
}

/** returns index of first matching item */
export function findItemIndex(callback, arr) {
  return arr.find(callback);
}

// TEST
// const multipleOf2 = (element, index, arr) => element % 2 == 0;
// findItem(multipleOf2, [1, 3, 8, 5]);
