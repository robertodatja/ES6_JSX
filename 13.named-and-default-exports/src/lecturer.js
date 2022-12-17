import { Person } from "./person.js";

export function promote() {}

export default class Lecturer extends Person {
  constructor(name, degree) {
    super(name); //initialize the name property, if don't will get error
    this.degree = degree; //initialize the degree property
  }
  explain() {
    console.log("explain");
  }
}
