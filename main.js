let myLibrary = [];

const form = document.getElementById("bookInput");
const bookList = document.getElementById("bookList");

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(new Book('Saga of Poo', 'Mr Poopy Butthole', '69', 'no')) ;
addBookToLibrary(new Book('Legend of the Micropenis', 'Herbie Smallcock', '12', 'yes')) ;
addBookToLibrary(new Book('Why not me?', 'Fetor Jones', '743', 'no'));

function populateList() {
    bookList.innerHTML = '';
    myLibrary.forEach((e,i) => {
        bookList.innerHTML += 
            `<div class='bookCard'>
                Title: ${e.title}<br>
                Author: ${e.author}<br>
                Pages: ${e.pages}<br>
                Read?: ${e.read}<br>
                <button onClick=toggleRead(${i})>Toggle Read</button>
                <button onClick=removeLibrary(${i})>Remove Me</button>
            </div> `;
    });
}
populateList()

function removeLibrary(book) {
    console.log(book);
    myLibrary = myLibrary.filter((e,i) => !(i==book))
    populateList()
}

function toggleRead(i) {
    (myLibrary[i].read == 'yes') ? myLibrary[i].read = 'no' : myLibrary[i].read = 'yes';
    populateList();
}


function makeBook(form) {
    let title = form.title.value;
    let author = form.author.value;
    let pages = form.pages.value;
    let read = form.read.value;
    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    form.reset();
}



