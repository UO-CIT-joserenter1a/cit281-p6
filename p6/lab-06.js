class Book
{
    constructor(title, author, pubDate, ISBN)
    {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
        this.ISBN = ISBN;
    }
}

class Library
{
    constructor(name)
    {
        this._name = name;
        this._books = [];
    }

    get count()
    {
        return this._books.length;
    }

    get books()
    {
        return JSON.parse(JSON.stringify(this._books));
    }

    addBook(book = {})
    {
        const {title = '', author ='', pubDate = '', ISBN = ''} = book;
        if(title.length > 0 && author.length > 0)
        {
            const newBook = {title, author, pubDate, ISBN};
            this._books.push(newBook);
        }
    }

    listBooks()
    {
        for(const book of this._books)
        {
            const {title, author, pubDate, ISBN} = book;
            console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${ISBN}`);
        }
    }
    deleteBook(ISBN = "")
    {
        let temp = []
        for(const book of this._books)
        {
            if(book.ISBN !== ISBN)
            {
                temp.push(book);
            }
        }
        this._books = temp;
    }
}

// Create a library object
const library = new Library("New York Times Best Seller List");

// Create a book
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", 0735211299);
const theJungle = new Book("The Jungle", "Upton Sinclair", "2/26/1906", 9780393977790);
const commonSense = new Book("Common Sense", "Thomas Paine", "01/10/1776", 9783988289537);

// Add book to library and output library count and books
books = [atomicHabits, theJungle, commonSense]
for (const book of books)
{
    library.addBook(book);
}

console.log(`Book count: ${library.count}`);
library.listBooks();

// Delete a book and output library books
console.log(`* Library after delete *`);
library.deleteBook(0735211299);
library.listBooks();