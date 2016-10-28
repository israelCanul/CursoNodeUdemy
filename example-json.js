var person = {
  name : 'andrew',
  age : 24
};
console.log(person);
var personJSON = JSON.stringify(person);
console.log(personJSON);
var personObject = JSON.parse(personJSON);
console.log(personObject.name);
console.log(typeof personObject);


var animal = '{"name": "Hallery"}';

var animalObject = JSON.parse(animal);
animalObject.age = 3;

console.log(animalObject);
var animalJSON = JSON.stringify(animalObject);
console.log(animalJSON);
