import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
      monstersToDisplay: [],
    }
  }


  setMonstersToDisplay(text) {
    let monsters = this.state.monsters.filter((monster) => monster.name.toLowerCase().includes(text.toLowerCase()))
    this.setState({ monstersToDisplay: monsters })
  }
  async retrieveUsers() {
    let responseBody = await fetch('https://jsonplaceholder.typicode.com/users')
    let jsonResponse = await responseBody.json()
    return jsonResponse
  }

  componentDidMount() {
    this.retrieveUsers().then((json) => {
      this.setState({ monsters: [...json], monstersToDisplay: [...json] })
    })
  }

  render() {

    const setSearchField = (text) => {
      this.setState({ searchField: text })

    }

    const setMonstersToDisplay = () => {
      let text = this.state.searchField
      if (text !== null || text !== "") {
        let monsters = this.state.monsters.filter((monster) => monster.name.toLowerCase().includes(text.toLowerCase()))
        this.setState({ monstersToDisplay: monsters }, () => { console.log(this.state) })
      }
    }

    return (
      <div className="App">
        <div className= "container-app">
          <header className="App-header"  >
            <h1 className="h1-header">Monsters Rolodex</h1>
            <SearchBox setSearchFieldText={setSearchField} setMonstersToDisplay={setMonstersToDisplay}></SearchBox>
            <CardList monsters={this.state.monstersToDisplay}> </CardList>
          </header>
        </div >
      </div>
    );
  }
}
export default App;
