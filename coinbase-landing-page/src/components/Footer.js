const React = require('react');

require('../styles/footer.css');
class Footer extends React.Component {
  render() {
    return(
      <section className="section-footer">
        <div className="footer">
          <div className="footer-col">
            <div className="branding">
              <img src={require('../resources/cb-blue-icon.png')} />
              <p>&copy; 2020 Coinbase</p>
            </div>
          </div>

          <div className="footer-col">
            <div className="products">
              <div className="head"><h3>Products</h3></div>
              <div className="links">
                <a href="#">Coinbase</a>
                <a href="#">Commerce</a>
                <a href="#">Custody</a>
                <a href="#">Earn</a>
                <a href="#">Pro</a>
                <a href="#">USD Coin</a>
                <a href="#">Wallet</a>
                <a href="#">Ventures</a>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="learn">
              <div className="head"><h3>Learn</h3></div>
              <div className="links">
                <a href="#">What is Bitcoin?</a>
                <a href="#">Buy Bitcoin</a>
                <a href="#">Buy Bitcoin Cash</a>
                <a href="#">Buy Ethereum</a>
                <a href="#">Buy Litecoin</a>
                <a href="#">Buy XRP</a>
                <a href="#">Supported countries</a>
                <a href="#">Status</a>
                <a href="#">Taxes</a>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="company">
              <div className="head"><h3>Company</h3></div>
              <div className="links">
                <a href="#">About</a>
                <a href="#">Affiliates</a>
                <a href="#">Careers</a>
                <a href="#">Partners</a>
                <a href="#">Press</a>
                <a href="#">Legal &amp; Privacy</a>
                <a href="#">Support</a>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="social">
              <div className="head"><h3>Social</h3></div>
              <div className="links">
                <a href="#">Blog</a>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

module.exports = Footer;
