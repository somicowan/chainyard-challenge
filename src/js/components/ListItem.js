import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return(
      <li>
        <span>{this.props.item}</span>: {this.props.val}
      </li>
    );
  }
}

export default ListItem
