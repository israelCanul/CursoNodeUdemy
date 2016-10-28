var crypto = require('crypto-js');

var secretMessage = {
  name : 'Israel',
  secretName : '2809'
};
var secretKey = '123abc';
var stringSecretName = JSON.stringify(secretMessage);
console.log(stringSecretName);
var encryptedMessage = crypto.AES.encrypt(''+stringSecretName+'',secretKey);

console.log('encr = ' + encryptedMessage);


//decrypt a message
var decrypt = crypto.AES.decrypt(encryptedMessage,secretKey);
var de = decrypt.toString(crypto.enc.Utf8);
var decryptString = JSON.parse(de);
console.log('' + decryptString.secretName);
