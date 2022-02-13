import styled from 'styled-components';

export const NavContainer = styled.nav`
  height: 100%;

  ul {
    display: flex;
    height: 100%;
    padding-bottom: 15px;

    .category-option {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 16px;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.2s ease-out;
      border-bottom: 2px solid transparent;
      color: #1d1f22;
    }

    .category-option {
      &:hover,
      &.selected {
        color: #5ece7b;
        border-bottom: 2px solid #5ece7b;
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      overflow: scroll;
      overflow-y: hidden;
      justify-content: center;
    }
  }

  @media (min-width: 769px) {
    width: 30%;

    ul {
      padding-bottom: 0;
    }
  }
`;

export default NavContainer;
