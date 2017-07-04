var React = require('react');
var Field = require('./field.js');
var Button = require('./button.js');

var Form = React.createClass ({
  render: function() {
    return  <div>

      <div className="ui centered card">

    	   <h2 className="ui center aligned icon header">Company Registration</h2>
         <div className="ui divider"></div>

    	     <div className="ui form">
              <Field label="Company Name" type="text" />
              <Field label="Username" type="text" />
              <Field label="New Password" type="password" />
              <Field label="Validate Password" type="password" />
              <Field label="Email" type="text" />
  			      <Button />
		       </div>

         </div>
    </div>
  }
});

module.exports = Form;
