  function addBookToLibrary(){

 
  const myLibrary = [];

  

}


function Book(title,author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function Fantasy(title, author, pages, read, genre){
  Book.call(this, title, author, pages, read);

  this.genre = genre;
}

function Fiction(title, author, pages, read, genre){
  Book.call(this, title, author, pages, read);

  this.genre = genre;
}

function Drama(title, author, pages, read, genre){
  Book.call(this, title, author, pages, read);

  this.genre = genre;
}

function Age(title, author, pages, read, genre){
  Book.call(this, title, author, pages, read);

  this.genre = genre;
}

function Poetry(title, author, pages, read, genre){
  Book.call(this, title, author, pages, read);

  this.genre = genre;
}

function SciFi(title, author, pages, read, genre){
  Book.call(this, title, author, pages, read);

  this.genre = genre;
}

function TextBooks(title, author, pages, read, genre){
  Book.call(this, title, author, pages, read);

  this.genre = genre;
}

Object.setPrototypeOf(TextBooks.prototype, Book.prototype);
Object.setPrototypeOf(SciFi.prototype, Book.prototype);
Object.setPrototypeOf(Poetry.prototype, Book.prototype);
Object.setPrototypeOf(Drama.prototype, Book.prototype);
Object.setPrototypeOf(Age.prototype, Book.prototype);
Object.setPrototypeOf(Fantasy.prototype, Book.prototype);
Object.setPrototypeOf(Fiction.prototype, Book.prototype);


TextBooks.genre= "text-books";
SciFi.prototype.genre = "sci-fi";
Poetry.prototype.genre = "poetry";
Drama.prototype.genre = "drama";
Age.prototype.genre = "history";
Fantasy.prototype.genre = "fantasy";
Fiction.prototype = "fiction";

console.log(Drama.prototype.genre);
console.log(TextBooks.genre);