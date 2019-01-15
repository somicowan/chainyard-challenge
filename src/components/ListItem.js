import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return(
      <li>
        {this.props.item}: {this.props.val}
      </li>
    );
  }
}

export default ListItem
