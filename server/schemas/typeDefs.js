const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String!
    email: String!
    password: String!
    order_history: [String!]
  }



  type Auth {
    token: ID!
    profile: Profile
}

  type Query {
    profile(profileId: ID!): Profile
    profiles: [Profile]!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addProfile(name: String!, email: String!, password: String!): Profile
    removeProfile(profileId: ID!): Profile
    addToHistory(profileId: ID!, order: String!): Profile
  }
`;

module.exports = typeDefs;
