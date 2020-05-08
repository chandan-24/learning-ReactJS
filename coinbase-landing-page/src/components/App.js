const React = require('react');
require('../styles/main.css');
const Header = require('./Header');
const CoinGraph = require('./CoinTable');

class App extends React.Component {
  componentDidMount() {
    const header = document.querySelector("nav");
    const logo = document.querySelector(".cb-logo img");
    const sectionOne = document.querySelector(".header-content");
    const btnFull = document.querySelector(".btn-full");
    const btnGhost = document.querySelector(".btn-ghost");

    const sectionOneOptions = {
      rootMargin: "-50px 0px 0px 0px"
    };

    const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          btnGhost.setAttribute('class', 'btn-ghost-toggle');
          btnFull.setAttribute('class', 'btn-full-toggle');
          header.classList.add("nav-scrolled");
          logo.setAttribute('src', require('../resources/cb-blue-icon.png'));
        } else {
          header.classList.remove("nav-scrolled");
          logo.setAttribute('src', require('../resources/cb-white-icon.png'));
          btnGhost.setAttribute('class', 'btn-ghost');
          btnFull.setAttribute('class', 'btn-full');
        }
      });
    },
    sectionOneOptions);

    sectionOneObserver.observe(sectionOne);
  }

  render() {
    return(
      <div>
        <Header />
        <CoinGraph />
      </div>
    )
  } 
}

module.exports = App;