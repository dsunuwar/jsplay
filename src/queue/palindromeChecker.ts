/**
 * PROBLEM:
 * A plindrome is a word, pharase, number or other sequence of characters
 * which reads the same backward as forward, such as madam or racecar.
 *
 * This function takes a string and checks if it's a palidrome.
 */
import { Deque } from './deque';

export function isPalindrome(str: string): boolean {
  if (!str) return false;

  let isEqual = true;
  let firstChar, lastChar;
  const deque = new Deque();

  // split and join removes spaces between words and creates a single sring
  const strCaseNormal = str
    .toLocaleLowerCase()
    .split(' ')
    .join('');

  for (let i = 0; i < strCaseNormal.length; i++) {
    //same as enqueue
    deque.addBack(strCaseNormal.charAt(i));
  }

  // if only one item left in deque, then its a palindrome
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}

/**
 * SOLUTION: The easiest way is reversing the string and comparing it with
 * the original string. If both strings are equal, then we have a palindrome.
 * But we will implement solution here using a special Queue called Deque.
 */

/**
 * TEST:
 * isPalindrome('kayak')
 * isPalindrome('level')
 * isPalindrome('Was it a car or a cat i saw')
 * isPalindrome('Step on no pets')
 */
