const { ApolloServer } = require("apollo-server")
const { resolvers } = require("./schema/resolvers")
const { typeDefs } = require("./schema/type-defs")
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(url);
    console.log(`YOUR SERVER IS RUNNING AT ${url}`);
})