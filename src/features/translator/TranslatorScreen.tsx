import { useTranslations } from 'lib/hooks/useTranslations';
import React from 'react';
import styled from 'styled-components';

export const TranslatorScreen: React.FunctionComponent = () => {
	const T = useTranslations();
	return <Container>Hello World!</Container>;
};

const Container = styled.div`
	flex: 1;
	color: ${({ theme }) => theme.colors.typography};
`;
