class Book {
    #title;
    #author;
    #year;

    constructor(title, author, year){
        this.#title = title
        this.#author = author
        this.#year = year

    }
    printInfo() {
        console.log(`Title: ${this.#title}, Author: ${this.#author}, Year: ${this.#year}`);
    }
    get title() {
        return this.#title;
    }
    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Title must be a non-empty string.");
        }
        this.#title = value;
    }

    get author() {
        return this.#author;
    }
    set author(value) {
        if(typeof value !== "string" || value.trim() === ""){
            throw new Error("Author must be a non-empty string.")
        }
        this.#author = value
    }

    get year() {
        return this.#year;
    }
    set year(value) {
        const currentYear = new Date().getFullYear();
        if(typeof value !== "number" || value > currentYear){
            throw new Error(`Year must be a number not greater than ${currentYear}.`)
        }
        this.#year = value;
    }
    static findOldestBook(booksList){
        return booksList.sort((a, b) => a.year - b.year)[0]
    }
}

export default Book

let book1 = new Book("Harry Potter", "J.K. Rowling", 1996)
let book2 = new Book("Wizardbook", "Author Unknown", 2042)
let book3 = new Book("Wiedzmin", "Sapkovskii", 1983)
book1.printInfo()
book2.printInfo()
book3.printInfo()
console.log(Book.findOldestBook([book1, book2, book3]))
const oldestBook = Book.findOldestBook([book1, book2, book3]);
oldestBook.printInfo();