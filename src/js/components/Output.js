import React, { Component } from "react";
import NestedList from './NestedList.js';

import './../../scss/components/output.scss';

class Output extends Component {
    render() {
      return(
        <div className="output">
          <h2>Output</h2>
          <div className="output-container">
            <NestedList data={this.props.data} isOpened={true} isNested={false}/>
          </div>
        </div>
      );
    }
}

export default Output;
