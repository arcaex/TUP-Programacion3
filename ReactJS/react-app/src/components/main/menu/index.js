import React  from 'react';

//Importar los componentes con estilo
import { MenuItem, MenuStyled, MenuItemSelected } from './styled';

//Declaramos el nombre de la clase que generamos y la extendemos de Component
//Que es la clase principal de Componentes de REACT, para crear nuestros Componentes

function Menu(props){
    return (
      <MenuStyled>
        <MenuItem>{props.itemsMenu[0]}</MenuItem>
        <MenuItemSelected>{props.itemsMenu[1]}</MenuItemSelected>
        <MenuItem>{props.itemsMenu[2]}</MenuItem>
      </MenuStyled>
    );
}

//Exportamos nuestro componente para que esté disponible a otros componentes.
export default Menu;