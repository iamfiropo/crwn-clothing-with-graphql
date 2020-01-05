import React from 'react';
import { Mutation } from 'react-apollo';

import CollectionItem from './collection-item.component';
import { ADD_ITEM_TO_CART } from '../../graphql/mutation';

const CollectionItemContainer = props => (
  <Mutation mutation={ADD_ITEM_TO_CART}>
    {
      addItemToCart => (
        <CollectionItem { ...props } addItem={item => addItemToCart({ variables: { item } })} />
      )
    }
  </Mutation>
);

export default CollectionItemContainer;