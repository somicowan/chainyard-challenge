import React, { Component } from 'react';

import ListItem from './ListItem.js';

function renderListItem(data) {
    let rendered = [];

    if(Object.keys(data).length > 0) {
      Object.keys(data).forEach(function(key) {
        if(typeof data[key] === 'object') {
          rendered.push(<NestedList data={data[key]} isOpened={false} trigger={key} isNested={true} />);
        }
        else {
          rendered.push(<ListItem item={key} val={data[key]} />);
        }
      });

      return rendered;
    }
    else {
      return (<p>No valid input specified.</p>);
    }
}

class NestedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: props.isOpened,
      isNested: props.isNested
    }
  }

  changeState() {
    this.setState({
      isOpened: !this.state.isOpened
    })
  }

  render() {
    const fullClassName = "nested-list" + (this.state.isOpened ? ' open' : ' closed');
    const list = renderListItem(this.props.data);

    if(this.state.isNested) {
      return(
        <li>
          <span className="trigger" onClick={() => this.changeState()}>
            {this.props.trigger}
          </span>
          <ul className={fullClassName}>
            {list}
          </ul>
        </li>
      );
    }
    else {
      return(
        <ul className={fullClassName}>
          {list}
        </ul>
      );
    }
  }
}
export default NestedList;
