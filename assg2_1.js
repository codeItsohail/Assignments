//1. Write a Javascript function to check whether a triangle is equilateral,
//   isosceles or scalene
let s1=1;
let s2=2;
let s3=3;
function checkTriangle(s1,s2,s3)
{
if(s1===s2 && s2===s3)
console.log("Equilateral Triangle");
else if(s1===s2 || s2===s3 || s1===s3)
console.log("Isosceles Triangle");
else
console.log("Scalene Triangle");
}
checkTriangle(s1,s2,s3);