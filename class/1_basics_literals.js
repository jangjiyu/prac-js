// 1~5번은 ES6에서 class 문법이 생기기 전까지 class를 사용하던 법.

const book1 = {
  title: "Book1",
  author: "John",
  year: "2020",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

const book2 = {
  title: "Book2",
  author: "Jane",
  year: "2022",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book2.getSummary()); // Book2 was written by Jane in 2022
console.log(Object.values(book1)); // [ 'Book1', 'John', '2020', [Function: getSummary] ]
console.log(Object.keys(book1)); // [ 'title', 'author', 'year', 'getSummary' ]
