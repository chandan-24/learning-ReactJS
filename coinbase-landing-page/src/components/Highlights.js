const React = require('react');

require('../styles/highlights.css');

class Highlights extends React.Component {
  render() {
    return(
      <section className="section-highlights">
        <div className="hl-main">
          <div className="hl-el">
            <div><h1>$150B+</h1></div>
            <div><p>Cryptocurrency exchanged</p></div>
          </div>

          <div className="hl-el">
            <div><h1>102</h1></div>
            <div><p>Countries supported</p></div>
          </div>

          <div className="hl-el">
            <div><h1>30M+</h1></div>
            <div><p>Customers served</p></div>
          </div>
        </div>
      </section>
    );
  }
}

module.exports = Highlights;