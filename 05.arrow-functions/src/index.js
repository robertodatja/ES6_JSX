const square1 = function (number) {
  return number * number;
};

const square2 = (number) => {
  //instead function use =>
  return number * number;
};

const square3 = (number) => {
  //we've 1arg, so remove ()
  return number * number;
};

const square4 = (number) => number * number; //we've 1arg,body-1line-return1value, so remove (){}
console.log(square4(12));

//-----------------------------------------------------------------------
const jobs = [
  { id: 1, isActive: false },
  { id: 2, isActive: true },
  { id: 3, isActive: true }
];

/*Let's imagine we want to get only the active jobs 
so we call jobs.filter(argument), the argument that we pass here is a predicate function 
a function that takes a job object and returns a true or false 
so filter( predicatefunction) iterates over this array for each job object 
it takes that job object and pass it to this predicate function 
the job of this predicate, is to determine if that job object should be returned from the filter method */
const activeJobs1 = jobs.filter(function (job) {
  return job.isActive;
});

/*this code is cleaner and easier, so filter jobs where job is active */
const activeJobs2 = jobs.filter((job) => job.isActive);
console.log(activeJobs2);
