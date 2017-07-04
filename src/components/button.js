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
    if (validated) {
      alert("Congratulations! You Have Successfully Registered You Company! ");
      this._clearForm();
    }

  },

  _clearForm: function() {
    $("[id='Company Name']").val("");
    $("[id='Username']").val("");
    $("[id='New Password']").val("");
    $("[id='Validate Password']").val("");
    $("[id='Email']").val("");

    $("[id='Company Name']").removeClass();;
    $("[id='Username']").removeClass();
    $("[id='New Password']").removeClass();
    $("[id='Validate Password']").removeClass();
    $("[id='Email']").removeClass();
  }
});

module.exports = Button;
