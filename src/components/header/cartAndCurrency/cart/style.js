import styled from 'styled-components';

export const CartBoxTrigger = styled.li`
  > div:first-child button {
    cursor: pointer;
    border: none;
    background: none;
  }

  .cart-box {
    position: absolute;
    width: 100%;
    padding: 08px 16px 20px 16px;
    top: 100%;
    right: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
    background: #ffffff;

    h4 {
      span {
        font-weight: 400;
      }
    }

    > div a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 140px;
      height: 43px;
      text-transform: uppercase;
    }

    > div a:first-child {
      border: 1px solid #1d1f22;
      color: #1d1f22;
    }

    > div a:last-child {
      border: 1px solid #5ece7b;
      background: #5ece7b;
      color: #ffffff;
    }
  }

  &:hover,
  &:focus,
  &:active {
    .cart-box {
      z-index: 10;
      opacity: 1;
      pointer-events: auto;
    }
  }

  @media (min-width: 769px) {
    position: relative;

    .cart-box {
      padding-top: 38px;
      top: 50px;
      width: 325px;
      max-width: 325px;
    }
  }
`;

export const cartTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 40px;
`;

export const cartActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
