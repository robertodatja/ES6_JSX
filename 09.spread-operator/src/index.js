//Apply spread on arrays:
const first = [1, 2, 3];
const second = [4, 5, 6];

//FirstWay:
const combined1 = first.concat(second);
console.log(combined1);
//SecondWay:
const combined2 = [...first, ...second];
console.log(combined2);

//---------------------------
//Add an element in a middle:
const combined3 = [...first, "a", ...second];
console.log(combined3);
//Add an element in the end:
const combined4 = [...first, "a", ...second, "b"];
console.log(combined4);
//Clone (Apply spread at an array)
const clone = [...first];
console.log(first);
console.log(clone);

//--------------------------------------------------------------------------
//Apply spread on objects
const firstob = { name: "Roberto" };
const secondob = { job: "programmer" };
const combinedob = { ...firstob, ...secondob };
console.log(combinedob);
//Combined and add other properties
const combinedob2 = { ...firstob, ...secondob, location: "Tirana" };
console.log(combinedob2);
//Clone (Apply spread at an object)
const cloneob = { ...firstob };
console.log(firstob);
console.log(cloneob);
