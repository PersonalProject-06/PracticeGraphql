const { UserList, MovieList } =require("../data/fakeData")
const _ = require("lodash");
const resolvers ={
    Query :{
        users:()=>{
            return UserList
        },
        user:(parent,args)=>{
            const id = args.id
            const user = _.find(UserList, { id: Number(id) });
            return user
        },
        movies:()=>{
            return MovieList
        },
        movie:(parent , args)=>{
            const name = args.name
            const mouvie = _.find(MovieList,{name})
            return mouvie
        }
       
    },
    User : {
        friends:()=>{
        return UserList.reverse()   
        }
    },
    Mutation:{
        createUser:(parent,args)=>{
            const user = args.input;
            const id = UserList[UserList.length-1]["id"]
            UserList.push(user)
            UserList[UserList.length-1]["id"] = id + 1 
            return user 
        },
        updateUserName:(parent,args)=>{
            const {id , newUserName} = args.input
            let UserUpdated;
            UserList.forEach((e,i)=>{
                if(e.id==id){
                  e["username"]=newUserName
                  UserUpdated = e  
                }
            })
            return UserUpdated
        },
        deleteUser:(parent,args)=>{
            const {id}=args
            console.log(id);
            let UserDeleted;
            UserList.forEach((e,i)=>{
                console.log(e.id);
                if(e.id==id){
                    UserDeleted = e
                    UserList.splice(i,1)
                }
            })
            return UserDeleted
        },
        createMovie : (parent,args)=>{
            const movie = args.input;
            const id = MovieList[MovieList.length-1]["id"]
            MovieList.push(movie)
            MovieList[MovieList.length-1]["id"] = id + 1 
            return MovieList[MovieList.length-1] 

        }
    }
}





module.exports ={resolvers}