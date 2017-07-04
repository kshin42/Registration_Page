var React = require('react');
var validationService = require('../services/validationService.js');

var Button = React.createClass ({
  render: function() {
    return  <button
                className="ui button positive"
                type="submit"
                onClick={this._submitForm}
            >Submit</button>
  },

  _submitForm: function() {
    var validated = validationService();
  }
});

module.exports = Button;
