export const typeDefs = `#graphql
type User { # schema definition
    id: ID!
    username: String!
    email: String!
    password: String!
    posts: [Post!]! 
}

type Post {
    id: ID!
    title: String!
    content: String!
    createdAt: String!
    tags: [Tag!]! 
}

type Tag {
    id: ID!
    name: String!
    posts: [Post!]! # !agar relasi tdk null
}

type Query {
    # [] isi field query yang ngebalikin tipe yang sudah didefinisikan pada schema
    users: [User!]!    
    posts: [Post!]!    
    tags: [Tag!]!          
}
`;
