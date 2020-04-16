const React = require('react');
const Unsplash = require('../api/unsplash');
const SearchBar = require('./SearchBar');
const ShowImages = require('./ShowImages');

const unsplashApi = new Unsplash();

class App extends React.Component {
  state = { imageList: []};
  
  onSearchSubmit = async (searchTerm) => {
    const response = await unsplashApi.searchImage(searchTerm);
    this.setState({imageList: response.results});
  }

  render(){
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ShowImages imageList={this.state.imageList}/>
      </div>
    );
  }
}

module.exports = App;