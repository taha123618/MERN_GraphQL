// In GraphQL 
// Query is {get the data}
// Mutation is {to post , delete , update data}
// Resolver(calculation part) is {has logic to handle query or mutation operation}

// Applo client store the data while when the 
// user vist 2 time (chache krleta ha)

import {ApolloServer} from 'apollo-server'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import typeDefs from './scehema.js'
import './Db/conn'
// models 
import './Db/models/UserSchema'
import './Db/models/'
import resolvers from './resolvers.js'




// listen to the server 
const server = new ApolloServer({
    typeDefs,
    resolvers,
    // playground 
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({ url }) => {
console.log(`server ready at ${url}`);
});
