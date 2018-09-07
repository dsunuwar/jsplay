import { log } from './utils';
import * as fib from './fibonacci';
import * as fromArray from './array';
import * as fromStack from './stack';
import * as fromQueue from './queue';

// syntax for importing default export
import LinkedList from './linkedLists';

const linkedList = new LinkedList();

// test adding at the end
linkedList.push('Dilip');
linkedList.push('Mulicha');
linkedList.push('Sunuwar');
linkedList.insert('Thea', 3);

// test removing element by index
log(linkedList.toString());
