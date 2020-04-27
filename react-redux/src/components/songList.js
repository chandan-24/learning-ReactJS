const React = require('react');
const ReactRedux = require('react-redux');

const actions = require('../actions');

const selectSong = actions.selectSong;
const connect = ReactRedux.connect;

class SongList extends React.Component {
  renderSongList() {
    return this.props.songs.map((song) => {
      return(
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content header">
            {song.title}
          </div>
        </div>
      );
    });
  }

  render() {
    return(
      <div className="ui divided list">
        {this.renderSongList()}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    selectedSong: state.selectedSong
  };
}
module.exports = connect(mapStateToProps, {selectSong})(SongList);