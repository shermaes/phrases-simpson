import styled from "styled-components";

export default function Character(props) {
  const { dataCharacter } = props;
  const { character, image, quote } = dataCharacter;

  return (
    <ContentCharacter>
      <HeadTitle>{character}</HeadTitle>
      <ContainerImage>
        <Image src={image} alt={character} /> 
      </ContainerImage>
      <PhraseText>{quote}</PhraseText>
    </ContentCharacter>
  );
}

const ContentCharacter = styled.div`
  padding: 20px;
  border: 1px solid white;
  border-radius: 20px;
  width: 300px;
  text-align: center;
  margin: 10px;
  background-color: aliceblue;

  &:hover {
    filter: brightness(40%);
  }
`;

const HeadTitle = styled.h2`
  color: blueviolet;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ContainerImage = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 130px;
  height: auto;
  margin-right: 20px;
`;

const PhraseText = styled.h4`
  color: black;
  height: auto;
`;
