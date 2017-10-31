import React, { Component } from 'react';

// non class based function called as functional component
//const SearchBar = () => {
//  return <input />;
//}

class SearchBar extends Component {
  constructor(props){
  //calls the super class contructor
    super(props);
    // initialising component properties
    this.state = { term: ''};
  }

  // this.setState is used to set state of component
  render(){
    return(
      <div className="search-bar">
       <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
