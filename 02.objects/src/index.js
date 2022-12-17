//An object is a collection {} key-value pairs
const person = {
  name: "Roberto",
  //walk: function() {}
  //When we have a function inside of an object
  //we refer to that function as a method
  //So walk is a method in the person object
  walk() {},
  talk() {},
};
//So we have an object called person with 3 members


//ACCESS MEMBERS-----------------------------------------------
//FirstWay  .  
person.name;                 console.log(person.name);
person.walk();               console.log(person.walk());
//SecondWay []  
person.["name"];             console.log(person.["name"]);
person.["name"] = "Elson";   console.log(person.["name"]);


/*----------------------
We use []  
when we don't know ahead of time what property or method we're going to access 
imagine this target member is an input field on a form
Depending on what the user types in that input field 
then dynamically we will access a property or a method in an object */
const targetMember = "name"; 
person[targetMember.value] = "Myrvet";

/*We use . 
when we know ahead of time what property or method we're going to access */
person.name = "Myrvet";