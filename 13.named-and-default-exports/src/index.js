//import { Lecturer } from "./lecturer";
import Lecturer, { promote } from "./lecturer";
import React, { Component } from "react";

const lecturer = new Lecturer("Roby", "MSc");
lecturer.explain();

/*--------------------------------------------------------------------------------------
In the last lecture I told you that the objects that we define in a module are private by default 
so they are not accessible from the outside unless we export them 
let's explore this topic in a bit more detail 
so here in our lecturer module or lecturer.js I'm gonna define a function
function promote() {};
back in index.js, so at the top you're importing the lecturer class from the lecturer module 
-
temporarily I'm gonna delete this press control space 
import { } from "./lecturer";
so with the intellisense you can see here { } 
we have the lecturer class that is exported from the lecturer module 
but we don't see our promote function right 
-
so back to lecturer.js, if we export this function
export function promote() {};
So now we can import it in index.js, so save the changes
-
back to index.js, once again control space
import { } from "./lecturer"; 
look { } we have the promote function and the lecturer class 
so we can export one or more objects from a given module 
these are what we call named exports 
-
so what is exported 
has a name like the promote function or the lecturer class 
now apart from named exports we also have the concept of default export 
and that is the main object that is exported from a module 
typically we use default exports if there is only a single object that we want to export 
-
let me show you what I mean 
so back to lecturer.js let me temporarily comment this out 
//export function promote() {}
so you can see currently we are exporting only a single object that is the lecturer class 
right now you might say:
What a class is not an object 
well in JavaScript technically a class is an object 
because JavaScript classes are syntactic sugar over constructor functions 
and functions as I told you before our objects 
so a class is technically an object in JavaScript 
now that aside here we're exporting a single object 
-
now we can add the default keyword here lecturer.js
export default class Lecturer extends Person {
and that means
this lecturer object is the main or the default thing that we're exporting from this module now with this
-
back to index.js we don't need the curly braces anymore 
we use these braces only to import the names exports 
In this case lecturer is the default export, so we import it like this:
import Lecturer from "./lecturer";
-
save the changes you can see our application still working
we've got the explain message on the console 
-----------------------
so let me quickly recap 
with default exports we import them like this import whatever from this module: 
Default  -> import ... from '';
we named exports we import them like this we put them in curly braces okay: 
Named -> import {...} from '';
now it is also possible that a module has a default export as well as a bunch of named exports 
react module is an example of that and I'm going to show you that in a second 
-
so back to our lecturer module (lecturer.js)
here we have a default export 
but I'm also gonna export this function: 
export function promote() {}
so we have a named export as well as the default export right 
save the changes 
-
back in index.js 
so on the top we are importing the default export, 
also we add curly braces control space look we have the promote function this is a named export 
we can import that {promote} as well: 
import Lecturer, {promote} from "./lecturer";
now why does this matter this is a pattern that you see a lot in react applications 
-
so as you will see in the following sections on top of almost every file in a react application 
we have an import statement like this:
import React, {Component} from "react";
you can see this import statement looks very similar to what we have on line one 
so let's see what's going on here
-obviously "react" is the module 
but note that here we don't have period slash because we use them only for our own modules that are part of the project
but "react" is not part of our project it's a third-party library that is stored inside of the node modules folder
-okay now React is the default export from this module
-where as Component is a named export 
so if I delete this and press control space
you can see all the named exports in the react module 
99% of the time we're going to use the Component class because we want our custom components to extend this component 
so they will inherit all the behavior all the methods implemented inside of this class 
*/
