import styled from 'styled-components';

const ProductCardContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  gap: 25px;

  a {
    width: 100%;
  }

  &:hover {
    background: #ffffff;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }

  h3,
  span {
    color: #1d1f22;
    font-size: 18px;
  }

  h3 {
    font-weight: 300;
  }

  span {
    font-weight: 500;
  }

  .img-handler {
    position: relative;
    width: 100%;
    height: 170px;
    margin-bottom: 24px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  button {
    position: absolute;
    z-index: 3;
    top: 65%;
    right: 64px;
  }

  @media (min-width: 769px) {
    .img-handler {
      height: 338px;
    }
  }
`;
export default ProductCardContainer;
