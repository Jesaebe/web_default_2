import perfil from '../../images/perfil.svg';
import bag from '../../images/sacola.svg';
import { LiContainer, UlContainer } from '../StyleComponent';

const icons = [perfil, bag];

function IconsHeader() {
  return (
    <UlContainer>
      {icons.map((icon) => (
        <LiContainer>
          <img src={icon} alt=''/>
        </LiContainer>          
      ))}
    </UlContainer>
  )
}

export default IconsHeader;

