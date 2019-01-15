import React, { Component } from 'react';

import './../../scss/components/input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      val: '',
      url: this.props.url
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event){
    this.setState({
      val: event.target.value
    })
  }

  fetchData() {
    this.props.fetchData(this.state.name, this.state.val, this.state.url);
  }

  render() {
    return (
      <div className="input">
        <label className={this.props.visibility ? 'hidden' : ''} htmlFor={this.props.name}>
          {this.props.inputLabel}
        </label>
        <input id={this.props.name}
               type={this.props.visibility ? 'hidden' : 'text'}
               onChange={this.onChangeHandler}/>
        <button className={this.props.visibility ? '' : 'not-rounded'}
                onClick={() => this.fetchData()}>
                  {this.props.btnTxt}
        </button>
      </div>
    )
  }
}
export default Input;
