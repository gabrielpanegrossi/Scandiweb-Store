/* eslint-disable react/no-danger */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import propTypes from 'prop-types';

import CurrencyContext from '../../context/currencyContext';
import getCurrencyFromList from '../../services/currency/getCurrencyFromList';
import AttributeHandler from '../attributeHandler/attributeHandler';
import AddToCardButton from '../addToCartButton/addToCardButton';
import ProductPreferencesContainer from './style';

export default class ProductPreferences extends React.Component {
  render() {
    const { selectedCurrency } = this.context;
    const { productInfo, productAttributesAreFilled, setPreferencesFunction, productPreferences } =
      this.props;
    return (
      <ProductPreferencesContainer>
        <div>
          <h2>{productInfo && productInfo.name}</h2>
          <h2>{productInfo && productInfo.brand}</h2>
        </div>
        {productInfo.attributes &&
          productInfo.attributes.map((attr) => (
            <AttributeHandler
              key={attr.id}
              attribute={attr}
              outOfStock={productInfo.inStock}
              setPreferencesFunction={setPreferencesFunction}
            />
          ))}
        <div>
          <div>
            <h4>Price:</h4>
            <span>{getCurrencyFromList(productInfo.prices, selectedCurrency.label)}</span>
          </div>
          <AddToCardButton
            rectangle
            outOfStock={productInfo.inStock}
            productAttributesAreFilled={
              productInfo.attributes?.length ? productAttributesAreFilled : true
            }
            addToCartObject={productPreferences}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: productInfo && productInfo.description,
          }}
        />
      </ProductPreferencesContainer>
    );
  }
}

ProductPreferences.contextType = CurrencyContext;
ProductPreferences.propTypes = {
  productAttributesAreFilled: propTypes.bool.isRequired,
  setPreferencesFunction: propTypes.func.isRequired,
  productPreferences: propTypes.shape([]).isRequired,
  productInfo: propTypes.shape({
    name: propTypes.string,
    brand: propTypes.string,
    prices: propTypes.arrayOf(propTypes.shape({})),
    inStock: propTypes.bool,
    description: propTypes.string,
    attributes: propTypes.arrayOf(propTypes.shape({})),
  }).isRequired,
};
