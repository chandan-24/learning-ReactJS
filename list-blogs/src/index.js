const React = require('react');
const ReactDom = require('react-dom');
const reactRedux = require('react-redux');
const redux = require('redux');
const thunk = require('redux-thunk').default;

const reducers = require('./reducers');
const App = require('./components/App');
const Provider = reactRedux.Provider;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const store = createStore(reducers, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);