/*3. Write a program to find whether a given number is special number or
     not-
     If the sum of the factorial of digits of a number (N) is equal to the
     number itself, the number (N) is called a special number.
     eg- 145 is a special number 
     Logic- 1! + 4! + 5!= 1+24+120 i.e 14    */

    console.clear();
    let num=3;
    function factorial(n)
    {
        let fact=1;
        for(let i=2;i<=n;i++)
            fact*=i;
        return fact;
    }
    function checkSpecialno(num)
    {
    let sum=0,n=num,rem;
    while(n>0)
    {
        rem=n%10;
        sum+=factorial(rem);
        n=Math.floor(n/10);
    }
    if(num===sum)
    console.log("Is special no");
    else
    console.log("Not a special no");
    }
    checkSpecialno(num);