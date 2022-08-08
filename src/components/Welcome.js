import Logo from "../pngfind.com-simpsons-png-62392.png"
import styled from "styled-components";

export default function Welcome() {
    return(
        <ContentLogo>
        <WelcomeText>Bienvenido, para poder utilizar las frases pincha sobre la imagen</WelcomeText>
       <ImageLogo src={Logo} alt="Logo Simpson"/>  
      </ContentLogo>  
    )
};

const ImageLogo = styled.img`
    width:450 px;
    height: auto;
    

    &:hover {
      cursor: pointer;
    }

`;
//aca alineamos la imagen al centro
const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;

//haremos un texto que ira por encima de nuestro logo
const WelcomeText = styled.p`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px;
  font-size: 25px;

`;