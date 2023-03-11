import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      email
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      email
      order_history
    }
  }
`;

export const QUERY_MENU_ITEMS = gql`
    query allMenuItems {
        allMenuItems {
            _id
            product_name
            price
            image
        }
    }    
`

export const GET_ME = gql`
{
  me {
    _id
    name
    email
    order_history {
      product_name
      price
    }
  }
}
`;