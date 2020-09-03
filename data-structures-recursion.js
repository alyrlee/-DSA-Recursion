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

const fibonacciSequence = function(num){
    //base
 if (num <= 0) {
    return "Please enter a number greater than 0";
  }
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 1;
  }
  return fibonacciSequence(num - 1) + fibonacciSequence(num - 2);
};

 console.log(fibonacciSequence(8));

/* ======== 7. Factorial =================
=============================================== */

factorial=(n)=>{
  if(n === 1){
    return 1
  }
  return n * factorial(n-1)
}
console.log(factorial(5))

/* ======== 8. Find a way out of the maze ====
=============================================== */

/*==== not sure how to solve =====*/

/* ======== 9. Find ALL the ways out of the maze =
=============================================== */

/*==== not sure how to solve =====*/

/* ======== 10. Anagrams =================
=============================================== */

 function permut(string) {
  if (string.length < 2) return string; 

  var permutations = []; 
  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    if (string.indexOf(char) != i) 
      continue; 

    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

    for (var subPermutation of permut(remainingString))
      permutations.push(char + subPermutation)
  }
  return permutations;
}
console.log(permut('east'));

/* ======== 11. Organization Chart =================
Write a recursive function that prints the following organization chart. 
Your output should be as shown below with proper indentation to show the hierarchy. 
You may store the org chart in an object and send that as an input to your program.
=============================================== */

console.log('org chart')
const org = [
{id: 'Zuckerberg', boss: null},
  {id: 'Schroepfer', boss: 'Zuckerberg'},
  {id: 'Schrage', boss: 'Zuckerberg'},
  {id: 'Sandberg', boss: 'Zuckerberg'},
  {id: 'Bosworth', boss:'Schroepfer' },
  {id: 'Zhao', boss:'Schroepfer' },
  {id: 'Steve', boss:'Bosworth' },
  {id: 'Kyle', boss:'Bosworth' },
  {id: 'Andra', boss:'Bosworth' },
  {id: 'Richie', boss: 'Zhao'},
  {id: 'Sofia', boss: 'Zhao'},
  {id: 'Jen', boss: 'Zhao'},
  {id: 'VanDyck', boss:'Schrage' },
  {id: 'Swain', boss:'Schrage' },
  {id: 'Sabrina', boss:'VanDyck' },
  {id: 'Michelle', boss:'VanDyck' },
  {id: 'Josh', boss:'VanDyck' },
  {id: 'Blanch', boss:'Swain' },
  {id: 'Tom', boss:'Swain' },
  {id: 'Joe', boss:'Swain' },
  {id: 'Goler', boss:'Sandberg' },
  {id: 'Hernandez', boss:'Sandberg' },
  {id: 'Moissinac', boss:'Sandberg' },
  {id: 'Kelley', boss:'Sandberg' },
  {id: 'Eddie', boss:'Goler' },
  {id: 'Julie', boss:'Goler' },
  {id: 'Annie', boss:'Goler' },
  {id: 'Rowi', boss:'Hernandez'},
  {id: 'Inga', boss:'Hernandez'},
  {id: 'Morgan', boss:'Hernandez'},
  {id: 'Amy', boss:'Moissinac'},
  {id: 'Chuck', boss:'Moissinac'},
  {id: 'Vinni', boss:'Moissinac'},
  {id: 'Eric', boss:'Kelley'},
  {id: 'Ana', boss:'Kelley'},
  {id: 'Wes', boss:'Kelley'},
];

function organize(org, boss) {
  let node = {};

  org
    .filter(item => item.boss === boss)
    .forEach(item => node[item.id] = organize(org, item.id));
  return node;  
}

console.log(JSON.stringify(organize(org, null)));

/* ======== 12. Binary Representation =================
Write a recursive function that prints out the binary representation of a given number.
For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. 
Note that the binary representation of 0 should be 0.
=============================================== */

const binaryRep = function(n) {
   if (n === 0) {
  return '0';
}  
const dividedNum = Math.floor(n/2);
  const remainder = n % 2;
  if (dividedNum === 0) {
      return `${remainder}`;
  }
  return binaryRep(dividedNum) + remainder.toString();
};

console.log(binaryRep(25));


