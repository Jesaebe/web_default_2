import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div `
  display: flex;
  color: #FFF;
  font-size: 30px;
`
const LogoImage = styled.img `
  margin-right: 20px;
`

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt='logo'/>
      <p><strong>JesaWeb</strong>Store</p>
    </LogoContainer>
  );
}

export default Logo;