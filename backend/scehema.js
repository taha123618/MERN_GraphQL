// import {gql} from 'apollo-server'

// for development buils the api to connect react to graphQL 
import { gql } from 'apollo-server-express';

// scehema 
const typeDefs = gql `

# Query for client side 
type Query{
    users:[User]
    # for unique _identify by ID only for 1 user
    user(_id:ID!):User 
    quotes:[Quote]
    # for find indiviual quotes 
    iquote(by:ID!):[Quote],
    # for profile client 
    myprofile:User
}

type User ={
    _id:ID!
    firstName:String
    lastName:String
    email:String
    # for muiltiple code 
    quotes:[Quote]
}

type Quote = {
    name:String,
    by:ID

}

type Token {
    token:String
}

type Mutation{
    # signUp 
    signupUser(userNew:UserInput!):User
    # SignIN 
    signinUser(userlogin:UserSignInInput!):Token
    createQuote(name:String!):String
}


# fName LastName ko aik fun ma istore krrhe ha 
input UserInput{
    firstName:String! , 
    lastName:String!,
    email:String! ,
    password:String!
}
input UserSignInInput{
    email:String! ,
    password:String!
}

`

export default typeDefs;