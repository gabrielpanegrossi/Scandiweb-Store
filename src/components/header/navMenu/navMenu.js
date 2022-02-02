import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';

class NavMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuArr: [],
			selectedMenu: this.props.selectedOption,
		};
	}

	selectNavCategory(e) {
		const categoriesArr = document.querySelectorAll('.category-option');

		for (const category of categoriesArr) {
			if (category === e.target) {
				category.classList.add('selected');
			} else {
				category.classList.remove('selected');
			}
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.menuOptions !== prevProps.menuOptions) {
			this.setState({ menuArr: this.props.menuOptions });
		}
	}

	render() {
		const { menuArr, selectedMenu } = this.state;

		return (
			<S.NavContainer>
				<ul>
					{menuArr.map((el, index) => (
						<li key={index}>
							<Link
								to={`/category/${el.name}`}
								className={`category-option ${
									el.name === selectedMenu ? 'selected' : ''
								}`}
								onClick={this.selectNavCategory}
							>
								{el.name}
							</Link>
						</li>
					))}
				</ul>
			</S.NavContainer>
		);
	}
}

export default NavMenu;
