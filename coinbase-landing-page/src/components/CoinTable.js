const React = require('react');

require('../styles/coinTable.css');
const coinData = require('../resources/coinData.json');
const CoinRow = require('./CoinRow');

class CoinTable extends React.Component {
  render() {
    return(
      <section>
        <div className="section-coin">
          {coinData.map(coin => {
            console.log(coin);
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