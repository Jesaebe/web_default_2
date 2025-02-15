
import LastReleases from '../Components/LastReleases/index.js';
import RecomendCard from '../Components/recomendCard/index.js';
import Research from '../Components/Research/index.js';

import bookImage from '../images/livro1.png';

import styled from 'styled-components';

const AppContainer = styled.div `
  
 
`
function Favoritos() {
  return (
    <AppContainer>      
      <Research/>
    </AppContainer>
  );
  
}

export default Favoritos;
