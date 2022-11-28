import styled from 'styled-components';

export const SelectLanguage = () => (
	<Select>
		<Option>Polish</Option>
		<Option>English</Option>
	</Select>
);

const Select = styled.select`
	height: 26px;
	padding: 0 15px;
	max-width: 140px;
	margin-bottom: 10px;
	-webkit-appearance: none;
	border: 0;
	background-color: ${({ theme }) => theme.colors.foreground};
	color: ${({ theme }) => theme.colors.typography};
	font-size: 14px;
	font-weight: bold;
`;
const Option = styled.option``;
