import { Link } from "react-router-dom";
import styled from "styled-components";

const UlContainer = styled.ul `
  display: flex;
  align-items: center;
`
const LiContainer = styled.li `
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;  
`
const Options = styled.div`

    color: #FFF;
    text-decoration: none;

`

const textOptions = [
  {name:'CATEGORIAS', link:'/categoria'},
  {name:'FAVORITOS', link:'/favoritos'},
  {name:'MINHA ESTANTE', link: '/estante'}];
function OptionsHeader() {
  return (
    <UlContainer>
      {textOptions.map((text) => (
        <LiContainer>
          <Link to={text.link}>
            <Options><p>{text.name}</p></Options>
          </Link>
        </LiContainer>
      ))}      
    </UlContainer>
  )
}

export default OptionsHeader;