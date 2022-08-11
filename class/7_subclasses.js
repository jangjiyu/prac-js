// ES6 Class - subClass

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    // super로 부모의 컨스트럭터를 call
    this.month = month;
  }
}

// Instantiate Magazine
const mag1 = new Magazine("Mag1", "John", "2020", "Jan");

console.log(mag1);
console.log(mag1.getSummary());

// subclass를 쓰는 게 상속하는 것보다 쉽다!
