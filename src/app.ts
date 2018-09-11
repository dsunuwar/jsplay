import { log } from './utils';
import * as fib from './fibonacci';
import * as fromArray from './array';
import * as fromStack from './stack';
import * as fromQueue from './queue';
import * as list from './linkedLists';
import * as fromSet from './set';

// const doublyLinkedList = new list.DoublyLinkedList();
// doublyLinkedList.insert('Dilip', 0);
// doublyLinkedList.insert('Sunuwar', 1);
// log(doublyLinkedList);

let set = new fromSet.Set();
console.log('set1');

log(set.add(1));
log(set.add(2));
log(set.add(3));
log(set.add(4));
log(set.values());

let set2 = new fromSet.Set();
console.log('set2');
// log(set2.add(0));
log(set2.add(1));
log(set2.add(2));
log(set2.add(3));
log(set2.add(4));
// log(set2.add(5));
// log(set2.add(6));
log(set2.values());

console.log('subset:');
log(set.isSubsetOf(set2));
