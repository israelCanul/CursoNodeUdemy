var persist = require('node-persist');

persist.initSync();

// persist.setItemSync("accounts",[{
//   username : "Israel ",
//   balance : 0
// }]);
var accounts = persist.getItemSync("accounts");
 console.log(persist.getItemSync("accounts"));
//
// var cuentaNueva = {
//    username : "Israel canul ",
//    balance : 2
//  };
//
// accounts.push(cuentaNueva);
// persist.setItemSync("accounts",accounts);

// console.log('starting password manager');
