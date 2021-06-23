import React, { Component } from 'react';
import Iconbar  from './iconbar';
import User from './user';

import { NavigationBar, NavigationItems } from './styled';

class Navbar extends Component {
  render() {
    return (
      <NavigationBar>
        <NavigationItems>
          <Iconbar></Iconbar>
          <User></User>
        </NavigationItems>
      </NavigationBar>
    );
  }
}

export default Navbar;