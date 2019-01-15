import React, { Component } from "react";

import NestedList from './NestedList.js';

class Output extends Component {
    render() {
      return(
        <div className="output">
          <NestedList data={this.props.data} isOpened={true} isNested={false}/>
        </div>
      );
    }
}

export default Output;
