/* Javascript Assignment 5
   1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
   Cone with four decimal places using objects and classes.
   Create classes for volumes for each geometric shape which returns the
   output using the getVolume() method.
   eg- to get volume of cylinderlet
   obj= new Cylinder(radius,height);
   obj.getVolume();
   Formulas for volumes of the shapes-
   1) Cylinder- Volume = πr2h
   where r is the radius and h is the height of the cylinder.
   2)Sphere- Volume= 4/3π𝑟3
   where r is the radius
   3) Cone- Volume= πr2h/3
   where r is the radius and h is the height of the cone.                */

console.clear();
class Cylinder
{
    constructor(radius,height)
    {
        this.radius=radius;
        this.height=height;
    }

    getVolume()
    {
        console.log("Volume of Cylinder:");
        return (Math.PI*((this.radius)**2)*this.height).toFixed(4);
    }
}
class Sphere extends Cylinder
{
    constructor(radius)
    {
    super(radius);
    }
    getVolume()
    {
        console.log("Volume of Sphere:");
        return ((4/3)*Math.PI*(this.radius**3)).toFixed(4);
    }
}
class Cone extends Cylinder
{
    
    getVolume()
    {
        console.log("Volume of Cone:");
        return (Math.PI*((this.radius)**2)*(this.height/3)).toFixed(4);
    }
}


let cylinder1=new Cylinder(4,8);
console.log(cylinder1.getVolume());
console.log("******************************");

let sphere1=new Sphere(4,8);
console.log(sphere1.getVolume());
console.log("******************************");

let cone1=new Cone(4,8);
console.log(cone1.getVolume());