import styled from 'styled-components';

export const Loader = () => <ActivityIndicator />;

const ActivityIndicator = styled.div`
	width: 100%;
	height: 2px;
	border-radius: 6px;
	background-color: ${({ theme }) => theme.colors.primary};
	/* animation: loading 1s linear infinite alternate;

	@keyframes loading {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	} */
`;
