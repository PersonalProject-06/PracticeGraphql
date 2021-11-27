const { UserList, MovieList } =require("../data/fakeData")

const resolvers ={
    Query :{
        users:()=>{
            return UserList
        }
    }





}





module.exports ={resolvers}