const { books, authors } = require('../mock_data/mock')
const resolvers = {
    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => book.id == args.id),
        authors: () => authors,
        author: (parent, args) => authors.find(author => author.id == args.id)
    },
    Book: {
        author: (parent, args) => authors.find(author => author.id == parent.authorId)
    },
    Author: {
        books: (parent, args) => books.filter(book => book.authorId == parent.id)
    },

    Mutation: {
        createAuthor: (parent, args) => {
            console.log("parent: ", parent)
            authors.push({...args})
            return authors.find(author => author.id == args.id)
        },
        createBook: (parent, args) => {
            console.log(args);
            books.push({...args})
            return books.find(book => book.id == args.id)
        }
    }
}

module.exports = resolvers