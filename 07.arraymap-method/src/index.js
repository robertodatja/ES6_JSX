const colors = ["red", "blue", "green"];

/*
We use map() to render a list of items 
We call the map() method on this array colors map here:  
colors.map()
We need to pass a callback function 
the job of this function is to transform each element in this array 
so this function is called by the map method for each item in this array 
it takes one item at a time and returns a new item: 
colors.map( callbackfunction(item) {} ) 
*/
const items = colors.map(function (color) {
  //for each color we want to have a list item like this:
  return "<li>" + color + "</li>";
});
console.log(items);

/* Mapping or transforming the colors array 
for each color will return a string like this: */

const items2 = colors.map((color) => "<li>" + color + "</li>");
console.log(items2);

/*This concatenations here: '<li>' + color + '</li>' 
are a little bit ugly so instead we can use template literals in ES6 
So, instead of using single or double quotes we use the backtick character 
that's the character before number one on your keyboard ``
Here we can define a template for our string 
so we want to have the opening and closing li tags 
and in the middle we want to render the color dynamically 
so we add a dollar sign and curly braces this is an argument placeholder 
what we put in between the braces will be rendered dynamically at runtime 
so here we want to render this color that we have here right 
so this is what we call a template literal now we get a new array.*/
const items3 = colors.map((color) => `<li>${color}</li>`);
console.log(items3);
