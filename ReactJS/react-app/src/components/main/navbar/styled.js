// Instalar este modulo con npm i styled-components
import styled from 'styled-components';

//Agregar los componentes con sus estilos a Exportar
export const NavigationBar = styled.div`
  background: #6100ee;
  min-height: 60px;
  border-radius: 10px 10px 0px 0px;
  -webkit-box-shadow: 1px 8px 5px 1px rgba(0,0,0,0.24); 
  box-shadow: 1px 8px 5px 1px rgba(0,0,0,0.24);
`

export const NavigationItems = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
padding: 0;
margin: 0;
list-style: none;
width: 360px;
float:right;
`