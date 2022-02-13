/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import CartContainer from './style';
import CartBox from '../../components/cartBox/cartBox';

export default class Cart extends React.Component {
  render() {
    return (
      <CartContainer>
        <h2>Cart</h2>
        <CartBox isContainer />
      </CartContainer>
    );
  }
}
