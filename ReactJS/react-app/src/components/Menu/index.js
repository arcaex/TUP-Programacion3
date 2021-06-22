import React, { Component } from 'react';

//Importar los componentes con estilo
import { MenuItem, MenuStyled, Titulo } from './styled';

//Declaramos el nombre de la clase que generamos y la extendemos de Component
//Que es la clase principal de Componentes de REACT, para crear nuestros Componentes

class PAtito extends Component {
  render() {
    return (
      <MenuStyled>
        {
          // Las props nos van a permitir traer valores que les pasemos a los componentes y que va a servir
          // para que se comuniquen entre ellos.
        }
        <Titulo>{this.props.titulo} - {this.props.prueba}</Titulo>
        <MenuItem>{this.props.itemsMenu[0]}</MenuItem>
        <MenuItem>{this.props.itemsMenu[1]}</MenuItem>
        <MenuItem>{this.props.itemsMenu[2]}</MenuItem>
      </MenuStyled>
    );
  }
}

//Exportamos nuestro componente para que esté disponible a otros componentes.
export default PAtito;