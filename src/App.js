import React, { Component } from 'react';
import './App.css';

/* Component Imports */
import Output from './components/Output.js';
import Input from './components/Input.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleBlock: {},
      singleTx: {},
      latestBlock: {}
    }
  }

  fetchData = (name, val, url) => {
    const query = url+val;
    fetch(query)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            [name]: result
          });
          console.log(this.state);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  render() {
    return (
      <div className="blockchain-challenge">
        <h1>View Single Block</h1>
        <div className="single-block">
          <Input name="singleBlock"
                 btnTxt="Query"
                 inputLabel="Enter Block Hash"
                 url="https://blockchain.info/rawblock/"
                 fetchData = {this.fetchData}/>
          <Output data={this.state.singleBlock}/>
        </div>

        <h1>View Single Transaction</h1>
        <div className="single-transaction">
          <Input name="singleTx"
                 btnTxt="Query"
                 inputLabel="Enter Transaction ID"
                 url="https://blockchain.info/rawtx/"
                 fetchData = {this.fetchData} />
          <Output data={this.state.singleTx}/>
        </div>

        <h1>View Latest Block</h1>
        <div className="latest-block">
          <Input name="latestBlock"
                 visibility="hidden"
                 url="https://blockchain.info/latestblock"
                 btnTxt="Update"
                 fetchData = {this.fetchData}/>
          <Output data={this.state.latestBlock}/>
        </div>

      </div>
    );
  }
}

export default App;
