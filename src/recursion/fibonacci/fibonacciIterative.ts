import { isFibonacci } from '../../utils';

export function fibIterative(n): number[] {
	let fib: number[] = [];
	fib[1] = 1;
	fib[2] = 1;

	for (let i = 3; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib;
}
/**
 * TEST
 * isFibonacci(5, iterative);
 */
