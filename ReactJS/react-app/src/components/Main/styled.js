// Instalar este modulo con npm i styled-components
import styled from 'styled-components';

//Agregar los componentes con sus estilos a Exportar
export const MainLayout = styled.div`
  background: #ffffff;
  min-height: 700px;
  width: 1100px;
  margin: auto;
  margin-top: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 1px 8px 5px 1px rgba(0,0,0,0.24); 
  box-shadow: 1px 8px 5px 1px rgba(0,0,0,0.24);
`

export const MainBody = styled.div`
  display: flex;
`