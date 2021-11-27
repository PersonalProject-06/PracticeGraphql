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
