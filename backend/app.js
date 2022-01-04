// In GraphQL 
// Query is {get the data}
// Mutation is {to post , delete , update data}
// Resolver(calculation part) is {has logic to handle query or mutation operation}

// Applo client store the data while when the 
// user vist 2 time (chache krleta ha)

// import ApolloServer from 'apollo-server'
// import { ApolloServer , gql } from 'apollo-server'


// for development buils the api to connect react to graphQL 
import { ApolloServer } from 'apollo-server-express'
import {ApolloServerPluginLandingPageGraphQLPlayground,
    // for development 
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageDisabled} from 'apollo-server-core'
import Jwt  from 'jsonwebtoken'
import typeDefs from './scehema.js'
import './backend/Db/conn'
// models 
import './backend/Db/models/UserSchema'
import './backend/Db/models'
import resolvers from './resolvers.js'
// for reconized nodejs to config the env files 
import  dotenv from 'dotenv';

// for development 
import express from 'express';
import http from 'http';
import path from 'path';

const __dirname = path.resolve(); //for profile error solve in development in herokuapp
// for development 
const port = process.env.PORT || 4000;
const app = express();
const httpServer = http.createServer(app);

// load for only in development side 
if(process.env.NODE_ENV !== "production"){
    dotenv.config()
}

// middlewaare logic
const context = ({req})=>{
    const {authorization} = req.headers
    if(authorization){
    const {userId} = Jwt.verify(authorization,process.env.SECRET_TOKEN)
    return {userId}
    }
}


// listen to the server 
const server = new ApolloServer({
    typeDefs,
    resolvers,
    // Quotes ko geneatre krne se phele ka kam 
    // same logic lage ga jo ham middleware pe lygya te ha 
    // hr resolver se phele chele ga 

    // middlewaare
    context,
    // playground 
    plugins:[
        ApolloServerPluginDrainHttpServer({ httpServer }),
        process.env.NODE_ENV !=="production" ? 
        ApolloServerPluginLandingPageGraphQLPlayground() :
        ApolloServerPluginLandingPageDisabled()
    ]
})

// Make API for connect React to GraphQl 
// API
// First build the react 
if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/myapp/build'))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','myapp' ,'build','index.html'))
    })
}


// for start the server in development 
await server.start();
server.applyMiddleware({
     app,
     path:'/graphql' 
});

// server.listen().then(({ url }) => {
// console.log(`server ready at ${url}`);
// });

// listen to server for development 
httpServer.listen({port},()=>{
console.log(`🚀  Server ready at 4000 ${server.graphqlPath}`);
})
