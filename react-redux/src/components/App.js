const React = require('react');

const SongList = require('./songList');
const SongDetails = require('./songDetails');

class App extends React.Component {
  render() {
    return(
      <div className="ui container grid" style={{marginTop: '20px'}}>
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide" style={{paddingLeft: '50px'}}>
            <SongDetails />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;