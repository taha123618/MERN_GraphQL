import {users , quotes} from './fakedb.js'
import Mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';

const User = Mongoose.model('USER', UserSchema)
const Quote = Mongoose.model('Quote')


// Resolver(calculation {Brain})
const resolvers = {
    Query:{
    users: async () => await User.find({}),
    //    for unique _identify by ID only for 1 user
    user: async (_, _id)=> await User.find({_id}),
    // users.find(user=>user._id == _id),

    quotes: async ()=> await Quote.find({}),

    // # for find indiviual quotes
    iquote: async (_,{by})=> 
    await Quote.find({by})
    // quotes.filter((quote)=>quote.by==by) 
    },

    User:{
        quotes: async (ur)=>
        await Quote.find({by:ur._id}),
        // quotes.filter(Quote=>Quote.by == ur._id)
    },

// Mutation 
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
            // encript the user (token)
        const user = await User.findOne({email:userlogin.email})
        if(!user){
            throw new Error("User Dont Exits With That Email")
        }  
        // comapre password (bycrpt.js)
const passwordMatch =  await bcrypt.compare(userlogin.password,user.password )
if(!passwordMatch){
throw new Error("Email or Password are Invalid")
}    

// create Token 
const token = Jwt.sign({userId:user._id},SECRET_TOKEN)
return{token}

},

// All imp topic for middleware
createQuote:async(_,{name},{userId})=>{
    // jn user signin kre to quotes ko generate krn ese 
    // phele tooken le ke lye 
    if(!userId) throw new Error("You must Login First")
  const newQuote =  new Quote({
        name,
        by:userId
    })
   await newQuote.save()
   return "Quote saved Successfully"

}


    }
}

// console.log(resolvers , typeDefs);

export default resolvers;