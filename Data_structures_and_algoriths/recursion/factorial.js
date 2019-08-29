//non-recursive

function factorial(num){
    let total= 1;
    for(let i = num; i > 0; i--){
        total *= i;
    }
    return total

}
console.log(factorial(4))


//recursive
function factorialNum(num){
    if(num === 1) return 1;
    return num * factorialNum(num - 1)
}

console.log(factorialNum(4))


//POWER SOLUTION
// Write a function called power which accepts a base and an 
// exponent. The function should return the power of the base 
// to the exponent. This function should mimic the functionality 
// of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}


//FACTORIAL SOLUTION
// Write a function called productOfArray which takes in an 
// array of numbers and returns the product of them all.



function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}


//PRODUCT OF ARRAY SOLUTION
// Write a function called productOfArray which takes in 
// an array of numbers and returns the product of them all.

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}


//RECURSIVE RANGE SOLUTION
// Write a function called recursiveRange which 
// accepts a number and adds up all the numbers 
// from 0 to the number passed to the function 

function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}


//FIBONACCI SOLUTION
// Write a recursive function called fib which accepts a number and 
// returns the nth number in the Fibonacci sequence. Recall that the
//  Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
//  which starts with 1 and 1, and where every number thereafter is 
//  equal to the sum of the previous two numbers.

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

//fib #2

function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }