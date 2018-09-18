import { log } from './utils';
import * as fib from './fibonacci';
import * as fromArray from './array';
import * as fromStack from './stack';
import * as fromQueue from './queue';
import * as list from './linkedLists';
import * as fromSet from './set';
import * as fromDictionary from './dictionaries';
import * as fromHash from './hashTable';

let hash = new fromHash.LinearProbing();
// populate Hash Table
hash.put('Ygritte', 'ygritte@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Jack', 'jack@email.com');
hash.put('Jasmine', 'jasmine@email.com');
hash.put('Jake', 'jake@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.put('Athelstan', 'athelstan@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Aethelwulf', 'aethelwulf@email.com');
hash.put('Sargeras', 'sargeras@email.com');

log(hash.table);
log(hash.remove('Athelstan'));
log(hash.table);
log(hash.remove('Sue'));
log(hash.table);
// Hash locations for each names
// 4 - Ygritte
// 5 - Jonathan *
// 5 - Jamie    *
// 7 - Jack ..
// 8 - Jasmine
// 9 - Jake
// 10 - Nathan
// 7 - Athelstan    ..
// 5 - Sue  *
// 5 - Aethelwulf   *
// 10 - Sargeras

// Check
