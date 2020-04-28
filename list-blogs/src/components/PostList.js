const React = require('react');
const reactRedux = require('react-redux');

const actions = require('../actions');
const UserHeader = require('./UserHeader');
const fetchPostsAndUsers = actions.fetchPostsAndUsers;
const connect = reactRedux.connect;

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return <div className="item" key={post.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId}/>
        </div>
      </div>
    });
  }

  render() {
    console.log(this.props.posts);
    return(
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

module.exports = connect(mapStateToProps,{fetchPostsAndUsers})(PostList);