/*2) Write a javascript function find_largest to return the nth largest number
     in an arrayeg-
     given an array of integers- [3,45,6,7,23,5,7,8]
     find_largest(3) will return third largest number from the above array -
     which is 8.                   */

console.clear();
let arr=[3,45,6,7,23,5,7,8]
find_largest=(n)=>
{
    let temp=[];
    arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]!=arr[i+1])
        temp.push(arr[i]);
    }
    temp.push(arr[arr.length-1]);
    console.log(temp);
    console.log(temp[n-1]);
}
find_largest(3);