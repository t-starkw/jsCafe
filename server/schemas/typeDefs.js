const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String!
    email: String!
    password: String!
    order_history: [Product]
  }

  type Product {
    _id: ID
    product_name: String
    price: Int
  }

  type Auth {
    token: ID!
    profile: Profile
}

input ProductInput {
  _id: ID
  product_name: String
  price: Int

}

  type Query {
    profile(profileId: ID!): Profile
    profiles: [Profile]!
    me: Profile
    allMenuItems: [Product]!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addProfile(name: String!, email: String!, password: String!): Auth
    removeProfile(profileId: ID!): Profile
    addToHistory(input: [ProductInput]): Profile
    addToMenu(product_name: String!, price: Int!, image: String): Product
    removeFromMenu(productId: ID!): Product
  }
`;

module.exports = typeDefs;