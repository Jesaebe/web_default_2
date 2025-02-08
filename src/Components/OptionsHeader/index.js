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
const textOptions = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE'];
function OptionsHeader() {
  return (
    <UlContainer>
      {textOptions.map((text) => (
        <LiContainer>
          <p>{text}</p>
        </LiContainer>
      ))}      
    </UlContainer>
  )
}

export default OptionsHeader;