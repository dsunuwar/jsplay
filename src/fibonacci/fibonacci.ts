function fibonacci(n) {
  let fibonacci: number[] = [];
  fibonacci[1] = 1;
  fibonacci[2] = 1;

  for (let i = 3; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}
function isFibonacci(n, callback) {
  let fibonacciSerries = callback(n);
  console.log('Serries of', n, ' => 0', fibonacciSerries.join(', '));
  return fibonacciSerries.indexOf(n) > -1;
}

// console.log(isFibonacci(13, fibonacci));

export { fibonacci, isFibonacci };
