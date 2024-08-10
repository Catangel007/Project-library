//  let titleInput = document.querySelector("#title.input");
//  let authorInput =document. querySelector("#author-input");
//  let genreInput = document. querySelector("#genre-input");
//  let pagesInput =document. querySelector("#pages-input");
 const addBook = document. querySelector("#add-book");
 const addNew = document. querySelector(".add-new");
 const dialog = document. querySelector(".modal");
 let bookDisplay = document .querySelector(".book-display");
 const addBtnDisplay = document .querySelector(".add");
 let genreInput = document .querySelector("#genre-input");
 const select = document .querySelector("select")

 // Update input display for genre

  select.addEventListener("change", () =>{
    
  if(select.value === "default"){
   
  } else //if(select.value === 'textbooks'||'poetry'||'drama'||'fiction'||'fantasy'||'sci-fi'||'history')
  {
    genreInput.value = select.value;
    genreInput.textContent("genreInput.value");
  }
})


 
     //genreInput.value === genreInput.textContent;




//write a function that loops though an array
//display books on page
//button that brings up a form
//use event.preventDefault to stop the form from submitting to server
//Add a delete button to remove book from library







// sample objects to test array mylibrary
let book1 ={
  name:"A Mind for Numbers",
  author:"Barbara Oakley, Ph.D.",
  genre: "textbooks",
  pages: 295,
  read: false
}

let book2 ={
  name:"Anxious for nothing",
  author:"Max Lucado",
  genre: "fiction",
  pages: 300,
  read: false
}
let book3 ={
  name:"How to have a Good Day",
  author:"Isaac Ahmov",
  genre: "history",
  pages: 455,
  read: false
}

let book4 ={
  name:"It Starts with Us",
  author:"Colleen Hover",
  genre: "drama",
  pages: 230,
  read: false

}

const myLibrary = [book1,book2,book3,book4];


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
// titleInput= titleInput.textContent;
//   authorInput= authorInput.textContent;
//   genreInput= genreInput.textContent;
//   pagesInput = pagesInput.textContent

//function to take user input and store in an array
function addBookToLibrary(){
  

  

  addBook.addEventListener("click",()=>{
    console.log('you clicked me');
  let book = new Book(titleInput,authorInput,genreInput,pagesInput);
  console.log(book);
  myLibrary === myLibrary.push(book);
  console.log(myLibrary)
 })
   
}addBookToLibrary();
console.log("library work please")

