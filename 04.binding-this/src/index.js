const person = {
  name: "Roberto",
  walk() {
    console.log(this);
  }
};

person.walk(); //returns reference to the person object
const WALK = person.walk.bind(person);
WALK(); //returns undefined

/* 
When we call a function as a standalone function outside of an object 
'this' by default returns a reference to the global object which is the window object
and if the strict mode is enabled it returns undefined.
--
I'm gonna show you how to fix this problem, 
so no matter how we call the walk function 'this' will always return a reference to the person object 
so one thing that might be new to you is that in JavaScriptfunctions are objects 
//person.walk is a function, so it is an object
//person.walk.members
-
bind(argument) method binds a function to an object 
what we pass here as an argument will determine the value of 'this' in this case 
*/

/*Example:
If I pass the person object as an argument 
the bind method will return a new instance of the walk function 
and set 'this' to point to the person object */
const WALK = person.walk.bind(person);
WALK(); //return reference to the person object

/*RECAP----------------------------------------------------------------------------
Functions in JavaScript are objects, they have properties and methods we can use. 
One of the important methods that you see in a lot of react applications is the bind() 
With the bind() we can set the value of 'this' permanently 
so when we call bind() on the walk function we get a new WALK function 
and in that WALK function the value of 'this' is based on the argument that we pass to the bind(argument)
-
//Example:
so because here we're passing the person object as an argument 
we'll get a WALK function that is always attached to this person object 
and that's why when we call it here without a reference to the person object 
we'll still see the person object on the console.
*/
