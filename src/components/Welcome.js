import Logo from "../clipart1893157.png"
import styled from "styled-components";

export default function Welcome(props) {
    const {reqApi} = props;


    return(
        <ContentLogo>
        <WelcomeText>Bienvenido, para poder utilizar las frases pincha sobre la imagen</WelcomeText>
       <ImageLogo src={Logo} alt="Logo Simpson" onClick={reqApi}/>  
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
  color: white;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px;
  font-size: 25px;

`;
