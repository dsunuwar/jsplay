import { Stack } from './array.stack';

/**
 * Given a decimal number it should convert it to binary representation of the number
 */
export function convertToBase(decimalNum: number, base): string {
  let remainderStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {1}
  let num = decimalNum;
  let baseString = '';

  if (base >= 2 && base <= 36) {
    while (num > 0) {
      let remainder = Math.floor(num % base);
      remainderStack.push(remainder);
      num = Math.floor(num / base);
    }

    while (!remainderStack.isEmpty()) {
      baseString += digits[remainderStack.pop()];
    }
  }
  return baseString;
}

// TEST
// log(fromStack.convertToBase(100345, 2));     //11000011111111001
// log(fromStack.convertToBase(100345, 8));     //303771
// log(fromStack.convertToBase(100345, 16));    //187F9
// log(fromStack.convertToBase(100345, 35));    //2BW0

/**
 * {1}: In the conversion from decimal to binary, the remainders will be 0 or 1;
 * in the conversion from decimal to octagonal, the remainders will be from 0 to 8;
 * and in the conversion from decimal to hexadecimal, the remainders can be 0 to 9
 * plus the letters A to F (values 10 to 15). So, starting at base 11, each letter of the
 * alphabet will represent its base. The letter A represents base 11, B represents
 * base 12, and so on.
 */
