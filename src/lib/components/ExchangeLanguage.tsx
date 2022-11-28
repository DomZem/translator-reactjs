import { Images } from 'assets';
import styled from 'styled-components';

export const ExchangeLanguage = () => <Exchange src={Images.Exchange} />;

const Exchange = styled.img`
	height: 22px;
	width: 22px;
	cursor: pointer;
`;
