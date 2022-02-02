import React from 'react';

import * as S from './style';
import CurrencyContext from '../../context/currencyContext';
import ProductCard from './productCard';

export default class ProductList extends React.Component {
	static contextType = CurrencyContext;

	render() {
		const { selectedCurrency } = this.context;
		const { list } = this.props;

		return (
			<S.ProductListContainer>
				{list.map((el, index) => (
					<ProductCard
						key={index}
						productInformation={el}
						currentCurrency={selectedCurrency}
					/>
				))}
			</S.ProductListContainer>
		);
	}
}
