const React = require('react');

const SearchBar = require('./SearchBar');
const VideoPlay = require('./VideoPlay');
const VideoList = require('./VideoList');
const YouTube = require('../api/youtube');
const youtubeApi = new YouTube();

class App extends React.Component {
  state = {
    videoList: [],
    loading: false,
    selectedVideo: null,
    landing: true,
  };

  onFormSubmit = async(searchTerm) => {
    this.setState({loading:true});
    const response = await youtubeApi.searchList(searchTerm);
    this.setState({loading:false});
    this.setState({
      landing: false,
      videoList: response,
      selectedVideo: response[0],
    });
  }

  async componentDidMount(){
    this.setState({loading:true});
    const response = await youtubeApi.listPopular();
    this.setState({loading:false});
    this.setState({
      videoList: response,
      selectedVideo: response[0],
    });
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit}/>
        <div className="ui grid" style={{marginTop: '5vh'}}>
          <div className="ui row">
            <div className="ten wide column">
              <VideoPlay 
                video={this.state.selectedVideo}
                landing={this.state.landing}
                loading={this.state.loading}
              />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videoList={this.state.videoList}/>    
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
