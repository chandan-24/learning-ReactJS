const React = require('react');

require('../styles/rewardRow.css');

class RewardRow extends React.Component {
  fetchLogo(base) {
    switch(base) {
      case 'OXT' :
        return require('../resources/coinLogo/OXT.svg');
      case 'XTZ' :
        return require('../resources/coinLogo/XTZ.png');
      case 'XLM' :
        return require('../resources/coinLogo/XLM.svg');
      case 'EOS' :
        return require('../resources/coinLogo/EOS.png');
      default :
        return null;
    }
  }
  render(){
    const reward = this.props.reward;
    return(
      <div className="reward-row">
        <div className="reward-name">
          <img src={this.fetchLogo(reward.base)} />
          <h2>{reward.name}</h2>
          <h3>{reward.base}</h3>
        </div>
        <div className="reward-title">
          <h3>{reward.reward}</h3>
        </div>
      </div>
    )
  }
}

module.exports = RewardRow;