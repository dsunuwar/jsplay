export function factorialIterative(num: number) {
	let total = 1;
	if (num < 0) {
		// no need to compute factorial for 0
		return undefined;
	} else if (num === 0 || num === 1) {
		// factorial of 0 or 1 is 1;
		return total;
	} else {
		// do factorial
		for (let n = num; n > 1; n--) {
			console.log(total);
			total *= n;
		}
	}
	return total;
}

/**
 * TEST
let fact = recursion.factorialIterative(4);
log(fact);
 */
