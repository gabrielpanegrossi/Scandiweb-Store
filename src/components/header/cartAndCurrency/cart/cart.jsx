/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';

import { BsCart2 } from 'react-icons/bs';
import CartBox from '../../../cartBox/cartBox';
import getPriceAndCurrencyFromList from '../../../../services/currency/getPriceAndCurrencyFromList';

import * as S from './style';
import GeneralContext from '../../../../context/generalContext';

export default class Cart extends React.Component {
  render() {
    const { toggleOpacityOverContent, cartItems, selectedCurrency } = this.context;

    return (
      <S.CartBoxTrigger
        onMouseEnter={toggleOpacityOverContent}
        onMouseLeave={toggleOpacityOverContent}
      >
        <div>
          <button type='button'>
            <BsCart2 />
          </button>
        </div>
        <div className='cart-box'>
          <h4>
            <strong>My Bag</strong>
            <span>
              ,{' '}
              {cartItems.length > 0
                ? `${cartItems
                    .map((item) => item.quantity)
                    .reduce((acc, current) => acc + current)}`
                : 0}{' '}
              items
            </span>
          </h4>
          <CartBox />
          <S.cartTotalContainer>
            <span>Total</span>
            <span>
              {`${selectedCurrency.symbol}${
                cartItems.length > 0
                  ? `${cartItems
                      .map(
                        (item) =>
                          item.quantity *
                          getPriceAndCurrencyFromList(
                            item.productObj.prices,
                            selectedCurrency,
                            true
                          )
                      )
                      .reduce((acc, current) => acc + current)
                      .toFixed(2)}`
                  : 0
              }`}
            </span>
          </S.cartTotalContainer>
          <S.cartActionsContainer>
            <Link to='/myCart'>view bag</Link>
            <Link to='/checkout'>checkout</Link>
          </S.cartActionsContainer>
        </div>
      </S.CartBoxTrigger>
    );
  }
}

Cart.contextType = GeneralContext;
