const _ = require('lodash');
const jsonPlaceholderApi = require('../api/jsonPlaceholder');

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholderApi.get('/posts');
  
  dispatch({ type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholderApi.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data});
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(getState().posts.map(post => post.userId));
  userIds.forEach(id => dispatch(fetchUser(id)));
}