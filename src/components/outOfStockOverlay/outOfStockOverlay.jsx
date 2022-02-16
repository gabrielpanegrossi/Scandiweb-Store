/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Container from './style';

export default class OutOfStockOverlay extends React.Component {
  render() {
    return (
      <Container>
        <span>out of stock</span>
      </Container>
    );
  }
}
