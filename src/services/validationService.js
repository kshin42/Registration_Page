var validateForm = function () {
  var companyName = $("[id='Company Name']");
  var userName = $("[id='Username']");
  var password = $("[id='New Password']");
  var valPassword = $("[id='Validate Password']");
  var email = $("[id='Email']");
  var fieldListNoPass = [companyName, userName, email];
  var passList = [password, valPassword];

  var valFields = validateFieldNoPass(fieldListNoPass);
  var valPass = validatePasswords(passList);

  if (valFields==true && valPass==true) {
    return true;
  } else {
    return false;
  }
}

var validateFieldNoPass = function (fieldListNoPass) {
  var retVal;
  fieldListNoPass.forEach(function(field){
    if (field.val().length) {
      field.removeClass();
      field.addClass('valid');
    } else {
      retVal = false;
      field.removeClass();
      field.addClass('invalid');
    };
  })

  if (retVal == null){
    return true;
  } else {
    return false;
  }
}

var validatePasswords = function(passList) {
  var retVal;
  if (passList[0].val() == passList[1].val() && passList[0].val() != "" && passList[1] != "") {
    passList[0].removeClass();
    passList[1].removeClass();
    passList[0].addClass('valid');
    passList[1].addClass('valid');
  } else {
    retVal = false;
    passList[0].removeClass();
    passList[1].removeClass();
    passList[0].addClass('invalid');
    passList[1].addClass('invalid');
  }

  if (retVal == null){
    return true;
  } else {
    return false;
  }
}

module.exports = validateForm;
