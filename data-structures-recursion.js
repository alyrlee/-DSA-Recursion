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

/* ======== 2. Power Calculator =================
=============================================== */

/* ======== 2. Power Calculator =================
=============================================== */

/* ======== 2. Power Calculator =================
=============================================== */

/* ======== 2. Power Calculator =================
=============================================== */

/* ======== 2. Power Calculator =================
=============================================== */

/* ======== 2. Power Calculator =================
=============================================== */

/* ======== 2. Power Calculator =================
=============================================== */

/* ======== 2. Power Calculator =================
=============================================== */

/* ======== 2. Power Calculator =================
=============================================== */

/* ======== 2. Power Calculator =================
=============================================== */

/* ======== 2. Power Calculator =================
=============================================== */
