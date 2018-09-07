export function sortByAge(collection) {
  return collection.sort((a, b) => a.age - b.age);
}

export function sortByName(collection) {
  return collection.sort();
}

// the compare fuction above can be written as below
function comparePerson(a, b) {
  if (a.age > b.age) return 1;
  if (a.age < b.age) return -1;
  return 0;
}

export function sortWithCustomCompare(collection, compare) {
  collection.sort(compare);
}

// TEST
// let friends = [{ name: 'John', age: 30 }, { name: 'Ana', age: 20 }, { name: 'Chris', age: 25 }];
// sortByAge(friends);
// sortWithCustomCompare(friends, comparePerson);
