import { gql } from "@apollo/client";


export  const QUERY_SPECIFIC_MOVIE = gql`
    query GetMovie ($name:String!){
        movie(name: $name){
            name
            isInTheaters
        }



    }




`;
