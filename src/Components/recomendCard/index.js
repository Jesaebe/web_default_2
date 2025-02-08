import { Card, SubTitle, Title } from "../StyleComponent";

function RecomendCard({title, subtitle, description, img}) {
	return (
		<Card>
			<div>
				<Title cor="#723EBE" fontSize="24px" align='left'>{title}</Title>
				<SubTitle cor='#723EBE'>{subtitle}</SubTitle>
				<p>{description}</p>
			</div>
			<div >
				<img src={img} />
				<button>Saiba mais</button>
			</div>
		</Card>
	)
}

export default RecomendCard;