const {gql} = require('apollo-server');

const typeDefs = gql`
    type User{
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:Nationality!
        friends:[User!]
    }
    type Movie{
        id:ID!
        name:String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }
   type Query {
        users:[User]!
        user(id:ID):User!
    }
    enum Nationality{
        CANADA
        BRAZIL
        CHILE
        GERMANY
        TUNISIA
        INDIA
    }

`



module.exports ={typeDefs}