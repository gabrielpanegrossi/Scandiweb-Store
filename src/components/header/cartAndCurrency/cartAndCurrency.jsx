/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import propTypes from 'prop-types';

import Currency from './currency';
import Cart from './cart';

import * as S from './style';
import CurrencyContext from '../../../context/currencyContext';

export default class CartAndCurrency extends React.Component {
  render() {
    const { currencyOptions } = this.props;

    return (
      <S.CartAndCurrencyContainer className='currency-and-cart-menu'>
        <ul>
          <Currency currencyOptions={currencyOptions} />
          <Cart />
        </ul>
      </S.CartAndCurrencyContainer>
    );
  }
}

CartAndCurrency.propTypes = { currencyOptions: propTypes.arrayOf(propTypes.shape({})).isRequired };
CartAndCurrency.contextType = CurrencyContext;
