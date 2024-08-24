  
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
  
   let book = new Book(titleInput.value, authorInput.value, pagesInput.value, fileInput.value);

        myLibrary.push(book);
       
       displayBook(book);
       
 } 
 
 
 
function displayBook (){
   
  for(let i = 0 ; i < myLibrary.length; i++){
    

    const paperBack = document.createElement("div");

    paperBack.className="book-cap";
    const deleteBtn = document .createElement("button");
    const readBtn = document. createElement("button");

    deleteBtn.className="delete";
    readBtn.className= "read";

    paperBack.innerText = `${myLibrary[i].title.innerText},${myLibrary[i].author.innerText},${myLibrary[i].pages.innerText},${myLibrary[i].file.innerText}`


    paperBack.appendChild(deleteBtn);
    paperBack.appendChild(readBtn);
    mainPage.appendChild(paperBack);

    deleteBtn.textContent="Delete";
    readBtn.textContent = "Read";
    mainPage.textContent = paperBack;


    deleteBtn. addEventListener("click",()=>{
      // delete myLibrary [book];
      mainPage.textContent = paperBack.delete();
    })
    
    readBtn.addEventListener("click",()=>{
      let bookView = myLibrary.file;
      window.open (bookView, "resizeable, scrollbar");
    })
  }
  }
  

// DOM manipulation

const showDialog = document. querySelector(".add img");
const dialog= document. querySelector("dialog");
const closeBtn = document. querySelector(".close");
const input = document.querySelectorAll("input");
const addBook = document.querySelector("#add-book");
const mainPage = document.querySelector("main")



showDialog.addEventListener("click",() => {
    dialog.showModal()
});

closeBtn.addEventListener("click",()=>{
  document.getElementById("pop-up").reset()
   dialog.close();
    
});


addBook.addEventListener("click",(event)=>{
  event.preventDefault();
 addBookToLibrary();
 document.getElementById("pop-up").reset();
 dialog.close();
})

