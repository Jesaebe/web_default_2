import './style.css';

const textOptions = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE'];
function OptionsHeader() {
  return (
    <ui className='opcoes'>
      {textOptions.map((text) => (
        <li className='opcao'>
          <p>{text}</p>
        </li>
      ))}
    </ui>
  )
}

export default OptionsHeader;