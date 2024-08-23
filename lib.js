  function addBookToLibrary(){

 
  

  

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
SciFi.genre = "sci-fi";
Poetry.genre = "poetry";
Drama.genre = "drama";
Age.genre = "history";
Fantasy.genre = "fantasy";
Fiction.genre = "fiction";
 let subway= 9;
 let sunday= 7;
const myLibrary = [ subway, sunday];

// function addBookToLibrary(){
  
//   const book = new TextBooks(title.value,author.value,pages.value,read.value) ||
//              new SciFi(title.value,author.value,pages.value,read.value) ||
//              new Poetry(title.value,author.value,pages.value,read.value)  ||
//              new Drama(title.value,author.value,pages.value,read.value) ||
//              new Age(title.value,author.value,pages.value,read.value)  ||
//              new Fantasy(title.value,author.value,pages.value,read.value)||
//              new Fiction(title.value,author.value,pages.value,read.value);
            

//              myLibrary = myLibrary.push(book);

// return book;
// }addBookToLibrary();


function displayBook(){

  myLibrary.forEach((book)=>{
    console.log(book);
  }) ;
}displayBook();