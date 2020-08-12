import React, { Component } from 'react'
import '../search-box/search-box.css'

class SearchBox extends Component {

  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <input className="search-box" type="text" />
        <button className="search-box-button" type="submit">Search</button>
      </div>
    )
  }
}

export default SearchBox