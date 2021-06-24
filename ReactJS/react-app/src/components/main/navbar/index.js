import React from 'react';
import Iconbar  from './iconbar';
import User from './user';

import { NavigationBar, NavigationItems } from './styled';

function Navbar() {
    return (
      <NavigationBar>
        <NavigationItems>
          <Iconbar></Iconbar>
          <User></User>
        </NavigationItems>
      </NavigationBar>
    );
}

export default Navbar;