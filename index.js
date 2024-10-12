import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs, resolvers } from './graphql/index.js';

const app = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(app, {
  listen: { port: 9000 },
});

console.log(`
    =====================================

            L I S T E N  T O  P O R T 
            ${url} 😎

    =====================================
`);
