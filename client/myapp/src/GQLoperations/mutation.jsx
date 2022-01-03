import { gql } from "@apollo/client";

export const SIGNUP_USER = gql `
mutation createUser($userNew:UserInput!){
        user:signupUser(userNew:$userNew){ 
           firstName
        }
    }
`

// for login mutation 
export const LOGIN_USER = gql `
mutation SigninUser($userSignin:UserSigninInput!){
    user:signinUser(userSignin:$userSignin){ 
      token
    }
  }
  `

// # for createQuote 
export const CREATE_QUOTE = gql `
mutation createQuote($name:String!){
    quote:createQuote(name:$name)
  }
`

