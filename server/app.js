const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('./schemas/schema')
const resolvers = require('./resolvers/resolver')

const apollerServer = new ApolloServer({
    typeDefs,
    resolvers
})

const app = express();
apollerServer.start()
    .then(() => {
        apollerServer.applyMiddleware({app})
    })


app.listen({port: 4000}, () => {
    console.log(`the server is running at http://localhost:4000${apollerServer.graphqlPath}`)
})