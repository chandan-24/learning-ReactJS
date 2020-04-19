const React = require('react');
require('../style/SearchBar.css');

class SearchBar extends React.Component {
  state = {searchTerm: ''};

  onInputChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  }

  render() {
    return(
      <div className="search-bar">
        <form className="ui input-field fluid icon input" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.onInputChange}
            placeholder="search..."
          />
          <i className="circular search link icon"></i>
        </form>
      </div>
    );
  }
}

module.exports = SearchBar;
