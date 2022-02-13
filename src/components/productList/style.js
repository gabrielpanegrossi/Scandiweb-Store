import styled from 'styled-components';

const ProductListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 280px));
  flex-wrap: wrap;
  justify-content: space-between;

  li:not(:last-child) {
    margin-bottom: 30px;
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(auto-fill, minmax(386px, 386px));
    column-gap: 40px;
    row-gap: 100px;

    li {
      margin-bottom: 0;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export default ProductListContainer;
