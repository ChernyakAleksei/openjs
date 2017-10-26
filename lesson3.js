// Find numbers in first arr  which aren't present in second arr
const arr1 = [1, 3, 2, 3];
const arr2 = [3, 4, 5];

const uniqRender = (firstArr, secondArr) => {
  const buffer = [];
  firstArr.forEach((item) => {
    if (!secondArr.includes(item)) {
      buffer.push(item);
    }
  });
  return buffer;
};

const firstRender = uniqRender(arr1, arr2);

console.log(firstRender);

// fibonachi recurcive

const fib = n =>  n <= 1 ? n : fib(n - 1) + fib(n - 2);

console.log(fib(7));

// fibonachi loop

const fibLoop = (n) => {
  let numA = 1;
  let numB = 1;
  for (let i = 3; i <= n; i++) {
    const numC = numA + numB;
    numA = numB;
    numB = numC;
  }
  return numB;
};

console.log(fibLoop(7));

// factorial recurcive

const factorial = n => n ? n * factorial(n - 1) : 1;

console.log(factorial(20));

// factorial loop

const facLoop = (num) => {
  let sum = 1;
  for (let i = 2; i <= num; i++) {
    sum *= i;
  }
  return sum;
};

console.log(facLoop(20));
