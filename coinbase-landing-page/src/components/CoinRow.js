const React = require('react');

class CoinRow extends React.Component {
  render(){
    return(
      <div>{this.props.coin.name}</div>
    )
  }
}

module.exports = CoinRow;