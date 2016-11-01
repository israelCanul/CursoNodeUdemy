var request = require('request');

module.exports = function(callback){
  request({url:'http://ipinfo.io',json:true}, function(error, res, body) {
    if(!error && res.statusCode == 200){
      callback(body);
    }
    if (error || res.statusCode == 401) {
      callback('unable to fetch weather');
      if (res.statusCode == 401) {
        callback("was a error of Authorization Required");
      }
    }
  });
}
