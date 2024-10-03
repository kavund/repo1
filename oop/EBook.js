import Book from './Book.js';
class EBook extends Book {
    #fileFormat

    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.#fileFormat = fileFormat;
    }
    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.#fileFormat}`);
    }
    get fileFormat(){
        return this.#fileFormat
    }
    set fileFormat(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('File format must be a non-empty string.');
        }
        this.#fileFormat = value;
    }
    static fromBook(book, fileFormat){
        return new EBook(book.title, book.author, book.year, fileFormat)
    }
}

const ebook = new EBook("New Book", "Alice", 1984, "epub")
ebook.printInfo()
