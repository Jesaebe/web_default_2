import styled from "styled-components"

export const UlContainer = styled.ul `
  display: flex;
  align-items: center;
`
export const LiContainer = styled.li `
  margin-left: 40px;
  width: 25px;
  cursor: pointer;
  list-style: none;
`
export const ResearchContainer = styled.section `
	color: #FFF;
	text-align: center;
	padding: 85px 0;
	width: 100%;
`
export const Title = styled.h2 `
	color: ${props => props.cor || '#FFF'};
	font-size: ${props => props.fontSize || '36px'};
	text-align: ${props => props.align || 'center'};
	width: 100%;
`
export const SubTitle = styled.h3 `
	color: ${props => props.cor || '#FFF'};
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 40px;
`
export const BookContainer = styled.div `
	color: #FFF;
	display: flex;
	justify-content: center;
	padding: 20px;
	gap: 2em;
`
export const BookImage = styled.img `
	height: 200px;
`

export const Card = styled.div `
	background-color: #FFF;
	width: 50%;
	margin: 0 auto;	
	padding: 20px;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	box-shadow: 0px 4px 4px #723EBE;
`