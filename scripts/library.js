const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function defaultLibary() {
    myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295));
    myLibrary.push(new Book("1984", "George Orwell", 328));
    myLibrary.push(new Book("Pride and Prejudice", "Jane Austen", 432));
}

function displayBooks() {
    const tableBody = document.querySelector('#library-table tbody');
    tableBody.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><button onclick="deleteBook(${index})" class="delete-btn">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    if (title && author && pages) {
        const newBook = new Book(title, author, pages);
        myLibrary.push(newBook);
        displayBooks();
    } else {
        alert("Fill in all fields.")
    }
}

document.addEventListener('DOMContentLoaded', () => {
    defaultLibary();
    displayBooks();
});