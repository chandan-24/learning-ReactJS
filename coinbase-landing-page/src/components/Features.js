const React = require('react');

require('../styles/features.css')

class Features extends React.Component {
  render() {
    return(
      <section className="section-features">
        <div className="section-container feat-con">
          <div>
            <div className="sec-head"><h1>The most trusted cryptocurrency platform</h1></div>
            <div className="sec-content"><p>Here are a few reasons why you should choose Coinbase</p></div>
          </div>

          <div className="feature-main">
            <div className="feature">
              <div>
                <img src={require('../resources/elementsIcons/secure.png')}/>
              </div>
              <div> 
                <h2>Secure storage</h2>
              </div>
              <div>
                <p>We store the vast majority of the digital assets in secure offline storage.</p>
              </div>
              <div>
                <a href="#">Learn more></a>
              </div>
            </div>

            <div className="feature">
              <div>
                <img src={require('../resources/elementsIcons/insurance.png')}/>
              </div>
              <div> 
                <h2>Protected by insurance</h2>
              </div>
              <div>
                <p>Cryptocurrency stored on our servers is covered by our insurance policy.</p>
              </div>
              <div>
                <a href="#">Learn more></a>
              </div>
            </div>

            <div className="feature">
              <div>
                <img src={require('../resources/elementsIcons/best.png')}/>
              </div>
              <div> 
                <h2>Industry best practices</h2>
              </div>
              <div>
                <p>Coinbase supports a variety of the most popular digital currencies.</p>
              </div>
              <div>
                <a href="#">Learn more></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

module.exports = Features;