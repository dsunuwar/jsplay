/**
 * f(n) = (n) * (n-1) * (n-2) * (n-3) * ... * 1
 
 * let n = 4
 * f(4) = 4 * f(4 - 1)
 * f(3) = 4 * 3 * f(3 - 1)
 * f(2) = 4 * 3 * 2 * f(2 - 1)
 * f(1) = 4 * 3 * 2 * 1
 */

export function recursiveFactorial(n) {
	let fact = 1;

	// base case
	if (n === 0 || n === 1) return fact;

	return n * recursiveFactorial(n - 1);
}

/**
 * TEST:
 * log(recursion.recursiveFactorial(4));
 */
