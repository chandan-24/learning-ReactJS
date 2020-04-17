const React = require('react');
const Unsplash = require('../api/unsplash');
const SearchBar = require('./SearchBar');
const ShowImages = require('./ShowImages');

const unsplashApi = new Unsplash();

class App extends React.Component {
  state = {
    imageList: [],
    loading: false,
  };
  
  onSearchSubmit = async (searchTerm) => {
    this.setState({loading:true});
    const response = await unsplashApi.searchImage(searchTerm);
    this.setState({imageList: response.results});
    this.setState({loading:false});
  };


  render(){
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ShowImages imageList={this.state.imageList} loading={this.state.loading} />
      </div>
    );
  };
}

module.exports = App;