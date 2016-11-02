var request = require('request');

module.exports = function(callback,data){
  var city = data;

  var urlApi = 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=7303cedf9ed553ed4b6f6930f8d3b4fd&units=metric';
  //callback(urlApi);

  request({
      url:urlApi,
      json: true
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {


      var respuesta = JSON.stringify(body);
      var objeto = JSON.parse(respuesta);
      //callback(body);
      callback("It's " + body.main.temp +" in " +body.name); // Show the HTML for the Google homepage.
    }
    if (error || response.statusCode == 401) {
      callback('unable to fetch weather');
      if (response.statusCode == 401) {
        callback("was a error of Authorization Required");
      }
    }
  });
}
