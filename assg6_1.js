/*1) Perform the following operations to provide the implementation for a
     Rectangle class. The operations are:
     1. Add an area() method to the Rectangle class.
     2. Create a Square class that satisfies the following conditions:
     ○ It is a subclass of Rectangle.
     ○ It contains a constructor and no other methods.
     ○ It can use the Rectangle class' area method to print the area
     of a Square object.                         */

console.clear();
class Rectangle
{
    constructor(length,breadth)
    {
        this.length=length;
        this.breadth=breadth;
    }

    Area()
    {
        return this.length*this.breadth;
    }
}
class Square extends Rectangle
{
    constructor(length,breadth)
    {
        super(length,breadth);
    }
}

let r1=new Rectangle(3,4);
console.log("Area of rectangle=",r1.Area());

let s1=new Square(4,4)
console.log("Area of square=",s1.Area());
