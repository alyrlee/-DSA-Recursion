//1. Counting Sheep
//Write a recursive function that counts how many sheep jump over the fence. 
//Your program should take a number as input. That number should be the number of sheep you have. 
//The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.


What is the input to the program? A number (3)
What is the output of the program? Total number of sheep. 
  Output:
  3: Another sheep jumps over the fence
  2: Another sheep jumps over the fence
  1: Another sheep jumps over the fence
  All sheep jumped over the fence
What is the input to each recursive call? To implement this iteratively, you would simply use a loop to go through each number in the list and add them.
What is the output of each recursive call?  Make the list shorter until we reach the point where we have only o item (sheep) in the list
  
Code example:

console.log('Counting Sheep')
let num = 4;
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

//2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. 
// The function returns the value of the base raised to the power of the exponent.
// Use only exponents greater than or equal to 0 (positive numbers)


