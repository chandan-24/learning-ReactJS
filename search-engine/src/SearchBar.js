const React = require('react');
require('./SearchBar.css');

class SearchBar extends React.Component {
  state = { searchTerm: ""};

  onChangeInput = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault(); // to prevent auto page refresh when Enter is pressed
    this.props.onSubmit(this.state.searchTerm);
  }

  render(){
    return (
      <div className="search-bar">  
        <form className="ui input-field fluid icon input" onSubmit={this.onFormSubmit}>
          <input 
            type="text"
            value={this.state.searchTerm}
            onChange={this.onChangeInput}
            placeholder="Search..."
          />
          <i onClick={this.onFormSubmit} className="circular search link icon"></i>
        </form>
      </div>
    );
  }
}  

module.exports = SearchBar;