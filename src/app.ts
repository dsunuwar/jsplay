import { log } from './utils';
import * as fib from './fibonacci';
import * as fromArray from './array';
import * as fromStack from './stack';
import * as fromQueue from './queue';

const kayak = 'kayak';
const level = 'level';
const wasit = 'Was it a car or a cat i saw';
const pet = 'Step on no pets';

log(`'${kayak}' is a palindrome, ${fromQueue.isPalindrome(kayak)}`);
log(`'${level}' is a palindrome, ${fromQueue.isPalindrome(level)}`);
log(`'${wasit}' is a palindrome, ${fromQueue.isPalindrome(wasit)}`);
log(`'${pet}' is a palindrome, ${fromQueue.isPalindrome(pet)}`);
