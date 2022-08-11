// Object Of Protos
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

// Create Object
const book1 = Object.create(bookProtos);
book1.title = "Book1";
book1.author = "John";
book1.year = "2018";
// book1은 bookProtos의 객체를 프로토타입으로 지님

// 위와 동일
const book2 = Object.create(bookProtos, {
  title: { value: "Book1" },
  author: { value: "John" },
  year: { value: "2018" },
});
// 위와 동일하게 작동을 해야하는디.. 난 왜 안 되지..?

console.log(book1); // { title: 'Book1', author: 'John', year: '2018' }
console.log(book2); // {}  -> 왜 안 되는 건가...!!!
