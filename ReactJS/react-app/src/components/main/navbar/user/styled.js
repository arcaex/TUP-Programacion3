// Instalar este modulo con npm i styled-components
import styled from 'styled-components';

//Agregar los componentes con sus estilos a Exportar
export const MenuUser = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: right;
padding: 0;
margin: 0;
list-style: none;
width: 100px;
float:left;
color: white;
`

export const MenuPicture = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  background: #ffffff;
  border-radius: 50%;
  display: inline-block;
  margin-right:10px;
`

export const MenuName = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 18px;
  color: #ffffff;
  font-size: 18px;
  text-align: center;
`