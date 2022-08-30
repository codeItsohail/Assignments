/*4. Write a program to find the factorial of all prime numbers between a
     given range . Range will be passed as 2 values in the function
     parameters. eg- if it is needed to find the values for numbers 1-100, then
     function declaration can look like - function prime(1,100).        */
function factorial(x)
{
    let fact=1;
    for(let i=2;i<=x;i++)
        fact*=i;
    return fact;
}
let finalAnswer=(num1,num2)=>
{
    let primeNos=[];
    for(let i=num1;i<num2;i++)
    {
         if(i===1)
         continue;
         if(i===2 || i===3)
         {
         primeNos.push(i);
         continue;
         }
         if(i%2===0)
         continue;
         let flag=true;
         for(let j=3;j<i;j+=2)
         {
            if((i%j)===0)
            flag=false;
         }
         if(flag)
         primeNos.push(i);
    }
    for(let x of primeNos)
    {
        console.log(factorial(x));
    }
}
finalAnswer(1,100);
