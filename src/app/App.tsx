import { TranslatorScreen } from 'features/translator/TranslatorScreen';
import { Footer, Header } from 'lib/components';
import { theme } from 'lib/styles/theme';
import styled, { ThemeProvider } from 'styled-components';

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const App = () => (
	<ThemeProvider theme={theme}>
		<AppContainer>
			<Header />
			<TranslatorScreen />
			<Footer />
		</AppContainer>
	</ThemeProvider>
);
