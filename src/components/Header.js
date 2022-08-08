import styled from "styled-components"

export default function Header() {
    return(
      <Title>Las mejores frases de "Los Simpson"</Title>  

    )
};
// se crea el styled-component y con el englobamos lo que retornemos
const Title = styled.h1`
    color: #e76f51;
    text-align: center;
`