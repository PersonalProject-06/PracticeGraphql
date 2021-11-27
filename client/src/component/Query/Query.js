import { gql } from "@apollo/client";

export const QUERY_ALL_USER = gql`
  query GetAllUser {
    users {
      id
      name
      age
      username
    }
  }
`;
