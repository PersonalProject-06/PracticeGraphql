import React, { useState, useLayoutEffect } from "react";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_USER, QUERY_CREATE_USER } from "./Query/QueryForUser.js";
import { QUERY_SPECIFIC_MOVIE } from "./Query/QueryForMovie.js"
function DisplayData() {
    const [movieName, setMovieName] = useState("")
    const [FetchMovie, { data: movieData, loading: LoadingMovie, error: EroorMovie }] = useLazyQuery(QUERY_SPECIFIC_MOVIE)
    useLayoutEffect(() => {
        <h1>hello</h1>
    }, [])
    const [name, setName] = useState("")
    const [username, setUserName] = useState("")
    const [age, setAge] = useState("")
    const [nationality, setNationality] = useState("")
    const [Create, { data: CreateUserData, loading: LoadingUser, error: ErrorCreateUser }] = useMutation(QUERY_CREATE_USER)
    const { data, loading, error, refetch } = useQuery(QUERY_ALL_USER);
    if (movieData) {
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
                {data && data.users.map((e, i) => {
                    return (
                        <div key={i}>
                            <h1>Name: {e.name}</h1>
                            <h1>User Name: {e.username}</h1>
                            <h1>Nationality {e.nationality}</h1>
                        </div>
                    )
                })}
            </div>
            <div>
                <input placeholder="put name of movie" onChange={(event) => setMovieName(event.target.value)} />
                <button onClick={() => FetchMovie({
                    variables: {
                        name: movieName
                    }
                })}>Fetch</button>
                {movieData && <h1>
                    Name: {movieData.movie.name}

                </h1>}
                {LoadingMovie && <h1>loading...</h1>}
                {EroorMovie && <h2>error</h2>}
            </div>
            <div>
                <input placeholder="name" onChange={(event) => setName(event.target.value)} />
                <input placeholder="username" onChange={(event) => setUserName(event.target.value)} />
                <input placeholder="age" onChange={(event) => setAge(Number(event.target.value))} />
                <input placeholder="nationality" onChange={(event) => setNationality(event.target.value.toUpperCase())} />

            </div>
        </>
    );
}

export default DisplayData;
