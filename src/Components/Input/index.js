import styled from "styled-components"

const Input = styled.input `
	border: 1px solid #FFF;
	background: transparent;	
	padding: 20px ;
	border-radius: 50px;
	width: 500px;
	color: #FFF;
	font-size: 16px;
	margin-bottom: 10px;
	text-align: center;

	&::placeholder {
		color: #FFF;
		font-size: 16px;
	}
`

export default Input;