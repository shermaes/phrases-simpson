import { useState } from "react";
import CharacterContainer from "./components/CharacterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";


function App() {

  const [characters, setCharacters]= useState(null);

  const reqApi = async() => {
    const api = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=5");
    const frase = await api.json();
    setCharacters(frase);
  }

 
 //
  //paso los characters mediante props para poder hacerlos llegar al componente CharacterContainer
  //cuando los characters esten vacios mostrara welcome, cuando estos carguen mostrara el character container
  return (
    <div>
    <Container>
      <Header/>
      {!characters? (
        <Welcome reqApi={reqApi}/>
      ): (
        <CharacterContainer characters={characters}/>
       )}
    </Container>
    </div>
    
  );
}


export default App;
