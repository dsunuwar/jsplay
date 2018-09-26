/**
 * it uses optimization technique by storing
 * fib number that's already being generated, so next time
 * when function start to return values, it's not re-calculated.
 */
export function fibMemoization() {
	const memo = [0, 1];
	const fibonacci = n => {
		if (n < 1) return 0;
		if (n <= 2) return 1;
		console.log(memo);
		if (memo[n]) {
			console.log(`${memo[n]}, found in cache`);
			return memo[n];
		}
		return (memo[n] = fibonacci(n - 1) + fibonacci(n - 2));
	};
	return fibonacci;
}

/** TEST:
 * let fibonacci = recur.fibMemoization();
	log(fibonacci(8));
 */

/**
 * Note:
 * Memoization technique is still not faster than iterative technique.
 * It's only some what faster than regular recursion technique
 */
