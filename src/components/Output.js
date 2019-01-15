import React, { Component } from "react";

class Output extends Component {
    constructor(props){
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        output: []
      }
    }

    processDataForRender(data) {
      this.state.output.push('<ul>');
      for(var item in data) {
        // console.log(data[item]);
        if(typeof data[item] === 'object'){
          this.state.output.push('<li>' + item + '</li>');
          this.processDataForRender(data[item]);
        }
        else {
          this.state.output.push('<li>' + item + ': ' + data[item]+ '</li>');
        }
      }
      this.state.output.push('</ul>');
    }

    render() {
      this.processDataForRender(this.props.data);
      const display = this.state.output.join('');

      return(
        <div dangerouslySetInnerHTML={{ __html: display }} >
        </div>
      );
    }
}

export default Output;
