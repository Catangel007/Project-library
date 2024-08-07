const newBook = querySelector(".add");


const myLibrary = [ new Book(" The Hobbit", "J.R.R. Tolkien", "Fantasy",295)];

function Book(title, author, genre, pages) {
  // the constructor...
  this.title= title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = function(){
    let read = false;
    if (read === true){
      console.log(" the book is read")
    } else{
      console.log("book unread")
    }
  };
}

function addBookToLibrary() {
  // do stuff here
  myLibrary.push = Book();

}
