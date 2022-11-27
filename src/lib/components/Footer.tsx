import { APP_CONFIG } from 'lib/config';
import { useTranslations } from 'lib/hooks/useTranslations';
import styled from 'styled-components';

export const Footer = () => {
	const T = useTranslations();
	const year = new Date().getFullYear();
	return (
		<FooterContainer>
			<CodeMaskContainer>
				&copy; {year} {T.companyName}
			</CodeMaskContainer>
			<LinkContainer>
				<Link href={APP_CONFIG.FLAT_ICON_URL} target='_blank'>
					{T.components.footer.flatIcons}
				</Link>
				<Link href={APP_CONFIG.LIBRE_TRANSLATE_URL} target='_blank'>
					{T.components.footer.libreTranslate}
				</Link>
			</LinkContainer>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding: 0 15px;
	background-color: ${({ theme }) => theme.colors.foreground};
`;

const CodeMaskContainer = styled.div`
	color: ${({ theme }) => theme.colors.typography};
`;

const LinkContainer = styled.div``;

const Link = styled.a`
	color: ${({ theme }) => theme.colors.typography};
	text-decoration: underline;
	cursor: pointer;
	padding: 0 10px;
`;
