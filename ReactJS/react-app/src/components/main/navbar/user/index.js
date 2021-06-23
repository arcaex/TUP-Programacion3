import React, { Component } from 'react';

import { MenuUser, MenuPicture, MenuName } from './styled';

class User extends Component {
  render() {
    return (
      <MenuUser>
        <MenuPicture></MenuPicture>
        <MenuName>Usuario</MenuName>
      </MenuUser>
    );
  }
}

export default User;