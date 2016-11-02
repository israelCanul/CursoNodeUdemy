var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
.options({
  location : {
    alias: 'l',
    description:'Your location goes here'
  }
})
.help('help')
.argv;

if(typeof argv.location !== 'undefined'){
  weather(function(callback2){
    console.log(callback2);
  },argv.location);
}else{
  location(function(callback){
    if(!callback){
        console.log('unable to guess a location ');
        return;
    }
    weather(function(callback2){
      console.log(callback2);
    },callback.city);
  });
}





//weather();
