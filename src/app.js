var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('./components/form.js');

var Hello = React.createClass({
  render: function() {
    return <Form />
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
