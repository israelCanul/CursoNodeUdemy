var weather = require('./weather.js');
var location = require('./location.js');

location(function(callback){
  if(!callback){
      console.log('unable to guess a location ');
      return;
  }
  weather(function(callback2){
    console.log(callback2);
  },callback);
});

//weather();
