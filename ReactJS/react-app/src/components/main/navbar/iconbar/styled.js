// Instalar este modulo con npm i styled-components
import styled from 'styled-components';

//Agregar los componentes con sus estilos a Exportar
export const IconBarList = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
padding: 0;
margin: 0;
list-style: none;
width: 160px;
float:right;
`

export const ItemList = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  color: white;
  font-weight: bold;
  font-size: 2em;
  text-align: center;
  border-left: 1px solid #ffffff; 
`