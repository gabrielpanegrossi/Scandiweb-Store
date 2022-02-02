import React from 'react';

import * as S from './style';

export default class LinkButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<S.linkButton
				className={this.props.className}
				onClick={this.props.onClickFunction}
			>
				{this.props.children}
			</S.linkButton>
		);
	}
}
