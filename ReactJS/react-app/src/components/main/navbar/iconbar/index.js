import React, { Component } from 'react';
import { IconBarList, ItemList } from './styled';

class Iconbar extends Component {
  render() {
    return (
      <IconBarList>
        <ItemList>A</ItemList>
        <ItemList>B</ItemList>
        <ItemList>C</ItemList>
      </IconBarList>
    );
  }
}

export default Iconbar;