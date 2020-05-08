const React = require('react');

require('../styles/coinRow.css');

class CoinRow extends React.Component {
  fetchLog(base) {
    switch(base) {
      case 'BTC' :
        return require('../resources/coinLogo/BTC.png');
      case 'ETH' :
        return require('../resources/coinLogo/ETH.png');
      case 'BCH' :
        return require('../resources/coinLogo/BCH.png');
      case 'LTC' :
        return require('../resources/coinLogo/LTC.png');
      default :
        return null;
    }
  }

  renderTableHeader() {
    return(
      <div className="table-header">
        <div className="id">
          <p>#</p>
        </div>
        <div className='name'>
          <p>Name</p>
        </div>
        <div className="price">
          <p>Price</p>
        </div>
        <div className="diff">
          <p>Change</p>
        </div>
        <div className="graph">
          <p>Chart</p>
        </div>
        <div className="btn">
          <p>Trade</p>
        </div>
      </div>
    );
  }

  render(){
    const coin = this.props.coin;
    if (this.props.header == true) {
      return this.renderTableHeader();
    }
    return(
      <div className="coin-row">
        
        <div className="coin-id">
          <p>{coin.id}</p>
        </div>

        <div className='coin-name'>
          <img src={this.fetchLog(coin.base)} />
          <p>{coin.name}</p>
          <p>{coin.base}</p>
        </div>

        <div className="coin-price">
          <p>{coin.price}</p>
        </div>

        <div className="coin-diff">
          <p>{coin.change}</p>
        </div>

        <div className="coin-graph">
          <img src={require('../resources/graph-common.png')} />
        </div>

        <div className="coin-btn">
          <a href="#" className='btn-full btn-buy'><p>Buy</p></a>
        </div>
      </div>
    )
  }
}

module.exports = CoinRow;