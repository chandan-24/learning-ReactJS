const ReactDom = require('react-dom');
const React = require('react');

const App = require('./components/App');

ReactDom.render(
  <App />,
  document.querySelector('#root')
);