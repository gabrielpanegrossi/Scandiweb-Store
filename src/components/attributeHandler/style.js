import styled from 'styled-components';

export const AtributeHandlerContainer = styled.div`
  h4 {
    margin-bottom: 5px;
  }
`;

export const AtributeBoxContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 769px) {
    gap: 12px;
  }
`;

export const AtributeOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 45px;
  max-height: 45px;
  width: 100%;
  max-width: 45px;
  min-width: 45px;
  margin-bottom: 12px;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 12px;
  }

  @media (min-width: 769px) {
    max-width: 63px;
    margin-bottom: 0;

    :not(:last-child) {
      margin-right: 0;
    }
  }
`;

export const AtributeText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 100%;
  color: ${(props) => (props.outOfStock ? '#A6A6A6' : '#292929')};
  background: ${(props) => (props.isColor ? props.isColor : 'auto')};
  border: 1px solid ${(props) => (props.outOfStock ? '#A6A6A6' : '#a6a6a6')};

  &.selected {
    border: 2px solid white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #1d1f22;
    ${(props) => (props.isColor ? '' : 'background:#1D1F22;color:#ffffff;')};
  }
`;

export const CartAtributeOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  min-height: 24px;
  max-height: fit-content;
  width: 100%;
  max-width: fit-content;
  min-width: 24px;
  margin-bottom: 12px;
  background: ${(props) => (props.isColor ? props.isColor : 'unset')};
  border: 1px solid #a6a6a6;

  :not(:last-child) {
    margin-right: 12px;
  }

  @media (min-width: 769px) {
    margin-bottom: 0;

    :not(:last-child) {
      margin-right: 0;
    }
  }
`;

export const CartAtributeText = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  width: fit-content;
  padding: 0 5px;
  color: ${(props) => (props.outOfStock ? '#A6A6A6' : '#292929')};
`;
