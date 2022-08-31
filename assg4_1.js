/*Javascript Assignment 4
  This assignment will help you interpret mathematical relationships both
  algebraically and geometrically.
  Create a function that takes a number (step) as an argument and returns the
  number of matchsticks in that step. See step 1, 2 and 3 in the image above.
  Take input from the user in the function parameter and return the output
  using the return statement.
  examples
  matchHouses(1) ➞ 6
  matchHouses(4) ➞ 21
  matchHouses(87) ➞ 436                   */

console.clear();
let step=87;
no_of_Matchsticks=(step)=>
{
    if(step===1)
       return 6;
    else
    {
        return step*6-(step-1);
    }
}
console.log(no_of_Matchsticks(step));