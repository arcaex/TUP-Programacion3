import React, {useState} from 'react';
import Navbar     from './navbar/';
import Menu       from './menu/';
import Dashboard  from './dashboard/';

import { MainLayout,MainBody } from './styled';
function Main() {
    const [count, setCount] = useState(0);
    const countManager = { "state" : count, "setState" : setCount};
    return (
      <MainLayout>
        <Navbar></Navbar>
        <MainBody>
          <Menu itemsMenu={[count,"menu2","menu3"]} titulo="Menu" prueba="Hola Mundo"></Menu>
          <Dashboard countState = {countManager}></Dashboard>
        </MainBody>
      </MainLayout>
    );
}

export default Main;