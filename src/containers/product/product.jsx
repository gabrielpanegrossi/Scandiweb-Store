/* eslint-disable react/no-unused-state */
import React from 'react';
import propTypes from 'prop-types';

import getProductById from '../../services/database/getProductById';
import ProductImageShowCase from '../../components/productImageShowCase';
import ProductPreferences from '../../components/productPreferences';
import * as S from './style';

export default class Product extends React.Component {
  constructor(props) {
    super(props);

    const { match } = this.props;

    this.state = {
      productInfo: {
        gallery: [],
        name: '',
        description: '',
      },
      productPreferences: {
        id: match.params.productId,
      },
      attributesSet: 0,
      attributesToBeSet: undefined,
      productAttributesAreFilled: false,
    };
  }

  componentDidMount() {
    this.queryProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    const { attributesSet, attributesToBeSet, productAttributesAreFilled } = this.state;

    if (prevState.attributesSet !== attributesSet) {
      if (attributesSet === attributesToBeSet && productAttributesAreFilled === false) {
        this.toggleAddToCartButton();
      }
    }
  }

  setProductPreferences = (attributeId, optionId) => {
    const { productInfo, productPreferences, attributesToBeSet, attributesSet } = this.state;

    productPreferences[attributeId] = optionId;

    if (attributesToBeSet !== productInfo.attributes.length) {
      this.setState({
        attributesToBeSet: productInfo.attributes.length,
      });
    }

    if (attributesSet < productInfo.attributes.length) {
      this.setState({
        attributesSet: attributesSet + 1,
      });
    }
  };

  toggleAddToCartButton() {
    const { attributesSet, attributesToBeSet } = this.state;
    this.setState({
      productAttributesAreFilled: attributesSet === attributesToBeSet,
    });
  }

  async queryProduct() {
    const { match } = this.props;
    const queryResult = await getProductById(match.params.productId);
    this.setState({ productInfo: queryResult.product });
  }

  render() {
    const { productInfo, productAttributesAreFilled, productPreferences } = this.state;

    return (
      <S.ProductContainer>
        <ProductImageShowCase imgList={productInfo.gallery} productName={productInfo.name} />
        <ProductPreferences
          productInfo={productInfo}
          productAttributesAreFilled={productAttributesAreFilled}
          setPreferencesFunction={this.setProductPreferences}
          productPreferences={productPreferences}
        />
      </S.ProductContainer>
    );
  }
}

Product.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({ productId: propTypes.string.isRequired }).isRequired,
  }).isRequired,
};
