import styled from 'styled-components';

const CurrencyMenuTrigger = styled.li`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 45px;
  cursor: pointer;

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

export default CurrencyMenuTrigger;
