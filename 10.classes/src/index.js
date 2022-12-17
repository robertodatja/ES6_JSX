const person1 = {
  name: "Roberto",
  walk() {
    console.log("walk");
  }
};

const person2 = {
  name: "Elson",
  walk() {
    console.log("walk");
  }
};
/*
There is a problem here.
The problem is that we have duplicated the implementation of the walk method
now this implementation is currently a single line of code 
but in a real world application this method can be five to ten lines of code or maybe more 
So,
if there is a bug in this method then we'll have to come back and fix it in all person objects 
that doesn't make sense right.
So when we have an object with at least one method  we need a blueprint to create objects of that type 
and that's when we use classes 
So let me show you how a class can help us solve this problem
*/

/*-------------------------------------------------------------------------
This constructor can take parameters so we can pass the name from the outside and initialize it here.
In this case,'this' always returns a reference to the current object 
So, we set the name property on that object to this name argument that we received from the outside 
Now we have a blueprint for creating personal objects.*/
class Person {
  constructor(name) {
    this.name = name;
  }
  //alt+downarrow moves code below
  walk() {
    console.log("walk");
  }
}

//Create an object | a person
const person = new Person("Berti");
console.log(person.name);

/*If tomorrow we find a bug in this method, there's a single place we need to modify 
So this is the benefit of using classes*/
