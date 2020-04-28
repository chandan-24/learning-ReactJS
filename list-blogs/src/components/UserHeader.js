const React = require('react');
const reactRedux = require('react-redux');

const connect = reactRedux.connect;

class UserHeader extends React.Component {  
  render() {
    const {user} = this.props;
    if(!user){
      return null
    }
    return(
    <div className="header">{user.name}</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {user: state.users.find(user => user.id === ownProps.userId)};
}
module.exports = connect(mapStateToProps)(UserHeader);
