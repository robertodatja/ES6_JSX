const person1 = {
  talk() {
    console.log("reference to", this);
  }
};
person1.talk();

//--------------
const person2 = {
  talk() {
    //we'll execute the callback function after this delay one second (1000 milliseconds )
    setTimeout(function () {
      console.log("reference to ", this);
    }, 1000);
  }
};
person2.talk(); /*we get the window object not the person2 object 
the reason this happened is because here this callback function is not part of any objects 
so it's not like the talk() method in the person object. it's a stand-alone function 
and as I told you before when we call a function as a standalone function outside of an object 
by default this returns the window object 
now in the previous example instead of the window object we got undefined 
because in that particular case when we got a reference to a method in an object 
the strict mode kicked in and returned undefined instead of the window object 
but in this particular case 
in case of callback functions the streak mode does not overwrite this behavior 
so 'this' returns a reference to the window object 
*/

/*-----------------
So how can we solve this problem in other words 
how can we have a reference to the person object inside of this callback function 
well here's one solution:
so in the old days we used to, declare a variable call it that or self and set it to this 
var self = this;
so we set self variable outside of this callback function 
and now we can use self inside of this callback function to get access to the person object */
const person3 = {
  talk() {
    var self = this;
    setTimeout(function () {
      console.log("reference to ", self);
    }, 1000);
  }
};
person3.talk();
//Great! We've a reference to the person3 object so this is the pattern that we used in the old days

/*/*-----------------
Now with arrow functions we no longer have to do this because arrow functions don't rebind 'this' 
in other words if we change this callback function to an arrow function, it will inherit that 'this' keyword */
const person4 = {
  talk() {
    var self = this;
    setTimeout(() => {
      console.log("reference to ", self);
    }, 1000);
  }
};
person4.talk();
/*We see this returns a reference to the person4 object 
In other words here in this callback function because we have used the arrow function syntax 
'this' is not reset, instead it inherits 'this' in the context in which this code is defined  
Arrow functions don't rebind the "this" keyword
*/
