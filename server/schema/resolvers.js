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
        mouvies:()=>{
            return MovieList
        },
        mouvie:(parent , args)=>{
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
        }
    }




}





module.exports ={resolvers}