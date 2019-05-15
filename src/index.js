const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

let ports = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Some graphql stuff',
        url: 'www.howtographql.com'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Some graphql stuff 2',
        url: 'www.howtographql2.com'
    }
]

let idCount = ports.length

// resolvers for manipulating data
const resolvers = {
    //Query for reading/fetching data
    Query,
    //Mutation for writing data
    Mutation
}

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  // typeDefs,
  resolvers,
})


server.start(() => console.log(`Server is running on http://localhost:4000`))