const React = require('react');
require('../style/VideoItem.css');

class VideoItem extends React.Component {
  render() {
    return(
      <div onClick={() => this.props.onVideoSelect(this.props.video)} className="video-item item">
        <img
          className="ui image"
          alt={this.props.video.snippet.description}
          src={this.props.video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  };
};

module.exports = VideoItem;