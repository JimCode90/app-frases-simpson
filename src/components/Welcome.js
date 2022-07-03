import Logo from "../the-simpson.png";
import styled from "styled-components";


function Welcome({ reqApi }) {
    return (
        <ContentLogo>
            <WelcomeText>Bienvenido, para poder utilizar las frases pincha sobre la imagen</WelcomeText>
            <ImgLogo src={Logo} alt="Logo Simpson" onClick={reqApi}/>6
        </ContentLogo>
    )
}

const ImgLogo = styled.img`
  width: 450px;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`

const WelcomeText = styled.p`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`

export default Welcome