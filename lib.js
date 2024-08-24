  
let titleInput = document . querySelector("#title-input");
let authorInput = document . querySelector("#author-input");
let pagesInput = document . querySelector("#pages-input");
let fileInput = document . querySelector("#file");




function Book(title,author, pages, file){

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.file = file;
  this.info = function (){
    return ` ${this.name} by ${this.author}, ${this.pages}pages.`
  }
}






let myLibrary = [];

 function addBookToLibrary(){
  
   let book = new Book(titleInput.value,authorInput.value,pagesInput.value,fileInput.value)

       myLibrary = myLibrary.push(book);
       console.log(book);

 } 
 
 
 

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
    readBtn.textContent = "Read";
    mainPage.textContent = book;
    book.textContent= Book.info()
  })




// DOM manipulation

const add = document. querySelector(".add img");
const dialog= document. querySelector("dialog");
const closeBtn = document. querySelector(".close");
const input = document.querySelectorAll("input");
const addBook = document.querySelector("#add-book");
const mainPage = document.querySelector("main")

add.addEventListener("click",() => {
    dialog.showModal()
});

closeBtn.addEventListener("click",()=>{
  document.getElementById("pop-up").reset()
   dialog.close();
    
});


addBook.addEventListener("click",(event)=>{
  event.preventDefault();
 addBookToLibrary();
 dialog.close()
})

