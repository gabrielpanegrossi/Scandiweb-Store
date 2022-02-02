import styled from 'styled-components';

export const Header = styled.header`
	width: 100%;
	padding-top: 30px;
	padding-bottom: 30px;

	@media (min-width: 769px) {
		height: 80px;
		padding-top: 0;
		padding-bottom: 0;
	}
`;

export const HeaderHandler = styled.div`
	margin: 0 auto;
	height: 100%;
	width: 100%;
	max-width: 1440px;

	ul,
	> div {
		justify-content: center;
	}

	> div,
	nav {
		margin-bottom: 20px;
	}

	@media (min-width: 769px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
