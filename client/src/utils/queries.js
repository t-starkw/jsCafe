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
        menu_items {
            _id
            product_name
            price
        }
    }    
`