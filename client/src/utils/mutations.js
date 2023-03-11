import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    profile {
      _id
      name
    }
  }
}
`;

export const ADD_PROFILE = gql`
mutation addProfile($name: String!, $email: String!, $password: String!) {
  addProfile(name: $name, email: $email, password: $password) {
    token
    profile {
      _id
      name
      email
    }
  }
}
`;

export const REMOVE_PROFILE = gql`
mutation removeProfile($profileId: ID!) {
  removeProfile(profileId: $profileId) {
    profile {
      _id
      name
      email
      order_history
    }
  }
}
`;

export const ADD_HISTORY = gql`
mutation addToHistory($input: [ProductInput]) {
  addToHistory(input: $input) {
    email
    name
    order_history {
      price
      product_name
    }
  }
}
`;

export const ADD_MENU = gql`
mutation addToMenu($productName: String!, $price: Int!) {
  addToMenu(product_name: $productName, price: $price) {
    _id
    price
    product_name
    image
  }
}
`;

export const REMOVE_MENU = gql`
mutation removeFromMenu($productId: ID!) {
  removeFromMenu(productId: $productId) {
    _id
    price
    product_name
    image
  }
}
`;