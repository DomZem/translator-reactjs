import styled from 'styled-components';

export const TextInput = () => <Input placeholder='Type text here...' />;

const Input = styled.textarea`
	height: 300px;
	width: 400px;
	padding: 10px 15px;
	border: none;
	resize: none;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.input};
	color: ${({ theme }) => theme.colors.typography};
	font-size: 18px;
`;
