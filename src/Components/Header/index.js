import Logo from '../../Components/Logo/index.js';
import OptionsHeader from '../../Components/OptionsHeader/index.js';
import IconsHeader from '../../Components/IconsHeader/index.js';
import styled from 'styled-components';

const HeaderContainer = styled.header `
  color: #fff;
  display: flex;
  justify-content: center;
  
`
function Header() {
  return (
    <HeaderContainer>
      <Logo/>
      <OptionsHeader/>
      <IconsHeader/>
    </HeaderContainer>
  )
}

export default Header;