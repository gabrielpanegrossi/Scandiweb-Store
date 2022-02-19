import styled from 'styled-components';

export const CartAndCurrencyContainer = styled.div`
  &,
  > ul,
  & > ul > li {
    height: 100%;
    display: flex;
    align-items: center;
  }

  > ul {
    gap: 22px;

    a {
      height: fit-content;
    }
  }

  @media (min-width: 769px) {
    width: 30%;
  }
`;

export const CurrencyMenuTrigger = styled.li`
  position: relative;
  width: 40px;

  .currency-wrapper {
    display: flex;
    align-items: flex-end;
    height: fit-content;
    gap: 10px;

    svg {
      width: 10px;
      margin-bottom: 1px;
      height: fit-content;
      transition: transform 0.2s ease-in-out;
      transform: none;
    }
  }

  .currency-submenu {
    position: absolute;
    top: 100%;
    left: -20px;
    transition: opacity 0.2s ease-in-out;
    opacity: 0;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    background: #ffffff;
    pointer-events: none;

    ul {
      display: flex;
      flex-direction: column;

      li {
        button {
          display: flex;

          width: 100%;
          height: 100%;
          padding: 20px 40px 20px 20px;
          border: none;
          background: transparent;

          span:first-child {
            margin-right: 5px;
          }
        }

        &:hover {
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }

  &:hover,
  &:focus,
  &:active {
    .currency-wrapper svg {
      transform: scaleY(-1);
    }

    .currency-submenu {
      opacity: 1;
      z-index: 10;
      pointer-events: auto;
    }
  }
`;

export const CartBoxTrigger = styled.li`
  > div:first-child button {
    cursor: pointer;
    border: none;
    background: none;
  }

  .cart-box {
    position: absolute;
    width: 100%;
    padding: 8px 16px 20px 16px;
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
