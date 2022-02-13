/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import getCurrencyFromList from '../../../services/currency/getCurrencyFromList';
import AddToCardButton from '../../addToCartButton';
import ProductCardContainer from './style';

export default class ProductCard extends React.Component {
  render() {
    const { productInformation, currentCurrency } = this.props;

    return (
      <ProductCardContainer>
        <Link to={`/product/${productInformation.id}`}>
          {productInformation.inStock ? (
            <div className='out-of-stock'>
              <span>out of stock</span>
            </div>
          ) : null}
          <div className='img-handler'>
            <img src={productInformation.gallery[0]} alt='' />
          </div>
          <div>
            <h3>{productInformation.name}</h3>
            <span>{getCurrencyFromList(productInformation.prices, currentCurrency.label)}</span>
          </div>
        </Link>
        {!productInformation.inStock && !productInformation.attributes.length > 0 ? (
          <AddToCardButton
            productAttributesAreFilled
            addToCartObject={{ id: productInformation.id }}
          />
        ) : null}
      </ProductCardContainer>
    );
  }
}

ProductCard.propTypes = {
  productInformation: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    prices: propTypes.arrayOf(propTypes.shape({})).isRequired,
    attributes: propTypes.arrayOf(propTypes.shape({})).isRequired,
    gallery: propTypes.arrayOf(propTypes.string).isRequired,
    inStock: propTypes.bool.isRequired,
  }).isRequired,
  currentCurrency: propTypes.shape({ label: propTypes.string.isRequired }).isRequired,
};
