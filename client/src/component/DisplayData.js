import React ,{useState ,useLayoutEffect}from "react";
import { useQuery ,useLazyQuery } from "@apollo/client";
import { QUERY_ALL_USER } from "./Query/QueryForUser.js";
import  {QUERY_SPECIFIC_MOVIE} from "./Query/QueryForMovie.js"
function DisplayData() {
  const [movieName , setMovieName] = useState("")  
  const [FetchMovie,{ data:movieData , loading:LoadingMovie , error:EroorMovie }]= useLazyQuery(QUERY_SPECIFIC_MOVIE) 
  useLayoutEffect(()=>{
    <h1>hello</h1>          
},[])
const { data, loading, error } = useQuery(QUERY_ALL_USER);
if(movieData){
      console.log(movieData);
  }
  if (loading) {
    return <div>loading...</div>;
  } else if (data) {
    console.log(data);
} else if (error) {
    console.log(error);
    return <div>Error loading</div>;
}
return (
    <>
    <div>
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
    <div>
     <input  placeholder="put name of movie" onChange={(event)=>setMovieName(event.target.value)}/>
      <button onClick={()=>FetchMovie({
          variables: {
           name:movieName
          }
      })}>Fetch</button> 
        {movieData && <h1>
                Name: {movieData.movie.name}

            </h1>}
            {LoadingMovie && <h1>loading...</h1>}
            {EroorMovie && <h2>error</h2>}
    </div>
    </>
    );
}

export default DisplayData;
