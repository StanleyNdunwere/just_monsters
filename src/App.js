import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {


  constructor() {
    super();
    this.state = {
      firstName: "First Name is Stanley",
      lastName: "Last Name is Stanley",
      middleName: "Middle Name is Stanley"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h2>{this.state.firstName}</h2>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => this.setState({ firstName: "Jerome" })}>
            This is arrow button
          </button>
        </header>
      </div >
    );
  }
}

// export App1
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
