const React = require('react');

const VideoItem = require('./VideoItem');

class VideoList extends React.Component {
  state = {videoList: {}};

  renderVideo = () => {
    return this.props.videoList.map(video => {
      return <VideoItem key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} video={video} />
    })
  }

  render() {
    return(
      <div className="ui relaxed divided list">
        {this.renderVideo()} 
      </div>
    );
  };
}

module.exports = VideoList;
