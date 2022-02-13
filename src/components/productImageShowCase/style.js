import styled from 'styled-components';

export const ShowCaseContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 0 auto;

  div {
    width: 100%;
    height: 320px;
    max-width: 610px;
    margin-bottom: 40px;

    img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
    height: 560px;
    width: 50%;
    max-width: 610px;
    margin: 0;
    gap: 40px;

    div {
      height: 100%;
      margin: 0;
    }
  }
`;

export const ShowCaseList = styled.ul`
  display: flex;
  align-items: center;
  overflow: scroll;
  width: 100%;
  max-width: 510px;
  height: 85px;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #eee;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
  }

  li {
    min-width: 80px;
    height: 100%;
    margin-right: 32px;

    button {
      width: 100%;
      height: 100%;
      border: none;
      background: transparent;

      img {
        object-fit: contain;
        height: 100%;
        width: 100%;
      }
    }
  }

  @media (max-width: 769px) {
    overflow-y: hidden;
  }

  @media (min-width: 769px) {
    flex-direction: column;
    height: 100%;
    max-width: 100px;
    row-gap: 32px;
    overflow-x: hidden;

    li {
      width: 100%;
      margin-right: 0;
    }
  }
`;
