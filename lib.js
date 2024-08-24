  
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

        myLibrary.push(book);
       console.log(book);
       displayBook()
       return book;
 } 
 
 
 
function displayBook (){

  myLibrary.forEach((book)=>{
    console.log(book);
    
     let paperBack= document. createElement("div");
     const deleteBtn = document .createElement("button");
     const readBtn = document. createElement("button");


     paperBack = book;


    paperBack.setAttribute("class", "book");
  
  
    paperBack. appendChild(deleteBtn);
    paperBack. appendChild(readBtn);
    mainPage.appendChild(paperBack);


    deleteBtn.classList.add("delete");
    readBtn.classList.add("read");


    deleteBtn.textContent="Delete";
    readBtn.textContent = "Read";
    mainPage.textContent = paperBack;
    paperBack.textContent= `${myLibrary.info()}`;
  })

} 


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
 addBookToLibrary(addBook.input);
 //document.getElementById("pop-up").reset();
 dialog.close();
})

deleteBtn. addEventListener("click",()=>{
  // delete myLibrary [book];
  mainPage.textContent = paperBack.delete();
})

readBtn.addEventListener("click",()=>{
  let bookView = myLibrary.file;
  window.open (bookView, "resizeable, scrollbar");
})