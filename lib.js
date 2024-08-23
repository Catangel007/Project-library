  

function Book(title,author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function (){
    return ` ${this.name} by ${this.author}, ${this.pages}pages.`
  }
}







const myLibrary = [];

 function addBookToLibrary(){
  
   const book = new Book(title.value,author.value,pages.value,read.value)

        return myLibrary.push(book);

 } 
 
 
 function displayBook(){

  myLibrary.forEach((book)=>{
    console.log(book);
    book= document. createElement("div");
    book.setAttribute("class", "book");
   const deleteBtn = document .createElement("button");
   const readBtn = document. createElement("button");
    book. appendChild(deleteBtn);
    book. appendChild(readBtn);
    deleteBtn.classList.add("delete");
    readBtn.classList.add("read");
    deleteBtn.textContent="Delete";
    readBtn.textContent = "read";
    mainPage.textContent = book;
    book.textContent= Book.info()
  })
}displayBook();



// DOM manipulation

const add = document. querySelector(".add img");
const dialog= document. querySelector("dialog");
const closeBtn = document. querySelector(".close");
const input = document.querySelectorAll("input");
let select = document. querySelector("select");
let genreInput = document.querySelector("#genre-input");
const addBook = document.querySelector("#add-book");
const mainPage = document.querySelector("main")

add.addEventListener("click",() => {
    dialog.showModal()
});

closeBtn.addEventListener("click",(e)=>{
   dialog.close();
   input.reset();   
});

select.addEventListener("change",()=>{
   genreInput.value = select.value;

});

addBook.addEventListener("click",()=>{
 addBookToLibrary();
})

