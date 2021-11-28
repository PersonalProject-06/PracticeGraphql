import { gql } from "@apollo/client";

export const QUERY_ALL_USER = gql`
  query GetAllUser {
    users {
      name
      age
      username
      nationality
      friends{
       name 
      }
    }
  }
`;

export const QUERY_CREATE_USER = gql `
  mutation CreateUser($input : createUserInput!) {
    createUser(input : $input) {
      id 
    }
  }
`