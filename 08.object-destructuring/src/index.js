const address = {
  street: "Ferit Xhajko",
  city: "Tirana",
  country: "Albania"
};

/*One of the modern JavaScript features that you see a lot in react applications is object restructuring so let's imagine
We have an address object
Let's say somewhere in the code we need to extract the value of these properties 
and store them in separate variables:*/
const rruga = address.street;
const qyteti = address.city;
const shteti = address.country;
/*Here the problem with this code is that 
we have this repetitive address dot address dot address dot code in multiple places*/

/*Destructuring solves this problem:
So if we want to have three variables or three constants rruga1, qyteti1 and shteti1
and we want them to be set to these properties 
 street: 'Ferit Xhajko',
  city: 'Tirana',
  country: 'Albania'
in the address object 
we can rewrite this code like this:*/
const { rruga1, qyteti1, shteti1 } = address;
//This is equivalent to lines 11-12-13 and we no longer have that repetition of address.

/*So basically, We're extracting the street property from the address object 
and storing it in a constant called rruga 
Now, you don't necessarily have to list all the properties in the address object 
maybe you're only interested in the city property and use a the different name: qyteti2 */
const { street: qyteti2 } = address;
