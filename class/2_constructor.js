// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// Instatiate an Object
const book1 = new Book("Book1", "John", "2020");
const book2 = new Book("Book2", "Jane", "2022");

console.log(book1.getSummary()); // Book1 was written by John in 2020
// 컨스트럭터에 넣어놔서 프로토타입이 아닌 함수로 불러옴
// -> 3번 prototype에서 프로토타입 사용법을 알아보자.
