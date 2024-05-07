/*
 * FizzBuzz
 * 
 * In the range of numbers 1-100, print 'Fizz' for any number divisible by 3 and print 'Buzz' for any number divisible by 5.
 */

for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}