/**
 * by default Array.sort() sorts strings based on it's ASCII value.
 * ASCII value for 'A' => 65 and 'a' => 97, http://www.asciitable.com/
 * a to z = 97 to 122
 * A to Z = 65 to 90
 */
export function sortStrings(strs: Array<string>) {
  return strs.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
  });
}

// TEST
// let names = ['Ana', 'John', 'ana', 'john'];
// console.log(sortStrings(names)); //["Ana", "ana", "John", "john"]

// Note: if you want lower case letters come first in the sorted array then, we need to use the localeCompare method
export function sortStringsLocaleCompare(strs: Array<string>) {
  return strs.sort((a, b) => a.localeCompare(b));
}

//TEST:
// let names = ['Ana', 'John', 'ana', 'john'];
// console.log(sortStringsLocaleCompare(names)); // ["ana", "Ana", "john", "John"]
