import styled from "styled-components"

export default function Header() {
    return(
        <ContainerTitle>
        <Title>Las mejores frases de "Los Simpson"</Title> 
        </ContainerTitle>
      

    )
};
// se crea el styled-component y con el englobamos lo que retornemos
const Title = styled.h1`
    color: white;
    text-align: center;
`;

const ContainerTitle = styled.div`
width: 100%;
border: none;
padding: 10px 20px;
border-radius: 20px;
background-color: lightgrey ;
`;