// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Revise(개정판) / Change Year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revise = true;
};

// Instatiate an Object
const book1 = new Book("Book1", "John", "2020");
const book2 = new Book("Book2", "Jane", "2022");

console.log(book1.getSummary());
// this still works!
// 객체의 내장 함수가 아닌 프로토 타입으로 저장 되어 있음.
// title, author, year는 항상 불러오길 원하지만, getSummary는 아닌 경우 프로토타입에 저장해서 사용.

console.log(book1.getAge()); // Book1 was written by John in 2020
book1.revise("2022"); // Book1 is 2 years old
console.log(book1); // Book { title: 'Book1', author: 'John', year: '2022', revise: true }
