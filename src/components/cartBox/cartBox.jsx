/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import * as S from './style';
import GeneralContext from '../../context/generalContext';
import getCurrencyFromList from '../../services/currency/getCurrencyFromList';
import AttributeHandler from '../attributeHandler/attributeHandler';

export default class CartBox extends React.Component {
  render() {
    const { selectedCurrency, cartItems, increaseItemQuantityOrAddItem, decreaseCartItemQuantity } =
      this.context;
    const { isContainer } = this.props;

    return (
      <S.CartItemList className='item-row' isContainer={isContainer}>
        {cartItems.length > 0 &&
          cartItems.map((item, index) => (
            <li key={`${item.id + index}`}>
              <div>
                <div>
                  <div>
                    <h5>{item.productObj.name}</h5>
                    <h5>{item.productObj.brand}</h5>
                  </div>
                  <span>
                    {`${selectedCurrency.symbol} `}
                    {getCurrencyFromList(item.productObj.prices, selectedCurrency.label, true)}
                  </span>
                  {item.productObj.attributes && (
                    <ul>
                      {item.productObj.attributes.map((attr) => (
                        <AttributeHandler
                          key={attr.id}
                          attribute={attr}
                          outOfStock={item.productObj.inStock}
                          selected={item}
                        />
                      ))}
                    </ul>
                  )}
                </div>
                <S.quantitySelector>
                  <button type='button' onClick={() => increaseItemQuantityOrAddItem(item)}>
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button type='button' onClick={() => decreaseCartItemQuantity(item)}>
                    -
                  </button>
                </S.quantitySelector>
              </div>
              <div>
                <Link to={`/product/${item.id}`}>
                  <img src={item.productObj.gallery[0]} alt={item.productObj.name} />
                </Link>
              </div>
            </li>
          ))}
      </S.CartItemList>
    );
  }
}

CartBox.contextType = GeneralContext;

CartBox.propTypes = {
  isContainer: propTypes.bool,
};

CartBox.defaultProps = {
  isContainer: false,
};
