import styled from 'styled-components';

const ProductPreferencesContainer = styled.section`
  max-width: 292px;
  width: 100%;

  > div {
    margin-bottom: 40px;

    div {
      margin-bottom: 20px;

      span {
        font-size: 24px;
        font-weight: 700;
      }
    }
  }

  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  h2 + h2 {
    font-weight: 400;
  }

  h4 {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }

  p:not(:last-child) {
    margin-bottom: 20px;
  }

  > div:last-child {
    ul {
      list-style: initial;

      li:not(:last-child) {
        margin-bottom: 15px;
      }
    }

    span {
      font-weight: 400;
    }
  }
`;

export default ProductPreferencesContainer;
