/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import propTypes from 'prop-types';

import ProductListContainer from './style';
import CurrencyContext from '../../context/currencyContext';
import ProductCard from './productCard';

export default class ProductList extends React.Component {
  render() {
    const { selectedCurrency } = this.context;
    const { list } = this.props;

    return (
      <ProductListContainer>
        {list.map((el) => (
          <ProductCard key={el.name} productInformation={el} currentCurrency={selectedCurrency} />
        ))}
      </ProductListContainer>
    );
  }
}

ProductList.propTypes = {
  list: propTypes.arrayOf(propTypes.shape({})).isRequired,
};
ProductList.contextType = CurrencyContext;
