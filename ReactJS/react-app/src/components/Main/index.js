import React, { Component } from 'react';

import Navbar     from './navbar/';
import Menu       from './menu/';
import Dashboard  from './dashboard/';

import { MainLayout,MainBody } from './styled';

class Main extends Component {
  render() {
    return (
      <MainLayout>
        <Navbar></Navbar>
        <MainBody>
          <Menu itemsMenu={["menu1","menu2","menu3"]} titulo="Menu" prueba="Hola Mundo"></Menu>
          <Dashboard></Dashboard>
        </MainBody>
      </MainLayout>
    );
  }
}

export default Main;