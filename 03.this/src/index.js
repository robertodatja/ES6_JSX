const person = {
  name: "Roberto",
  walk() {
    console.log(this);
  }
};

/*-------------------------------------------------------------
'this' keyword in JavaScript behaves differently from other programming languages 
the value of 'this' is determined by how a function is called*/

/*1 if we call a function as a method in an object, 
'this' will always return a reference to that object*/
//Example:
person.walk(); //returns reference to the person's object
console.log(walk);

/*2 if we call a function as a standalone object or outside of an object, 
'this' by default returns a reference to the global object which is the window object 
and if the strict mode is enabled it returns undefined */
//Example:
const WALK = person.walk; //Not calling the walk(). Just getting a reference to this function, so WALK is now a function
WALK(); // returns undefined
console.log(WALK);
