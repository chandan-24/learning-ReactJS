const React = require('react');
const SearchBar = require('./SearchBar');

class App extends React.Component {
  onSearchSubmit = (searchTerm) => {
    console.log(searchTerm);
  }
  render(){
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

module.exports = App;