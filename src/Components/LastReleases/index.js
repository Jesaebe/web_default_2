
import { BookContainer, BookImage, Title } from "../StyleComponent";
import { booksList } from "./dataLastReleases";

function LastReleases() {
	return (
		<section>
			<Title cor="#FF0">Ultimos Lançamentos</Title>
			<BookContainer>
				{booksList.map((book) => (
						<div>
							<BookImage src={book.src} alt='book'/>
							<p>{book.name}</p>
						</div>
					)
				)}
				</BookContainer>	
		</section>
	)
}

export default LastReleases;