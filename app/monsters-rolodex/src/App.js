import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
    console.log('constructor() -> 1')
  }

  componentDidMount() {
    console.log('componentDidMount() -> 3')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    },
    () => {
      console.log(this.state)

    }))
  }

  render() {
    console.log('render() -> 2')

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase();
          console.log(event.target.value);



          this.setState(() => {
            return { searchField }
          },
          () => {
            console.log({ endingArray: this.state.monsters });
          })
        }}/>
        {
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
