import React, { Component } from 'react'
import '../search-box/search-box.css'

class SearchBox extends Component {

  constructor() {
    super()
    this.searchText = ""
  }
  render() {
    return (
      <div>
        <input
          className="search-box"
          type="text"
          onChange={(search) => this.setSearchText(search.target.value)}
        />
        <button
          className="search-box-button"
          type="submit"
          onClick={() => this.triggerSearch(this.searchText)}>Search</button>
      </div>
    )
  }

  setSearchText(text) {
    console.log(text)
    this.props.setSearchFieldText(text)
  }

  triggerSearch() {
    this.props.setMonstersToDisplay()
  }
}
export default SearchBox