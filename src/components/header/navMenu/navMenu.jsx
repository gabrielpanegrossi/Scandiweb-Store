/* eslint-disable react/no-did-update-set-state */
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import * as S from './style';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    const { selectedOption } = this.props;

    this.state = {
      menuArr: [],
      selectedMenu: selectedOption,
    };
  }

  componentDidUpdate(prevProps) {
    const { menuOptions, selectedOption } = this.props;

    if (menuOptions !== prevProps.menuOptions) {
      this.setState({ menuArr: menuOptions });
    }

    if (selectedOption !== prevProps.selectedOption) {
      this.setState({ selectedMenu: selectedOption });
    }
  }

  selectNavCategory(e) {
    const categoriesArr = document.querySelectorAll('.category-option');

    categoriesArr.forEach((category) => {
      if (category === e.target) {
        category.classList.add('selected');
      } else {
        category.classList.remove('selected');
      }
    });

    return this;
  }

  render() {
    const { menuArr, selectedMenu } = this.state;

    return (
      <S.NavContainer>
        <ul>
          {menuArr.map((el) => (
            <li key={el.name}>
              <Link
                to={`/category/${el.name}`}
                className={`category-option ${el.name === selectedMenu ? 'selected' : ''}`}
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

NavMenu.propTypes = {
  selectedOption: propTypes.string.isRequired,
  menuOptions: propTypes.arrayOf(propTypes.shape({ name: propTypes.string })).isRequired,
};
