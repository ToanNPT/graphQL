const {gql} = require('apollo-server-express')

const typeDefs = gql`
type Book {
    id: ID,
    name: String,
    price: Float
    author: Author
}

type Author {
    id: ID!,
    fullname: String!
    books: [Book]
}


type Query {
    books: [Book],
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
}

type Mutation {
    createBook(id: ID!, name: String!, price: Float!, authorId: ID!): Book
    createAuthor(id: ID!, fullname: String): Author
}
`

module.exports = typeDefs