/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import Main from './style';

export default class Home extends React.Component {
  render() {
    return (
      <Main>
        <h2>Welcome to ScandiStore!</h2>
        <p>Please, feel free to navigate through a category on our menu!</p>
      </Main>
    );
  }
}
