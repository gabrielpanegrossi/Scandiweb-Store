import React from 'react';
import propTypes from 'prop-types';

import getProductsByCategory from '../../services/database/getProductsByCategory';
import productListWithId from '../../services/helper/productListWithId';
import ProductList from '../../components/productList/index';
import * as S from './style';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {
        name: '',
        products: [],
      },
    };
  }

  componentDidMount() {
    this.checkUrlParams();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (match.params.categoryName !== prevProps.match.params.categoryName) {
      this.checkUrlParams();
    }
  }

  async queryCategory(category) {
    const categoryInformation = await getProductsByCategory(category);
    const categoryResult = {
      name: categoryInformation.category.name,
      products: await productListWithId(categoryInformation),
    };

    this.setState({
      category: categoryResult,
    });
  }

  checkUrlParams() {
    const { match } = this.props;
    const params = match.params.categoryName || 'all';

    this.queryCategory(params);
  }

  render() {
    const { category } = this.state;

    return (
      <S.Main>
        <S.MainHandler>
          <h2>{category.name}</h2>
          <ProductList list={category.products} />
        </S.MainHandler>
      </S.Main>
    );
  }
}

Category.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({ categoryName: propTypes.string.isRequired }).isRequired,
  }).isRequired,
};
