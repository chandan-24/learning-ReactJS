const redux = require('redux');
const combineReducers = redux.combineReducers;

const fetchPost = require('./fetchPost');
const fetchUser = require('./fetchUser');

module.exports = combineReducers({
  posts: fetchPost,
  users: fetchUser
});