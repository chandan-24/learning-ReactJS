const React = require('react');

require('../styles/portfolioRow.css');

class PortfolioRow extends React.Component {
  fetchLogo(base) {
    switch(base) {
      case 'portfolio' :
        return require('../resources/elementsIcons/portfolio.png');
      case 'recurring' :
        return require('../resources/elementsIcons/recurring.png');
      case 'vault' :
        return require('../resources/elementsIcons/vault.png');
      case 'mobile' :
        return require('../resources/elementsIcons/mobile.png');
      default :
        return null;
    }
  }

  render() {
    const row = this.props.portData;
    return(
      <div className="main-row">
        <div className="row-image">
          <div>
            <img src={this.fetchLogo(row.name)} />
          </div>
        </div>
        <div className="row-content">
          <h3>{row.title}</h3>
          <p>{row.content}</p>
        </div>
      </div>
    )
  }
}

module.exports = PortfolioRow;