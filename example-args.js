var argv = require('yargs')
.command('hello','Greets the user',function(yargs) {
  yargs.options({
    name : {
      demand:true,
      alias: 'n',
      description:'Your first name goes here'
    },
    lastName : {
      demand:true,
      alias: 'l',
      description:'Your Last name goes here'
    }
  }).help('help');
})
.help('help')
.argv;
var  command = argv._[0];



if(command === 'hello' && typeof argv.name !== 'undefined'){
  console.log('hello '+ argv.name + '!');
}else if(command == 'hello'){
  console.log('hello world');
}
