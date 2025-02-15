import styled from "styled-components";
import { Button, Card, SubTitle, Title } from "../StyleComponent";

const ContainerImg = styled.div`
	display: flex;
	flex-direction: column;
`

function RecomendCard({title, subtitle, description, img}) {
	return (
		<Card>
			<div>
				<Title cor="#723EBE" fontSize="24px" align='left'>{title}</Title>
				<SubTitle cor='#723EBE'>{subtitle}</SubTitle>
				<p>{description}</p>
			</div>
			<ContainerImg >
				<img src={img} />
				<Button>Saiba mais</Button>
			</ContainerImg>
		</Card>
	)
}

export default RecomendCard;