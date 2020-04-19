const React = require('react');

class SpinnerLoader extends React.Component {
  render() {
    return (
      <div className="spinner-loader ui active inverted dimmer"
        style={{alignItems: 'center', justifyContent:'center', height: '50vh', width:'180vh'}}
      >
        <div className="ui text loader">
          {this.props.loadingMessage}
        </div>
      </div>
    );
  }
};

SpinnerLoader.defaultProps = {
  loadingMessage: 'Loading...',
};

module.exports = SpinnerLoader;