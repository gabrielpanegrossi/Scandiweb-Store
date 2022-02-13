import styled from 'styled-components';

const AddToCartButtonContainer = styled.button`
  height: 52px;
  width: ${(props) => (props.rectangle ? '100%' : '52px')};
  background-color: #5ece7b;
  border: 1px solid #5ece7b;
  border-radius: ${(props) => (props.rectangle ? 'none' : '50%')};
  color: white;
  transition: all 0.2s ease-in-out;

  :disabled {
    opacity: 0.7;
  }

  :hover {
    background-color: #5ec67b;
    border: 1px solid #5ec67b;
  }

  svg {
    font-size: 24px;
  }
`;

export default AddToCartButtonContainer;
