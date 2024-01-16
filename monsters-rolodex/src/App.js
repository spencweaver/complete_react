import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Spencer', lastName: 'Weaver'},
      company: 'ZTM',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}
          </p>
          <button onClick={() => {
            this.setState(() => {
              return {
                name: {firstName: 'Andrei', lastName: 'Neaogie'},
              }
            }, () => {
              console.log(this.state)
            })
          }}>Change me</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
