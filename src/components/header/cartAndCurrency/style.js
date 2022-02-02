import styled from 'styled-components';

export const CartAndCurrencyContainer = styled.div`
	> ul {
		display: flex;
		gap: 22px;

		li {
			cursor: pointer;
		}

		.currency-menu-trigger {
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
						display: flex;
						gap: 5px;
						padding: 20px 40px 20px 20px;

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
		}

		.cart-box-trigger {
			position: relative;

			button {
				cursor: pointer;
				border: none;
				background: none;
			}

			.cart-box {
				position: absolute;
				width: 325px;
				max-width: 325px;
				top: 100%;
				right: 0;
				opacity: 0;
				pointer-events: none;
				transition: opacity 0.2s ease-in-out;
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
		}

		a {
			height: fit-content;
		}
	}
`;
