import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_USER } from "./Query/Query.js";
function DisplayData() {
  const { data, loading, error } = useQuery(QUERY_ALL_USER);
  if (loading) {
    return <div>loading...</div>;
  } else if (data) {
    console.log(data);
    return <div>UserList</div>;
  } else if (error) {
    console.log(error);
    return <div>Error loading</div>;
  }
}

export default DisplayData;
