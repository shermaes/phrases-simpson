import { useState } from "react";
import CharacterContainer from "./components/CharacterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch(
      "https://simpsons-quotes-api.herokuapp.com/quotes?count=5"
    );
    const frase = await api.json();
    setCharacters(frase);
  };

  return (
    <div>
      <Container>
        <Header />
        {!characters ? (
          <Welcome reqApi={reqApi} />
        ) : (
          <CharacterContainer characters={characters} reqApi={reqApi} />
        )}
      </Container>
    </div>
  );
}

export default App;
