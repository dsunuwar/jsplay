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
log(set);
log(set.add(1));
log(set.add(2));
log(set.add(3));
log(set.add(4));
