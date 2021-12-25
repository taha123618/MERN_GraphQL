import {users , quotes} from './fakedb.js'
import { Mongoose } from 'mongoose';
const User = Mongoose.model('USER', UserSchema);

import bcrypt from 'bcryptjs';


// Resolver(calculation {Brain})
const resolvers = {
    Query:{
       users:()=>users,
    //    for unique _identify by ID only for 1 user
    user:(_, args)=>users.find(user=>user._id == args._id),

    quotes:()=>quotes,
    // # for find indiviual quotes
    iquote:(_,{by})=> quotes.filter((quote)=>quote.by==by) 
    },

    User:{
        quotes:(ur)=>quotes.filter(Quote=>Quote.by == ur._id)
    },


    Mutation:{
        signupUser: async (_,{userNew})=>{
        const user = await User.findOne({email:userNew.email})
        if(user){
            throw new Error("User Already Exists with this mail Mere jan")
        }
       const hasedPassword = await bcrypt.hash(userNew.password, 12)
       
      const NewUser =  new User ({
           ...userNew,
           password:hasedPassword
       })
       return await NewUser.save()
    },
    //   sign_IN_User 
        signinUser: async (_,{userlogin})=>{
        
    },


    }
}

// console.log(resolvers , typeDefs);

export default resolvers;