const React = require('react');

require('../styles/coinTable.css');
const coinData = require('../resources/coinData.json');
const CoinRow = require('./CoinRow');

class CoinTable extends React.Component {
  render() {
    return(
      <section className="section-table">
        <div className="bg-color"></div>
        <div className="section-coin">
          <CoinRow header={true} />
          {coinData.map(coin => {
            return(
              <CoinRow coin={coin} />
            )
          })}
        </div>
      </section>
    );
  }
}

module.exports = CoinTable;