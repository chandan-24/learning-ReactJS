const React = require('react');
require('../styles/header.css');

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className="row">
            <div className="main-nav">
              <a href="#" className="cb-logo"><img src={require('../resources/cb-white-icon.png')} /></a>

              <ul className="nav-bar">
                <li><a href="#">Prices</a></li>
                <li><a href="#">Products<i class="small chevron down icon ico"></i></a></li>
                <li><a href="#">Company<i class=" small chevron down icon"></i></a></li>
                <li><a href="#">Earn crypto</a></li>
                <li><a href="#" className="btn-full">up to $158</a></li>
              </ul>

              <ul className="nav-btn">
                <li><a href="#">Sign in</a></li>
                <li><a href="#" className="btn-ghost">Get started</a></li>
              </ul>
            </div>
          </div>
        </nav>
      
        <div>
          <div className="row">
            <div className="header-content">
              <div>
                <h1>Buy and sell cryptocurrency</h1>
                <p>Coinbase is the easiest place to buy, sell, and manage your cryptocurrency portfolio.</p>

                <form action="" method="POST" className="start-form">
                  <input type="email" placeholder="Enter your email" required />
                  <input className="btn-full" type="submit" value="Get started" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

module.exports = Header