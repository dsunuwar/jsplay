import { isFibonacci } from '../../utils';

export function fibRecursive(n: number) {
	// base cases
	if (n < 1) return 0;
	if (n <= 2) return 1;
	return fibRecursive(n - 1) + fibRecursive(n - 2);
}

/** BASE CASES:
 * let n = 5
 * 0 1 1 2 3 5
 * fib number at position 0 is 0
 * fib number at position 1 or 2 is 1.
 * fib number at position n, where n > 2 is, fib(n-1) + fib(n-2)
 */

/**
 * TEST
 * isFibonacci(5, fibonacciRecursive);
 */
