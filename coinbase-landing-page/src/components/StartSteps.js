const React = require('react');

require('../styles/startStep.css');

class StartSteps extends React.Component {
  render() {
    return(
      <section className="section-steps">
        <div className="section-container ">
          <div>
            <div className="sec-head"><h1>Get started in a few minutes</h1></div>
            <div className="sec-content"><p>Coinbase supports a variety of the most popular digital currencies.</p></div>
          </div>

          <div className="step-con">
            <div className="step">
              <div>
                <img src={require('../resources/elementsIcons/account.png')}/>
              </div>
              <div> 
                <h2>Create an account</h2>
              </div>
            </div>

            <div className="step"><div className="line">___________________________</div></div>

            <div className="step">
              <div>
                <img src={require('../resources/elementsIcons/bank.png')}/>
              </div>
              <div> 
                <h2>Link your bank account</h2>
              </div>
            </div>

            <div className="step"><div className="line"><p>___________________________</p></div></div>

            <div className="step">
              <div>
                <img src={require('../resources/elementsIcons/buy-sell.png')}/>
              </div>
              <div> 
                <h2>Start buying &amp; selling</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

module.exports = StartSteps;