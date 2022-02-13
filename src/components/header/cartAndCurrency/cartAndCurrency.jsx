/* eslint-disable react/no-did-update-set-state */
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BsCart2, BsChevronDown } from 'react-icons/bs';
import CartBox from '../../cartBox/cartBox';
import getCurrencyFromList from '../../../services/currency/getCurrencyFromList';

import * as S from './style';
import GeneralContext from '../../../context/generalContext';

export default class CartAndCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyArr: [],
      currentCurrency: '$',
    };
  }

  componentDidMount() {
    const { currencyOptions } = this.props;
    this.setState({ currencyArr: currencyOptions });
  }

  componentDidUpdate(prevProps) {
    const { currencyOptions } = this.props;
    if (currencyOptions !== prevProps.currencyOptions) {
      this.setState({ currencyArr: currencyOptions });
    }
  }

  changeSelectedCurrency(currencyLabel) {
    const { changeSelectedCurrency } = this.context;
    changeSelectedCurrency(currencyLabel);
  }

  render() {
    const { currentCurrency, currencyArr } = this.state;
    const { toggleOpacityOverContent, cartItems, selectedCurrency } = this.context;

    return (
      <S.CartAndCurrencyContainer className='currency-and-cart-menu'>
        <ul>
          <li className='currency-menu-trigger'>
            <div className='currency-wrapper'>
              <span>{currentCurrency}</span>
              <BsChevronDown />
            </div>
            <div className='currency-submenu'>
              <ul>
                {currencyArr?.map((el) => (
                  <li key={el.label}>
                    <button
                      onClick={() => {
                        this.changeSelectedCurrency({ label: el.label, symbol: el.symbol });
                        this.setState({ currentCurrency: el.symbol });
                      }}
                      type='button'
                    >
                      <span>{el.symbol}</span>
                      <span>{el.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li
            className='cart-box-trigger'
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
                  {cartItems.length > 0
                    ? `${selectedCurrency.label} ${cartItems
                        .map(
                          (item) =>
                            item.quantity *
                            getCurrencyFromList(
                              item.productObj.prices,
                              selectedCurrency.label,
                              true
                            )
                        )
                        .reduce((acc, current) => acc + current)
                        .toFixed(2)}`
                    : 0}
                </span>
              </S.cartTotalContainer>
              <S.cartActionsContainer>
                <Link to='/myCart'>view bag</Link>
                <Link to='/checkout'>checkout</Link>
              </S.cartActionsContainer>
            </div>
          </li>
        </ul>
      </S.CartAndCurrencyContainer>
    );
  }
}

CartAndCurrency.propTypes = { currencyOptions: propTypes.arrayOf(propTypes.shape({})).isRequired };
CartAndCurrency.contextType = GeneralContext;
