import { log } from './utils';
import * as fib from './fibonacci';
import * as fromArray from './array';
import * as fromStack from './stack';
import * as fromQueue from './queue';
import * as list from './linkedLists';
import * as fromSet from './set';
import * as fromDictionary from './dictionaries';

const map = new fromDictionary.Dictionary();
map.set('name', 'Dilip Sunuwar');
map.set('mulicha', 'Mulicha Sunuwar');
map.set('user', 'User Dilip');
// log(map.table);

// // test forEach
// log(
// 	map.forEach((key, value) => {
// 		console.log(`key: ${key}, value: ${value}`);
// 		return false;
// 	})
// );

log(map.toString());
