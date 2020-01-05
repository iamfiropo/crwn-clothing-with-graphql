import { gql } from 'apollo-boost';

export const TOGGLE_CART_HIDDEN = gql`
mutation ToggleCartHidden {
  toggleCartHidden @client
}
`;

export const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;