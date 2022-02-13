import styled from 'styled-components';

export const ProductContainer = styled.main`
  section:first-child {
    margin-bottom: 80px;
  }

  @media (min-width: 1024px) {
    display: flex;
    gap: 120px;

    section:first-child {
      margin-bottom: 0;
    }
  }
`;

export default ProductContainer;
