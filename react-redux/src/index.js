const ReactDom = require('react-dom');
const React = require('react');
const ReactRedux = require('react-redux');
const redux = require('redux');

const App = require('./components/App');
const reducers = require('./reducers');

const Provider = ReactRedux.Provider;
const createStore = redux.createStore;

ReactDom.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);