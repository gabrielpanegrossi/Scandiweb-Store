import React from 'react';
import customHooks from '../../hooks';

import ProductList from '../../components/productList/index';
import * as S from './style';

export default class Category extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentCategory: '',
			category: {
				name: '',
				products: [],
			},
			pageParams: this.props.match.params.categoryName,
		};
	}

	async queryCategory(category) {
		const categoryInformation = await customHooks
			.getProductsByCategoryName(category)
			.then((data) => data.category);

		this.setState({ category: categoryInformation });
	}

	checkUrlParams() {
		const params = this.props.match.params.categoryName;

		if (params !== this.state.currentCategory) {
			this.queryCategory(params);
			this.setState({ currentCategory: params });
		}
	}

	componentDidMount() {
		this.checkUrlParams();
	}

	componentDidUpdate() {
		this.checkUrlParams();
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
