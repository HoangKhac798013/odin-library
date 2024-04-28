const myLibrary = []

function Books( title, author, numberOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
}

Books.prototype.info = function() {
    return this.title + ' by ' +  this.author + ', ' + this.numberOfPages + ', ' + this.readStatus;
}

Books.prototype.changeReadStatus = function() {
    if(this.readStatus === 'Read') {
        this.readStatus = 'Not Read Yet'
    }
    else {
        this.readStatus = 'Read'
    }
}

function addBookToLibrary(title_, author_, numberOfPages_, readStatus_) {
    newBook = new Books(title_, author_, numberOfPages_, readStatus_)
    myLibrary.push(newBook);
}

function listBook() {
    let elements = document.querySelectorAll('.bookDivContainer')
    elements.forEach(element => {
        element.remove();
    });

    for (let i = 0; i < myLibrary.length; i++) {
        let bookDivContainer = document.createElement('div')
        
        bookDivContainer.setAttribute('display', 'flex')
        let bookDiv = document.createElement('div')
        bookDiv.textContent = myLibrary[i].info()

        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(i,1)
            listBook()
        })
        let changeReadStatus = document.createElement('button')
        
        changeReadStatus.textContent = 'Change read status'
        changeReadStatus.addEventListener('click', () => {
            myLibrary[i].changeReadStatus();
            listBook();
        })
        bookDivContainer.setAttribute('class', 'bookDivContainer')
        bookDivContainer.style.setProperty('border', '1px solid black')
        bookDivContainer.appendChild(bookDiv)
        bookDivContainer.appendChild(deleteButton)
        bookDivContainer.appendChild(changeReadStatus)
        document.body.appendChild(bookDivContainer);
    }
}

addBookToLibrary("Sherlock", "Conan Doyle", 100, "Not read yet");
addBookToLibrary("kenny", "Kenny", 100, "Not read yet");
addBookToLibrary("Hoang", "Hoang", 100, "Not read yet");
addBookToLibrary("Khoi", "Khoi", 100, "Not read yet");
addBookToLibrary("Duc", "Duc", 100, "Not read yet");

let newBookButton = document.querySelector("#newBookButton");
let closeButton = document.querySelector("#closeButton");
let dialog = document.querySelector("dialog");

closeButton.addEventListener('click', (event) => {
    dialog.close();
})

function createBoard(){ 
    var board = document.createElement('div') 
    board.className = "board" 
    let body = document.querySelector('body') 
    body.appendChild(board) 
  } 

newBookButton.addEventListener('click', () => {
    dialog.show();
})

document.getElementById('bookInput').addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    addBookToLibrary(formData.get('bookName'), formData.get('authorName'), formData.get('numberOfPages'), formData.get('readStatus'));
    listBook();
})

let body = document.querySelector("body");
listBook();