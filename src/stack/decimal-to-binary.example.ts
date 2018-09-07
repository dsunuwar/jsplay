import { Stack } from './array.stack';

/**
 * Given a decimal number it should convert it to binary representation of the number
 */
export function decimalToBinary(num: number): string {
  let remainderStack = new Stack();
  let binary = '';

  while (num > 0) {
    let remainder = Math.floor(num % 2);
    remainderStack.push(remainder);
    num = Math.floor(num / 2);
  }

  while (!remainderStack.isEmpty()) {
    binary += remainderStack.pop().toString();
  }
  return binary;
}

// TEST
decimalToBinary(10); // 1010
