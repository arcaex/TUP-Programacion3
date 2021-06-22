import logo from './logo.svg';
import './App.css';

//Importamos nuestros Componentes principales llamando a cada uno de ellos.
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {
            //Agregamos el componente Importado 
          }
          <Main></Main>
      </header>
    </div>
  );
}

export default App;
