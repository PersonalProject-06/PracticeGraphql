const {gql} = require('apollo-server');

const typeDefs = gql`
    type User{
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:Nationality!
        friends:[User!]
        mouvie:[Movie!]
    }
    type Movie{
        id:ID!
        name:String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }
   type Query {
        users:[User!]!
        user(id:ID):User!
        mouvies:[Movie!]!
        mouvie(name:String!):Movie!
    }
    input createUserInput{
        name:String!
        username:String!
        age:Int!
        nationality:Nationality!
    }
    input updateUserInput{
        id:ID!
        newUserName:String!

    }
    type Mutation{
        createUser(input:createUserInput):User!
        updateUserName(input:updateUserInput):User!
        deleteUser(id:ID!):User!
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