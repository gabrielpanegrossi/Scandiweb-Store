import React from 'react';

import AddToCardButton from '../addToCartButton/addToCardButton';
import * as S from './style';

export default class ProductPreferences extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { productInfo } = this.props;

		return (
			<S.ProductPreferencesContainer>
				<div>
					<h2>{productInfo && productInfo.name}</h2>
					<div
						dangerouslySetInnerHTML={{
							__html: productInfo && productInfo.description,
						}}
					></div>
				</div>
				<div></div>
				<div></div>
				<AddToCardButton rectangle={true} />
			</S.ProductPreferencesContainer>
		);
	}
}
