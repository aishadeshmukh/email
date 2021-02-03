const config = require("../config/config.json")

//RESPONSE FUNCTION
exports.responseFunction = (message, statusCode, result) => {

    // run "async"
    return {
        message,
        statusCode,
        result
    };
  };
  
  
  //DATE FUNCTION
  exports.dateFunction = (req, h) => {
    let date = new Date();
  
    return date.getTime();
  };