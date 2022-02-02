import React from 'react';

import * as S from './style';

export default class ProductImageShowCase extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imageList: [],
			productName: '',
			selectedImage: '',
		};
	}

	changeSelectedImg(url) {
		this.setState({
			selectedImage: url,
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.imgList !== prevProps.imgList) {
			if (Array.isArray(this.props.imgList)) {
				this.setState({
					imageList: this.props.imgList,
					selectedImage: this.props.imgList[0],
				});
			}
		}

		if (this.props.productName !== prevProps.productName) {
			this.setState({ productName: this.props.productName });
		}
	}

	render() {
		const { selectedImage, productName, imageList } = this.state;

		return (
			<S.ShowCaseContainer>
				<S.ShowCaseList>
					{imageList.map((img, index) => (
						<li key={index}>
							<img
								src={img}
								alt={productName}
								onClick={() => this.changeSelectedImg(img)}
							/>
						</li>
					))}
				</S.ShowCaseList>
				<div>
					<img src={selectedImage} alt={productName} />
				</div>
			</S.ShowCaseContainer>
		);
	}
}
