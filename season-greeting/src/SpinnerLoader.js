const React = require('react');

class SpinnerLoader extends React.Component {
  render() {
    return (
      <div class="ui active dimmer">
        <div class="ui text loader">
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