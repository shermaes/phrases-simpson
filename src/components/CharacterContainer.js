import styled from "styled-components";
import Character from "./Character";

export default function CharacterContainer(props) {
  const { characters } = props;

  //pasamos los characters al componente Character mediante props
  //con el map, pasaremos uno por uno a Character
  return (
    <div>
        <ContainerCharacter>
      {characters.map((character, index) => (
        <Character dataCharacter={character} key={index} />
      ))}
      </ContainerCharacter>
    </div>
  );
}

const ContainerCharacter = styled.div`
    display:flex;
`;
