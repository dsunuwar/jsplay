/**
 * Ref: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 * This function allows pick a random number from between
 * provided min and max number. Min inclusinve, max not inclusive.
 * picking the random number.
 * @param min - any min integer
 * @param max - any max integer
 * @return floating number
 */
export function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Min and max inclusive during the roll
 * @param min
 * @param max
 * @return integer
 */
export function randomRangeInclusive(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
