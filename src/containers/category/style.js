import styled from 'styled-components';

export const Main = styled.main`
	width: 100%;
`;

export const MainHandler = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;

	h2 {
		text-transform: capitalize;
		margin-bottom: 20px;
	}

	@media (min-width: 769px) {
		gap: 100px;

		h2 {
			margin-bottom: 0;
		}
	}
`;
