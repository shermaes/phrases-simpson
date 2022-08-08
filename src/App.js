import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";


function App() {

  const reqApi = async() => {
    const api = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=8");
    const frase = await api.json();
    console.log(frase);
  }
//Aca estoy llamando a la funcion para ver si todo se ejecuta
  reqApi()

  return (
    <div>
    <Container>
      <Header/>
      <Welcome/>
    </Container>
    </div>
    
  );
}


export default App;
