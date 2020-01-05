import React from "react";
import { Mutation, Query } from "react-apollo";

import CartIcon from "./cart-icon.component";
import { TOGGLE_CART_HIDDEN } from "../../graphql/mutation";
import { GET_ITEM_COUNT } from "../../graphql/query";

const CartIconContainer = () => (
  <Query query={GET_ITEM_COUNT}>
    {({ data: { itemCount } }) => (
      <Mutation mutation={TOGGLE_CART_HIDDEN}>
        {toggleCartHidden => (
          <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
        )}
      </Mutation>
    )}
  </Query>
);

export default CartIconContainer;
