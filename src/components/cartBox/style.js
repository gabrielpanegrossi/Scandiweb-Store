import styled from 'styled-components';

export const CartItemList = styled.ul`
  max-height: ${(props) => (props.isContainer ? 'auto' : '325px')};
  margin-bottom: 32px;
  ${(props) => {
    if (props.isContainer) {
      return '';
    }

    return `overflow: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #eee;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
  }`;
  }};

  > li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 25px 0 20px;
    border-top: ${(props) => (props.isContainer ? '1px solid #E5E5E5' : 'none')};

    > div:first-child {
      width: 100%;
      display: flex;
      justify-content: space-between;

      > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > div {
          margin-bottom: ${(props) => (props.isContainer ? '12px' : '5px')};

          h5 {
            font-size: 16px;
            ${(props) => (props.isContainer ? '' : 'font-weight: 300;')};
          }

          h5:last-child {
            ${(props) => (props.isContainer ? 'font-weight: 400; margin-top: 16px;' : '')};
          }
        }
        span {
          border-top: ${(props) => (props.isContainer ? 'bold' : '500')};
          font-size: 16px;
        }

        ul {
          display: flex;
          margin-top: 27px;

          li:not(:last-child) {
            margin-right: 8px;
          }
        }
      }
    }

    > div:last-child {
      width: 40%;
      max-height: ${(props) => (props.isContainer ? '225px' : 'auto')};

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
  }
`;

export const quantitySelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;

  button {
    border: 1px solid #1d1f22;
    background: transparent;
    height: 24px;
    width: 24px;
  }
`;
