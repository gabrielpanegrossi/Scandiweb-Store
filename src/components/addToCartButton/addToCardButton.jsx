/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import propTypes from 'prop-types';

import { BsCart2 } from 'react-icons/bs';
import AddToCartButtonContainer from './style';
import CartContext from '../../context/cartContext';
import getProductById from '../../services/database/getProductById';

export default class AddToCardButton extends React.Component {
  AddToCard = async () => {
    const { addToCartObject } = this.props;
    const { insertCartItem } = this.context;
    const { product } = await getProductById(addToCartObject.id);

    insertCartItem({
      ...addToCartObject,
      quantity: 0,
      productObj: product,
    });
  };

  render() {
    const { rectangle, outOfStock, productAttributesAreFilled } = this.props;
    return (
      <AddToCartButtonContainer
        rectangle={rectangle}
        disabled={outOfStock || !productAttributesAreFilled}
        onClick={this.AddToCard}
      >
        {rectangle ? 'ADD TO CART' : <BsCart2 />}
      </AddToCartButtonContainer>
    );
  }
}

AddToCardButton.propTypes = {
  addToCartObject: propTypes.shape({ id: propTypes.string }),
  rectangle: propTypes.bool,
  outOfStock: propTypes.bool,
  productAttributesAreFilled: propTypes.bool,
};

AddToCardButton.defaultProps = {
  rectangle: false,
  outOfStock: false,
  productAttributesAreFilled: false,
  addToCartObject: {},
};

AddToCardButton.contextType = CartContext;
