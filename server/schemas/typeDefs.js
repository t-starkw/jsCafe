const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String!
    email: String!
    password: String!
  }

  type Query {
    profile(profileId: ID!): Profile
    profiles: [Profile]!
  }

  type Mutation {
    newProfile(name: String!, email: String!, password: String!): Profile
  }
`;

module.exports = typeDefs;
