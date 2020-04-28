const React = require('react');
const ReactDom = require('react-dom');
const reactRedux = require('react-redux');
const redux = require('redux');

const reducers = require('./reducers');
const App = require('./components/App');
const Provider = reactRedux.Provider;
const createStore = redux.createStore;

ReactDom.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);