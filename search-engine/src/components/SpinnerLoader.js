const React = require('react');

class SpinnerLoader extends React.Component {
  render() {
    return (
      <div className="ui active inverted dimmer">
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