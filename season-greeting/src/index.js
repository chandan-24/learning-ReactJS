const React = require('react');
const ReactDom = require('react-dom');
const SeasonDisplay = require('./SeasonDisplay');
const SpinnerLoader = require('./SpinnerLoader');

class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: null,
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({latitude: position.coords.latitude}),
      error => this.setState({errorMessage: error.message})
    );
  };

  renderContent() {
    if (this.state.latitude && !this.state.errorMessage)
      return <SeasonDisplay lat={this.state.latitude}/>
    else if (!this.state.latitude && this.state.errorMessage)
      return <div style={{color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}} className="ui huge header"> Error: {this.state.errorMessage} </div>
    else
      return <SpinnerLoader loadingMessage="Please accept Location request..."/>
  }

  render() {
    return <div> {this.renderContent()} </div>
  };
}

ReactDom.render(
  <App />,
  document.querySelector('#root')
);