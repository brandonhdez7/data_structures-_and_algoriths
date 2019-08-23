// timing my code

// calculate the sum of all numbers from 1 up 
// to (an including number) some number n

// #1
function addUp(n){
    let total = 0;
    for(let i = 1;i <= n; i++){
        total += i;
    }
    return total;
}
console.log(addUp(6))

// #2
function addUp(n){
    return n * (n + 1) / 2;
}
console.log(addUp(6))


// var t1 = performance.now();
// addUp(1000000000);
// var t2 = performance.now();
// console.log(`time elapsed: ${(t2- t1) / 1000} seconds.`)




