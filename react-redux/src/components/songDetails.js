const React = require('react');
const ReactRedux = require('react-redux');

const connect = ReactRedux.connect;

const songDetail = ({ song }) => {
  if (!song) {
    return<h3>Select a song</h3>
  }
  return (
    <div>
      <h3>Song Details:</h3>
      <p>
        {song.title}<br />
        {song.singer}<br />
        {song.duration}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong}
}
module.exports = connect(mapStateToProps)(songDetail);