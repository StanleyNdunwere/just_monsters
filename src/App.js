import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {

  constructor() {
    super();
    this.state = {
      firstName: "First Name is Stanley",
      lastName: "Last Name is Stanley",
      middleName: "Middle Name is Stanley",
      monsters: [],
    }

  }

  async retrieveUsers() {
    let responseBody = await fetch('https://jsonplaceholder.typicode.com/users')
    let jsonResponse = await responseBody.json()
    return jsonResponse
  }

  componentDidMount() {
    this.retrieveUsers().then((json) => {
      this.setState({ monsters: [...json] })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"  >
          <SearchBox></SearchBox>
          <CardList monsters={this.state.monsters}> </CardList>
        </header>
      </div >
    );
  }
}
export default App;
