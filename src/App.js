import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      firstName: "First Name is Stanley",
      lastName: "Last Name is Stanley",
      middleName: "Middle Name is Stanley",
      monsters: [
        {
          name: "Jerome Boateng",
          id: "2"
        },
        {
          name: "Ivan Rakitic",
          id: "1"
        },
        {
          name: "Raheem Stirling",
          id: "3"
        },
      ],
    }
  }

  async retrieveUsers() {
    let responseBody = await fetch('https://jsonplaceholder.typicode.com/users')
    let jsonResponse = await responseBody.json()
    console.log(responseBody)
    return jsonResponse
  }

  componentDidMount() {
    this.retrieveUsers().then((json) => {
      console.log(json)      
      this.setState({ monsters: json })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <h2>{this.state.firstName}</h2>
          {
            this.state.monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>)
          }
          <button onClick={() => this.setState({ firstName: "Jerome" })}>
            This is arrow button
          </button>
        </header>
      </div >
    );
  }
}
export default App;
