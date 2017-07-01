var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function() {
    return <div>

      <div className="ui centered card"> 

    	<h2 className="ui center aligned icon header">Please Register Your Company</h2>

      <div className="ui divider"></div>

    	<div className="ui form">
  			<div className="field">
   				<label>Company Name</label>
   				<input type="text" name="company-name" placeholder="Company Name"></input>
  			</div>
  			<div className="field">
    			<label>Username</label>
    			<input type="text" name="user-name" placeholder="Username"></input>
  			</div>
        <div className="field">
          <label>Enter New Password</label>
          <input type="password" name="password" placeholder="Password"></input>
        </div>
        <div className="field">
          <label>Validate New Password</label>
          <input type="password" name="password" placeholder="Password"></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email"></input>
        </div>
  			<div className="field">
    			<div className="ui checkbox">
      				<input type="checkbox" tabIndex="0" className="hidden"></input>
      				<label>I agree to the Terms and Conditions</label>
    			</div>
  			</div>
  			<button className="ui button" type="submit">Submit</button>
		</div>

    </div>
    </div>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
