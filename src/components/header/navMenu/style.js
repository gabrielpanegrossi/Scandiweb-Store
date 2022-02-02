import styled from 'styled-components';

export const NavContainer = styled.nav`
	height: 100%;

	ul {
		display: flex;
		height: 100%;
		overflow: scroll;
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

		@media (min-width: 769px) {
			padding-bottom: 0;
		}
	}
`;
