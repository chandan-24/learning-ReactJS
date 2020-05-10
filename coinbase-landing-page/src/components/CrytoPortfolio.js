const React = require('react');

const portData = require('../resources/portfolioData.json');
require('../styles/cryptoPortfolio.css');
const PortfolioRow = require('./PortfolioRow');

class CryptoPortfolio extends React.Component {
  render() {
    return(
      <section className="section-portfolio">
        <div className="section-container">
          <div>
            <div className="sec-head"><h1>Create your cryptocurrency portfolio today</h1></div>
            <div className="sec-content"><p>Coinbase has a variety of features that make it the best place to start trading</p></div>
          </div>

          <div className="port-sec">
            <div className="port-sec-main">
              <div>
                {portData.map((data) => {
                  console.log(data);
                  return(<PortfolioRow portData={data} />)
                })}
              </div>
            </div>
            <div className="port-sec-img">
              <img src={require('../resources/cb-image.webp')} />
            </div>
          </div>
        </div>
      </section>
    );
  };
}

module.exports = CryptoPortfolio;