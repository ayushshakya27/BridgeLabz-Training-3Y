class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(this.title + " is already issued.");
        } else {
            this.isIssued = true;
            console.log(this.title + " has been issued.");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(this.title + " has been returned.");
    }
}

let books = [
    new Book("The Hobbit", "J.R.R. Tolkien", "101"),
    new Book("Wings of Fire", "A.P.J. Abdul Kalam", "102"),
    new Book("Atomic Habits", "James Clear", "103", true)
];

console.log("Available books:");
for (let book of books) {
    if (!book.isIssued) {
        console.log(book.title + " by " + book.author + " | ISBN: " + book.isbn);
    }
}

let searchISBN = "102";
let selectedBook = books.find(function(book) {
    return book.isbn === searchISBN;
});

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found.");
}
