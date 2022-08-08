import styled from 'styled-components'


export default function Container({children}) {
    return (
        <Content>{children}</Content>
        // los children seran todo el contenido de nuestra aplicacion
    )
};

//se crea el styled-component y con el englobamos lo que retornemos
const Content = styled.div`
    max-width: 1200px;
    padding:40px;
    margin: 0 auto;
`;
