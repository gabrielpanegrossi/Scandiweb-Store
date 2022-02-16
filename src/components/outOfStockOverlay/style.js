import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffff;
  opacity: 50%;
  z-index: 1;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 170px;
    width: 100%;
    text-transform: uppercase;
    color: #8d8f9a;
    font-size: 24px;
  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`;

export default Container;
