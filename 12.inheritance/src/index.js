class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}
//Create an object called person
const person = new Person("Berti");

/*Let's say we want to define a teacher class 
However all teachers should be able to walk because they're all persons 
We don't want to duplicate this walk method in the person and teacher classes
So how can we solve this problem?
Basically there are two solutions here we can use inheritance or composition
the explanation of both these approaches is beyond the scope of this course*/

/* So,we can have this teacher class inherit from the person class 
and this means it will inherit all the methods defined in this person class 
how can we do it?  Teacher extends Person */
class Teacher extends Person {
  teach() {
    console.log("teach");
  }
}
//Create an object called teacher
const teacher = new Teacher("Roberto");
console.log(teacher.name);

//-----------------------------
/*Imagine when creating a teacher apart from the name, we need to pass their degree 
So, here in the teacher class we need to add a constructor 
this constructor should take two parameters
one is name which we need to pass to the person class  and I will show you that in a second 
the other parameter is the degree
-
Because we added a custom constructor here we need to call the constructor of the person class 
If you don't do that we'll get an error: missing super call in constructor 
Whenever we had a constructor in a child class we need to call the constructor of its parent class
So here,
in the constructor we have this special keyword super that references the parent class 
so we call it just like a method and you can see here we have
the name parameter so we pass this name argument that we receive here 
so this will initialize the name property 
 super(name);
next we need to initialize the degree property 
so this that degree will set it to this degree argument 
this.degree = degree;
-
Whenever we create a component we should have that component 
extend the base component that is defined in react 
because that base component in react has a bunch of methods that we need in our components 
*/
class Lecturer extends Person {
  constructor(name, degree) {
    super(name); //initialize the name property, if don't will get error
    this.degree = degree; //initialize the degree property
  }
  explain() {
    console.log("explain");
  }
}
//Create an object called lecturer
const lecturer = new Lecturer("Roby", "MSc");
console.log(lecturer.name);
console.log(lecturer.degree);
