import Logo from '../../Components/Logo/index.js';
import OptionsHeader from '../../Components/OptionsHeader/index.js';
import IconsHeader from '../../Components/IconsHeader/index.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header `
  color: #fff;
  display: flex;
  justify-content: center;
  
  & a {
    text-decoration: none;
  }
  
`
function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <Logo/>
      </Link>
      <OptionsHeader/>
      <IconsHeader/>
    </HeaderContainer>
  )
}

export default Header;