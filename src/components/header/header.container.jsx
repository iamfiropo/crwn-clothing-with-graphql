import React from 'react';
import { Query } from 'react-apollo';

import Header from './header.component';
import { GET_CART_HIDDEN } from '../../graphql/query';

const HeaderContainer = () => (
  <Query query={GET_CART_HIDDEN}>
    {({ data: {cartHidden} }) => <Header hidden={cartHidden} />}
  </Query>
);

export default HeaderContainer;