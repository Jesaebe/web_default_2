import logo from '../../images/logo.svg';
import './style.css'
function Logo() {
  return (
    <div className='logo'>
      <img src={logo} alt='logo' className='logo-img'/>
      <p>
        <strong>JesaWeb</strong>Store
      </p>
    </div>
  );
}

export default Logo;