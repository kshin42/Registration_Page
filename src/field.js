var React = require('react');

var Field = React.createClass ({
  render: function() {
    return <div className="field">
      <label>{this.props.label}</label>
      <input type={this.props.type} placeholder={this.props.label}></input>
    </div>
  }
});

module.exports = Field;
