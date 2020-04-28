const React = require('react');

const PostList = require('./PostList');

class App extends React.Component {
  render() {
    return(
      <div className="ui container">
        <PostList />
      </div>
    );
  }
}

module.exports = App;
