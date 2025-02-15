
import LastReleases from '../Components/LastReleases/index.js';
import RecomendCard from '../Components/recomendCard/index.js';
import Research from '../Components/Research/index.js';

import bookImage from '../images/livro1.png';

import styled from 'styled-components';

const AppContainer = styled.div `
  
 
`
const RecomendCard1 = {
  title: 'Talvez você se interesse por...',
  subtitle: 'Angular 11',
  description: 'Construindo uma aplicação com a plataforma Google.',
  imgBook: bookImage
}
function Home() {
  return (
    <AppContainer>      
      <Research/>
      <LastReleases/>
      <RecomendCard 
        title={RecomendCard1.title}
        subtitle={RecomendCard1.subtitle}
        description={RecomendCard1.description}
        img={RecomendCard1.imgBook}
      />
    </AppContainer>
  );
  
}

export default Home;
