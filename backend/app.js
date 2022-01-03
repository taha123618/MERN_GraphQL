// In GraphQL 
// Query is {get the data}
// Mutation is {to post , delete , update data}
// Resolver(calculation part) is {has logic to handle query or mutation operation}

// Applo client store the data while when the 
// user vist 2 time (chache krleta ha)

import ApolloServer from 'apollo-server'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import Jwt  from 'jsonwebtoken'
import typeDefs from './scehema.js'
import './backend/Db/conn'
// models 
import './backend/Db/models/UserSchema'
import './backend/Db/models'
import resolvers from './resolvers.js'

// middlewaare logic
const context = ({req})=>{
    const {authorization} = req.headers
    if(authorization){
    const {userId} = Jwt.verify(authorization,SECRET_TOKEN)
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
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({ url }) => {
console.log(`server ready at ${url}`);
});
