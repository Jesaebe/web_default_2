import './style.css';
import Logo from '../../Components/Logo/index.js';
import OptionsHeader from '../../Components/OptionsHeader/index.js';
import IconsHeader from '../../Components/IconsHeader/index.js';

function Header() {
  return (
    <header className="App-header">
      <Logo/>
      <OptionsHeader/>
      <IconsHeader/>
    </header>
  )
}

export default Header;