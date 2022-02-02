import React from 'react';

import getProductById from '../../hooks/getProductById';
import ProductImageShowCase from '../../components/productImageShowCase';
import ProductPreferences from '../../components/productPreferences';
import * as S from './style';

export default class Product extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			productInfo: {
				gallery: [],
				name: '',
				description: '',
			},
		};
	}

	async queryProduct() {
		const queryResult = await getProductById(this.props.match.params.productId);

		this.setState({ productInfo: queryResult.product });
	}

	componentWillMount() {
		this.queryProduct();
	}

	render() {
		const { productInfo } = this.state;

		return (
			<S.ProductContainer>
				<ProductImageShowCase
					imgList={productInfo.gallery}
					productName={productInfo.name}
				/>
				<ProductPreferences productInfo={productInfo} />
			</S.ProductContainer>
		);
	}
}
