const React = require('react');
const SpinnerLoader = require('./SpinnerLoader');

class VideoPlay extends React.Component {
  renderVideo(){
    if(!this.props.video || this.props.loading){
      return <SpinnerLoader />
    }
    console.log(this.props);

    let embedUrl;
    if (this.props.landing) {
      embedUrl = `https://www.youtube.com/embed/${this.props.video.id}`;
    } else {
      embedUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
    }

    return <div>
      <div className="ui embed">
        <iframe title="video player" src={embedUrl}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{this.props.video.snippet.title}</h4>
        <p>{this.props.video.snippet.description}</p>
      </div>
    </div>
  }
  render() {
    return(
      <div>{this.renderVideo()}</div>
    );
  }
}

module.exports = VideoPlay;