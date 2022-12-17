import { Lecturer } from "./lecturer";

const lecturer = new Lecturer("Roby", "MSc");
lecturer.explain();

/*So here is the code that we wrote in the last lecture currently 
this file is getting a little bit bloated  because we have multiple classes defined in the same file 
it would be much nicer if we split this code across multiple files and this is what we call modularity 
so instead of writing all the code in one file 
we write our code in multiple files, we call each file a module
- 
in the old days we didn't have the concept of modules natively in JavaScript 
so there were many third-party solutions but starting from Egmont script 6 
we have the concept of modules natively in JavaScript 
so let's go ahead and modularize this application
-
I'm gonna move each class in a separate file: 
person.js
lecturer.js
Now, we've less code in each file and our application is more maintainable but we are not done yet 
When working with modules, the objects we define in a module are private by default 
so that means, this lecturer class that we have defined here is not visible to any other files or modules in this application 
-
In order to make this visible we have to make it public 
and we do that by exporting this class to the outside 
so we export it from the lecturer class and then we import it wherever we need it 
so doing that is very easy we simply prefix the class with export 
 export class Lecturer extends Person {
ok save the changes similarly we go to the person module 
so we need to export the person class because we have referenced that
 export class Person {
and our lecturer module here we're using the person class right 
--
but currently we have not imported this person class here 
so on the top we add 
import { Person } from ''
In vs code is suggesting a few libraries like react react Dom and so on these are
the libraries that we have specified as dependencies in package.json 
and these dependencies are stored in node modules folder 
-
so currently we don't want to import anything from these modules 
we want to import from our own modules 
we need to pass the relative past or the target file or the target module 
-
we start with period slash and that indicates the current folder
here are the files in the current folder 
so we want to import this person class from this person file 
note that here we don't add the extension just the file name so we don't add .js 
finally we need to terminate this statement with a semicolon 
import { Person } from './person'
so we imported the Person class from the person module
- 
finally we need to go back to index.js 
and because here we're using the Lecturer class we need to import it 
import { Lecturer } from './lecturer'
And to make sure that everything works let's call the explain() method save the changes
and here in the console you can see the explain message  
so we successfully modularized this an application */
