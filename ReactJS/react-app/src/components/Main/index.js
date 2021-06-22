import React, { Component } from 'react';
import Menu  from '../Menu/'

//Importar los componentes con estilo
import { TopTitle } from './styled';

//Declaramos el nombre de la clase que generamos y la extendemos de Component
//Que es la clase principal de Componentes de REACT, para crear nuestros Componentes

class Main extends Component {
  render() {
    return (
      <div>
        <TopTitle>Hola mundo</TopTitle>
        <Menu itemsMenu={["menu1","menu2","menu3"]} titulo="Menu" prueba="Hola Mundo"></Menu>
      </div>
    );
  }
}

//Exportamos nuestro componente para que esté disponible a otros componentes.
export default Main;