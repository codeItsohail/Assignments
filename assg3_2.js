/* 2. Write a program to find whether a given number is armstrong number or
   not-
   The Armstrong number is a number that is equal to the sum of cubes of
   its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
   numbers. Let's try to understand why 153 is an Armstrong number.   */

console.clear();
let num=153;
function checkArmstrong(num)
{
    let sum=0,n=num,rem;
    while(n>0)
    {
        rem=n%10;
        sum+=(rem*rem*rem);
        n=Math.floor(n/10);
    }
    if(num===sum)
    console.log("Is Armstrong no");
    else
    console.log("Not a Armstrong no");
}
checkArmstrong(num);