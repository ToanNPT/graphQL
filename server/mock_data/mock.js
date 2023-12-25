const books = [{
    id: 1,
    name: 'Clean Code',
    price: 34.44,
    authorId: 1001
},
{
    id: 2,
    name: 'Head First The Design Pattern',
    price: 54.33,
    authorId: 1002
},
{
    id: 3,
    name: '.NET 6, The Core Feature',
    price: 78.99,
    authorId: 1002
}]

const authors = [
    {
        id: 1001,
        fullname: 'Toan Nguyen Phuc Thanh'
    },
    {
        id: 1002,
        fullname: 'Ha Van Dat'
    },
]

module.exports = {
    books,
    authors
}