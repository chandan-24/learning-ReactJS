const React = require('react');
require('./SeasonDisplay.css');

const seasonGreet = {
  summer: {
    greetings: 'Hot! Hot!🥵 Lets hit the pool...',
    iconName: 'sun',
  },
  winter: {
    greetings: 'Bruh, It\'s so cold 🥶...',
    iconName: 'snowflake',
  },
}

class SeasonDisplay extends React.Component {

  getSeason() {
    const month = new Date().getMonth();
    const lat = this.props.lat;

    if ( month > 2 && month < 9 ) {
      return (lat < 0) ? 'summer' : 'winter';
    } else {
      return (lat > 0) ? 'winter' : 'summer';
    }
  }

  render() {
    const season = this.getSeason()
    const seasonDetails = seasonGreet[season];

    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${seasonDetails.iconName} icon`}></i> <br />
        <div className="ui huge header">{seasonDetails.greetings}</div> <br />
        <i className={`icon-right massive ${seasonDetails.iconName} icon`}></i>
      </div>
    );
  }
}

module.exports = SeasonDisplay;