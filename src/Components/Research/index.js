import { booksList } from "./dataResearch";
import { useState } from "react";
import Input from "../Input";
import { BookContainer, BookImage, ResearchContainer, SubTitle, Title } from "../StyleComponent";

function Research() {
	const [booksResearched, setBooksResearched] = useState([]);
	
	return (
		<ResearchContainer>
			<Title>Já sabe por onde começar?</Title>
			<SubTitle>Encontre seu produto.</SubTitle>
			<Input placeholder="Digite aqui" 
				onChange={event => {
						const textTyped = event.target.value;						 
						setBooksResearched([]);
						if (textTyped != null && textTyped != '') {
							const booksResult = booksList.filter(
								book => book.name.toLowerCase().includes(textTyped.toLowerCase())						
							);
							setBooksResearched(booksResult);
						}
					}
				}
			/>
			
			<BookContainer>
				{booksResearched.map((book) => (
						<div>
							<BookImage src={book.src}/>
							<p>{book.name}</p>
						</div>
					)
				)}
				</BookContainer>					
		</ResearchContainer>
	)
}

export default Research;