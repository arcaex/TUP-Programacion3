import React  from 'react';

import { MenuUser, MenuPicture, MenuName } from './styled';

function User(){
    return (
      <MenuUser>
        <MenuPicture></MenuPicture>
        <MenuName>Usuario</MenuName>
      </MenuUser>
    );
}

export default User;