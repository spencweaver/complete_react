import { Component } from 'react';

import CardList from './components/card-list/card-list.component'

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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    console.log(event.target.value);
    this.setState(() => {
      return { searchField }
    },
    () => {
      console.log({ endingArray: this.state.monsters });
    })
  }

  render() {
    console.log('render() -> 2')

    const { monsters, searchField } = this.state
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={onSearchChange}
        />

      <CardList monsters={filteredMonsters} />


        { // filteredMonsters.map((monster) => {
          //   return (
          //     <div key={monster.id}>
          //       <h1>{monster.name}</h1>
          //     </div>
          //   )
          // })
        }
      </div>
    );
  }
}

export default App;
