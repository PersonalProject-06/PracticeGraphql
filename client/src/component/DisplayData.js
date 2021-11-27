import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_USER } from "./Query/Query.js";
function DisplayData() {
  const { data, loading, error } = useQuery(QUERY_ALL_USER);
  if (loading) {
    return <div>loading...</div>;
  } else if (data) {
    console.log(data);
} else if (error) {
    console.log(error);
    return <div>Error loading</div>;
}
return (<div>
    UserList
     {data && data.users.map((e,i)=>{
         return (
             <div key ={i}>
             <h1>Name: {e.name}</h1>
             <h1>User Name: {e.username}</h1>
            <h1>Nationality {e.nationality}</h1>
             </div>
         )
     })}   
    </div>
    
    );
}

export default DisplayData;
