import React from 'react';
import { Query, Mutation } from 'react-apollo';

import CartDropdown from './cart-dropdown.component';
import { GET_CART_ITEMS } from '../../graphql/query';
import { TOGGLE_CART_HIDDEN } from '../../graphql/mutation';

const CartDropdownContainer = () => (
  <Query query={GET_CART_ITEMS}>
    {
      ({ data: { cartItems } }) => (
        <Mutation mutation={TOGGLE_CART_HIDDEN}>
          {
            toggleCartHidden => (
              <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
            )
          }
        </Mutation>
      )
    }
  </Query>
);

export default CartDropdownContainer;