import './style.css';
import perfil from '../../images/perfil.svg';
import bag from '../../images/sacola.svg';

const icons = [perfil, bag];

function IconsHeader() {
  return (
    <ui className='icons'>          
      {icons.map((icon) => (
        <li className='icon'>
          <img src={icon} alt=''/>
        </li>          
      ))}
    </ui>
  )
}

export default IconsHeader;

