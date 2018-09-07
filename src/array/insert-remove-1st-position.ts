/**
 * In javascript, unshift inserts an element in the first position.
 * Behind the scene, copying elements to make space at the first position is done as below
 */

export function insertFirstPosition(value, array) {
  // move all the element one position towards end
  for (let i = array.length; i >= 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = value;
  return array;
}

export function removeFirstPosition(array) {
  const reindex = function(array) {
    // reindex to exclude undefined item at the end of the array
    let newArray: any = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== undefined) newArray.push(array[i]);
    }
    return newArray;
  };

  // move all element one position towards start
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  return reindex(array);
}

// TEST:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(insertFirstPosition(99, arr));
