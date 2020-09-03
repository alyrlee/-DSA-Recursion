/* ==========================================
For each of these exercises, without using any code, 
you are expected to identify the following:
    What is the input to the program?
    What is the output of the program?
    What is the input to each recursive call?
    What is the output of each recursive call?
=============================================== */

/* ======== 1. Counting Sheep =================
1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. That number should be the number of sheep you have. 
The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.
=============================================== */
  
console.log('Counting Sheep')
let num = 3;
function sheep(num){
  //base
  if(num == 0){
    console.log("All the sheep jumped over the fence");
  }
  //general
  else{
  console.log(`${num}:Sheep jumped over the fence`);
  sheep(num - 1);
  }
}

sheep(num);

/* ======== 2. Power Calculator =================
Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. 
The function returns the value of the base raised to the power of the exponent.
Use only exponents greater than or equal to 0 (positive numbers)
=============================================== */

const powerCalculator = function(base, exponent){
//base
if(exponent < 0){
   return "exponent should be >= 0";
}
if (exponent === 0) {
  return 1;
}

return base * powerCalculator(base, exponent - 1);
};

console.log(`${powerCalculator(10, 2)}`)


/* ======== 3. Reverse String =================
Write a function that reverses a string. 
Take a string as input, reverse the string, and return the new string.
=============================================== */

function reverseString(str) {
if (str.length === 1) {
  return str;
}
return str.slice(-1) + reverseString(str.slice(0,-1));
};

let str = "Hello";
console.log(reverseString(str));

/* ======== 4. nth Triangular Number =================
Calculate the nth triangular number.
A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots 
on a side, and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
=============================================== */

const nthTriangle = function(numDots) {
//base
  if (numDots === 1) {
    return numDots;
  }

return numDots + nthTriangle(numDots-1);
 };

 console.log(nthTriangle(6))

/* ======== 5. String Splitter =================
Write a recursive function that splits a string based on a separator (similar to String.prototype.split).
Don't use JS array's split function to solve this problem.
=============================================== */

console.log('String Splitter')

function stringSplitter(){

}

/* ======== 6. Fibonacci =================
=============================================== */

/* ======== 7. Factorial =================
=============================================== */

/* ======== 8. Find a way out of the maze ====
=============================================== */

/* ======== 9. Find ALL the ways out of the maze =
=============================================== */

/* ======== 10. Anagrams =================
=============================================== */

/* ======== 11. Organization Chart =================
=============================================== */

/* ======== 12. Binary Representation =================
=============================================== */


