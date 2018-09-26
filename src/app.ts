import { log, isFibonacci } from './utils';
import * as fib from './fibonacci';
import * as fromArray from './array';
import * as fromStack from './stack';
import * as fromQueue from './queue';
import * as list from './linkedLists';
import * as fromSet from './set';
import * as fromDictionary from './dictionaries';
import * as fromHash from './hashTable';
import * as recur from './recursion';

let fibonacci = recur.fibMemoization();
log(fibonacci(8));
