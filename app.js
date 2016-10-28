var persist = require('node-persist');

persist.initSync();
//
//First seccion of course
//
// persist.setItemSync("accounts",[{
//   username : "Israel ",
//   balance : 0
// }]);
//var accounts = persist.getItemSync("accounts");
 //console.log(persist.getItemSync("accounts"));
//
// var cuentaNueva = {
//    username : "Israel canul ",
//    balance : 2
//  };
//
// accounts.push(cuentaNueva);
// persist.setItemSync("accounts",accounts);
// console.log('starting password manager');


function createAccount(account){
  var accounts = persist.getItemSync("accounts");
  if(typeof accounts === 'undefined'){
    accounts = [];
  }
  accounts.push(account);
  persist.setItemSync("accounts",accounts);
  return account;
}

function getAccount(accountName){
  var matchedAccount;
  var accounts = persist.getItemSync("accounts");
  if(typeof accounts === 'undefined'){
    accounts = [];
  }
  accounts.forEach(function (account) {
    if(account.name === accountName){
      matchedAccount = account;
    }

  });
  return matchedAccount;
}

// createAccount({
//   name : 'Facebook',
//   username : 'narilearsi',
//   password : 'nari2809'
// });
// createAccount({
//   name : 'Facebook2',
//   username : 'narilearssi',
//   password : 'nari28s09'
// });

console.log(getAccount('Facebook2'));
