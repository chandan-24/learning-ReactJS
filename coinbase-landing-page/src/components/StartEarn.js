const React = require('react');

require('../styles/startEarn.css');

class StartEarn extends React.Component {
  render() {
    return(
      <section className="section-earn">
        <div className="sec-box">
          <div className="box-l">
            <div>
              <div className="reward-head content">
                <h2>Earn up to $158 worth of crypto</h2>
                <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.
                </p>
                <a href="#" className="btn-full btn-earn"><p>Start earning</p></a>
              </div>
            </div>
          </div>

          <div className="box-r">
            <img src={require('../resources/cb-background.webp')} />
          </div>
        </div>
      </section>
    );
  }
}

module.exports = StartEarn;