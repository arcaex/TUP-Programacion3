import React, { Component } from 'react';

//Importar los componentes con estilo
import { MenuItem, MenuStyled, MenuItemSelected } from './styled';

//Declaramos el nombre de la clase que generamos y la extendemos de Component
//Que es la clase principal de Componentes de REACT, para crear nuestros Componentes

class Menu extends Component {
  render() {
    return (
      <MenuStyled>
        <MenuItem>{this.props.itemsMenu[0]}</MenuItem>
        <MenuItemSelected>{this.props.itemsMenu[1]}</MenuItemSelected>
        <MenuItem>{this.props.itemsMenu[2]}</MenuItem>
      </MenuStyled>
    );
  }
}

//Exportamos nuestro componente para que esté disponible a otros componentes.
export default Menu;