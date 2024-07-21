// Task 1

const bookObj = {
  Title: "Gyan Ganga",
  Author: "Sant Rampal Ji Maharaj",
  Year: 2000,
  TitleAndAuthor: function () {
    return `Title: ${this.Title}, Author: ${this.Author}`;
  },
  updateYear: function (Year) {
    this.Year = Year;
  },
  getTitleAndYear: function () {
    return `Title: ${this.Title}, Year: ${this.Year}`;
  },
};
console.log(bookObj);

// Task 2

console.log(bookObj.Title);
console.log(bookObj.Author);

// Task 3

console.log(bookObj.TitleAndAuthor());

// Task 4

bookObj.updateYear(1949);
console.log(bookObj);

// Task 5

const library = {
  name: "City Library",
  books: [
    {
      title: "Way of Living",
      author: "Sant Rampal Ji Maharaj",
      year: 2020,
    },
    {
      title: "Geeta Tera Gyan Amrit",
      author: "Sant Rampal Ji Maharaj",
      year: 2012,
    },
    {
      title: "Hindu Saheban Nahi Samjhe Geeta Ved Puran",
      author: "Sant Rampal Ji Maharaj",
      year: 2023,
    },
  ],
};

console.log(library);

// Task 6

console.log(`Library Name: ${library.name}`);

library.books.forEach((book, index) => {
  console.log(`Book ${index + 1} Title: ${book.title}`);
});

// Task 7

console.log(bookObj.getTitleAndYear());

// Task 8

for (const property in bookObj) {
    if (bookObj.hasOwnProperty(property)) {
        console.log(`${property}: ${bookObj[property]}`);
    }
}

// Task 9

const keys = Object.keys(bookObj);
console.log("Keys:", keys);

const values = Object.values(bookObj);
console.log("Values:", values);


