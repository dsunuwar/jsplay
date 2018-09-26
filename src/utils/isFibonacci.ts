export function isFibonacci(n, cb) {
	const fibSerries: number[] = cb(n);
	return fibSerries.indexOf(n) > -1;
}
